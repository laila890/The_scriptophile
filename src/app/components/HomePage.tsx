import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, BookOpen, X, Book, FileText, Heart } from "lucide-react";
import { useState, type MouseEvent, type ReactNode } from "react";
//import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onEnter: () => void;
}

const poemsList = [
  "Moonlit Whispers",
  "The Garden of Ink",
  "Velvet Nights",
  "Echoes of You",
];

const storiesList = [
  "The Letter Never Sent",
  "A Walk Through Autumn",
  "The Last Page",
];

const THICKNESS = 22; // depth of the closed book in px

// Wraps a page card so it sits at an angle (like an open book) and has stacked sheets behind it
function Slab({ side, children }: { side: "left" | "right"; children: ReactNode }) {
  const angle = side === "left" ? 12 : -12;

  return (
    <div
      className="relative flex"
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: side === "left" ? "right center" : "left center",
        transform: `rotateY(${angle}deg)`,
      }}
    >
      {[4, 8, 12, 16, 20].map((z) => (
        <div
          key={z}
          className="absolute inset-0 rounded-xl bg-[#f3e6d0] border border-rose-200"
          style={{ transform: `translateZ(-${z}px)` }}
        />
      ))}

      <div
        className="absolute inset-y-2 w-5 rounded-sm pointer-events-none"
        style={{
          [side === "left" ? "left" : "right"]: "-18px",
          transform: `rotateY(${side === "left" ? -90 : 90}deg)`,
          transformOrigin: side === "left" ? "right center" : "left center",
          background:
            "repeating-linear-gradient(180deg,#fffdf4 0 2px,#d9c8a9 2px 3px,#f7ecd8 3px 5px)",
        }}
      />

      {children}

      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          transform: "translateZ(2px)",
          boxShadow: "inset 0 0 18px rgba(255,255,255,.28), inset 0 0 10px rgba(0,0,0,.08)",
        }}
      />
    </div>
  );
}

