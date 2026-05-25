import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, X, Book, FileText, Heart } from "lucide-react";
import { useState } from "react";
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

export function HomePage({ onEnter }: HomePageProps) {
  const [isBookOpen, setIsBookOpen] = useState(false);

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
          <button className="hover:text-rose-300 transition">Poems</button>
          <button className="hover:text-rose-300 transition">Stories</button>
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
                onClick={onEnter}
                className="group bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full shadow-md flex items-center gap-2 transition"
              >
                Explore Collection <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </motion.button>
              <button className="border border-rose-300 text-white px-8 py-3 rounded-full hover:bg-white/20 transition backdrop-blur-sm">
                Read Poems
              </button>
            </div>
          </motion.div>

          {/* Right side – Interactive Book Box */}
          <div className="relative flex justify-center items-center min-h-[500px]">
            <AnimatePresence mode="wait">
              {!isBookOpen ? (
                <motion.div
                  key="book-closed"
                  initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                  onClick={() => setIsBookOpen(true)}
                  className="relative cursor-pointer group perspective"
                >
                  <div className="absolute -inset-4 bg-rose-300/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition" />
                  <div className="relative w-[280px] h-[420px] md:w-[340px] md:h-[500px] rounded-md shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <ImageWithFallback
                      src={bookCoverUrl}
                      alt="Vintage poetry book"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <span className="bg-white/90 text-stone-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                        <BookOpen size={14} /> open book
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white text-sm bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    ✦ click to open ✦
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="book-open"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 150 }}
                  className="relative w-full max-w-2xl"
                >
                  <button
                    onClick={() => setIsBookOpen(false)}
                    className="absolute -top-12 right-0 z-30 bg-white/90 backdrop-blur-md p-2 rounded-full border border-rose-300 hover:bg-white transition"
                  >
                    <X size={18} className="text-stone-700" />
                  </button>
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Poems card */}
                    <div className="bg-white/80 backdrop-blur-md border border-rose-200 rounded-xl overflow-hidden shadow-xl">
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
                    {/* Stories card */}
                    <div className="bg-white/80 backdrop-blur-md border border-rose-200 rounded-xl overflow-hidden shadow-xl">
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
                  </div>
                  <div className="text-center text-white/80 text-xs mt-6 bg-black/20 backdrop-blur-sm w-fit mx-auto px-4 py-1 rounded-full">
                    ✦ close the book to go back ✦
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 4px; }
        .custom-scroll::-webkit-scrollbar-track { background: #fce4e4; border-radius: 10px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #e8a0a0; border-radius: 10px; }
        .perspective { perspective: 1000px; }
        .font-handwriting { font-family: 'Caveat', cursive; }
      `}</style>
    </div>
  );
}