export function HomePage({ onEnter }: HomePageProps) {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  // Mouse-follow tilt for the whole 3D scene
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tiltY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 18 });
  const tiltX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  // Working image URLs (Pexels)
  const bookCoverUrl = "/love.jpg";
  const backgroundImageUrl = "/love1.png";

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* FULL‑PAGE BOOK BACKGROUND */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={backgroundImageUrl}
          alt="Vintage book page background"
          className="w-full h-full object-cover brightness-90 contrast-105 saturate-90"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-amber-900/20" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px",
          }}
        />
      </div>

      {/* Navbar */}
      <header className="relative z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <Heart size={18} className="text-rose-300" />
          <span className="text-xl font-serif tracking-wide text-white">Laila’s Notebook</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex gap-8 text-white/80 font-serif"
        >
      
        </motion.div>
      </header>

      {/* Hero */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 min-h-[calc(100vh-80px)] flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 w-full">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 font-mono text-xs tracking-[0.3em] text-rose-200">
              <div className="w-8 h-[1px] bg-rose-300" />
              <span>EST. 2026</span>
            </div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif text-white tracking-tight leading-[1.05] drop-shadow-lg">
              Love<br />Poems
            </h1>
            <div className="w-16 h-[2px] bg-rose-300" />
            <p className="text-rose-100 text-lg max-w-md leading-relaxed font-light">
              A delicate collection of romantic poetry, handwritten emotions, and soft words.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block bg-white/20 backdrop-blur-md border border-rose-300/50 p-4 rounded-sm"
            >
              <p className="text-2xl font-handwriting text-rose-100">“poetry heals quietly.”</p>
            </motion.div>
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  onClick={() => setIsBookOpen(true)}
  className="group bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full shadow-md flex items-center gap-2 transition"
>
  Explore Collection
  <ArrowRight
    size={16}
    className="group-hover:translate-x-1 transition"
  />
</motion.button>
             
            </div>
          </motion.div>

          {/* Right side – Interactive Book Box (3D) */}
          <div
            className="relative flex justify-center items-center min-h-[500px]"
            style={{ perspective: 1600 }}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
          >
            {/* floor shadow */}
            <motion.div
              aria-hidden
              className="absolute bottom-6 left-1/2 h-8 w-[55%] -translate-x-1/2 rounded-full bg-black/50 blur-2xl pointer-events-none"
              animate={{ scaleX: isBookOpen ? 1.9 : 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* tilt layer: follows the mouse */}
            <motion.div
              className="flex w-full justify-center items-center"
              style={{
                transformStyle: "preserve-3d",
                rotateX: reduceMotion ? 0 : tiltX,
                rotateY: reduceMotion ? 0 : tiltY,
              }}
            >
              <AnimatePresence mode="wait">
                {!isBookOpen ? (
                  <motion.div
                    key="book-closed"
                    initial={{ opacity: 0, scale: 0.9, rotateY: -60, rotateX: -6 }}
                    animate={{ opacity: 1, scale: 1, rotateY: -20, rotateX: -6 }}
                    exit={{ opacity: 0, scale: 0.9, rotateY: -80, rotateX: -6 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                    onClick={() => setIsBookOpen(true)}
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative cursor-pointer group"
                  >
                    <div
                      className="absolute -inset-4 bg-rose-300/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition"
                      style={{ transform: "translateZ(-30px)" }}
                    />

                    {/* the book itself, now with real thickness */}
                    <div
                      className="relative w-[280px] h-[420px] md:w-[340px] md:h-[500px]"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* back cover */}
                      <div
                        className="absolute inset-0 rounded-md bg-rose-900 shadow-2xl"
                        style={{ transform: `translateZ(-${THICKNESS}px)` }}
                      />
                      {/* page sheets */}
                      {[3, 7, 11, 15, 19].map((z, i) => (
                        <div
                          key={z}
                          className="absolute inset-y-0 left-0 bg-[#f3e6d0] border-r border-amber-200"
                          style={{ right: i * 1.5, transform: `translateZ(-${z}px)` }}
                        />
                      ))}
                      {/* page edges (right side) */}
                      <div
                        className="absolute right-0 top-0 h-full"
                        style={{
                          width: THICKNESS,
                          transform: `translate3d(${THICKNESS / 2}px,0,-${THICKNESS / 2}px) rotateY(90deg)`,
                          background:
                            "repeating-linear-gradient(90deg,#f6ead5 0 1px,#d8c5a4 1px 2px)",
                        }}
                      />
                      {/* page edges (bottom) */}
                      <div
                        className="absolute left-0 bottom-0 w-full"
                        style={{
                          height: THICKNESS,
                          transform: `translate3d(0,${THICKNESS / 2}px,-${THICKNESS / 2}px) rotateX(-90deg)`,
                          background:
                            "repeating-linear-gradient(180deg,#d8c5a4 0 1px,#f6ead5 1px 3px)",
                        }}
                      />

                      {/* full spine */}
                      <div
                        className="absolute left-0 top-0 h-full"
                        style={{
                          width: THICKNESS,
                          transform: `translate3d(-${THICKNESS / 2}px,0,-${THICKNESS / 2}px) rotateY(-90deg)`,
                          background:
                            "linear-gradient(90deg,#321016,#6d2832 45%,#45151c 75%,#2a0b10)",
                          borderRadius: "7px 0 0 7px",
                          boxShadow:
                            "inset 4px 0 8px rgba(255,255,255,.08), inset -5px 0 10px rgba(0,0,0,.28)",
                        }}
                      />

                      {/* top edge highlight */}
                      <div
                        className="absolute left-1 top-0 w-[calc(100%-2px)] pointer-events-none"
                        style={{
                          height: 3,
                          transform: "translateZ(21px)",
                          background: "rgba(255,255,255,.18)",
                        }}
                      />

                      {/* page edges (top) */}
                      <div
                        className="absolute left-0 top-0 w-full"
                        style={{
                          height: THICKNESS,
                          transform: `translate3d(0,-${THICKNESS / 2}px,-${THICKNESS / 2}px) rotateX(90deg)`,
                          background:
                            "repeating-linear-gradient(180deg,#f6ead5 0 1px,#d8c5a4 1px 2px)",
                        }}
                      />

                      {/* front cover (your original image box) */}
                      <div className="absolute inset-0 rounded-md shadow-2xl overflow-hidden">
                        <ImageWithFallback
                          src={bookCoverUrl}
                          alt="Vintage poetry book"
                          className="w-full h-full object-cover"
                        />
                        {/* spine crease + soft gloss for depth */}
                        <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20" />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                          <span className="bg-white/90 text-stone-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                            <BookOpen size={14} /> open book
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="book-open"
                    initial={{ opacity: 0, y: 30, rotateY: -70 }}
                    animate={{ opacity: 1, y: 0, rotateY: 0 }}
                    exit={{ opacity: 0, y: 30, rotateY: 70 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 150 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative w-full max-w-2xl"
                  >
                    <button
                      onClick={() => setIsBookOpen(false)}
                      className="absolute -top-12 right-0 z-30 bg-white/90 backdrop-blur-md p-2 rounded-full border border-rose-300 hover:bg-white transition"
                    >
                      <X size={18} className="text-stone-700" />
                    </button>
                    <div
                      className="grid md:grid-cols-2 gap-5"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Poems card */}
                      <Slab side="left">
                        <div className="flex-1 bg-white/80 backdrop-blur-md border border-rose-200 rounded-xl overflow-hidden shadow-xl">
                          <div className="bg-gradient-to-r from-rose-100 to-transparent px-5 py-4 border-b border-rose-200">
                            <div className="flex items-center gap-2">
                              <Book className="w-5 h-5 text-rose-600" />
                              <h3 className="text-xl font-serif text-stone-800">Poems</h3>
                            </div>
                          </div>
                          <div className="p-4 space-y-2 max-h-[400px] overflow-y-auto custom-scroll">
                            {poemsList.map((poem, idx) => (
                              <motion.button
                                key={idx}
                                whileHover={{ x: 6 }}
                                onClick={onEnter}
                                className="w-full text-left px-4 py-2 rounded-lg text-stone-700 hover:text-rose-600 hover:bg-rose-50 transition flex justify-between items-center group"
                              >
                                <span className="font-serif">{poem}</span>
                                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      </Slab>
                      {/* Stories card */}
                      <Slab side="right">
                        <div className="flex-1 bg-white/80 backdrop-blur-md border border-rose-200 rounded-xl overflow-hidden shadow-xl">
                          <div className="bg-gradient-to-r from-amber-100 to-transparent px-5 py-4 border-b border-rose-200">
                            <div className="flex items-center gap-2">
                              <FileText className="w-5 h-5 text-amber-700" />
                              <h3 className="text-xl font-serif text-stone-800">Stories</h3>
                            </div>
                          </div>
                          <div className="p-4 space-y-2 max-h-[400px] overflow-y-auto custom-scroll">
                            {storiesList.map((story, idx) => (
                              <motion.button
                                key={idx}
                                whileHover={{ x: 6 }}
                                onClick={onEnter}
                                className="w-full text-left px-4 py-2 rounded-lg text-stone-700 hover:text-amber-600 hover:bg-amber-50 transition flex justify-between items-center group"
                              >
                                <span className="font-serif">{story}</span>
                                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      </Slab>
                    </div>
                    <div className="text-center text-white/80 text-xs mt-6 bg-black/20 backdrop-blur-sm w-fit mx-auto px-4 py-1 rounded-full">
                      ✦ close the book to go back ✦
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* hint stays flat so it doesn't skew with the book */}
            {!isBookOpen && (
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white text-sm bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none">
                ✦ click to open ✦
              </div>
            )}
          </div>
        </div>
      </main>

      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 4px; }
        .custom-scroll::-webkit-scrollbar-track { background: #fce4e4; border-radius: 10px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #e8a0a0; border-radius: 10px; }
        .perspective { perspective: 1600px; transform-style: preserve-3d; }
        .font-handwriting { font-family: 'Caveat', cursive; }

        .group,
        .group > div {
          transform-style: preserve-3d;
        }

        @media (hover: hover) and (pointer: fine) {
          .group:hover {
            filter: drop-shadow(20px 26px 18px rgba(0,0,0,.18));
          }
        }
      `}</style>
    </div>
  );
}