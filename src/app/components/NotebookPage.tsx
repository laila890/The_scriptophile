import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookHeart,
  ArrowLeft,
  Heart,
  Calendar,
  Clock,
  BookOpen
} from "lucide-react";

export interface Content {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: "story" | "poem";
  coverImage: string;
}

const sampleContent: Content[] = [
  {
    id: 1,
    title: "Whispers in the Rain",
    excerpt: "A gentle rain falls on the city streets...",
    content: `A gentle rain falls on the city streets,
Carrying memories of yesterday,
Each droplet a whisper of time,
Dancing on windows, singing its rhyme.`,
    date: "May 15, 2026",
    readTime: "2 min read",
    category: "poem",
    coverImage: "/bg-poetry1.jpg"
  },
  {
    id: 2,
    title: "The Last Bookstore",
    excerpt: "In a world where everything had gone digital...",
    content: `In a world where everything had gone digital,
one dusty bookstore still smelled of paper and memory.`,
    date: "May 12, 2026",
    readTime: "3 min read",
    category: "story",
    coverImage: "/bg-poetry2.jpg"
  },
  {
    id: 3,
    title: "Between the Stars",
    excerpt: "Two souls drifting in the cosmic void...",
    content: `Two souls drifting between galaxies,
finding each other in silence.`,
    date: "May 10, 2026",
    readTime: "2 min read",
    category: "poem",
    coverImage: "/love3.png"
  },
  {
    id: 4,
    title: "Coffee at Dawn",
    excerpt: "She always ordered black coffee...",
    content: `She always ordered black coffee,
and watched the rain before sunrise.`,
    date: "May 8, 2026",
    readTime: "3 min read",
    category: "story",
    coverImage: "/love2.png"
  }
];

function getCompanion(current: Content, all: Content[]) {
  const opposite = current.category === "poem" ? "story" : "poem";

  const list = all.filter(c => c.category === opposite);

  return list.length
    ? list[Math.floor(Math.random() * list.length)]
    : null;
}

function ReadingView({
  item,
  onClose,
  allContent
}: {
  item: Content;
  onClose: () => void;
  allContent: Content[];
}) {
  const [mainItem, setMainItem] = useState(item);

  const [companion, setCompanion] = useState<Content | null>(
    getCompanion(item, allContent)
  );

  useEffect(() => {
    setMainItem(item);
    setCompanion(getCompanion(item, allContent));
  }, [item, allContent]);

  const handleCompanionClick = () => {
    if (companion) {
      setMainItem(companion);
      setCompanion(getCompanion(companion, allContent));
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/love.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      {/* DARK FILM */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-[#f6e7d5] mb-10 hover:opacity-80 transition"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* MAIN PAPER */}
          <div
            className="bg-[#f3e4d1] p-8 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.5)] border border-[#c9ae8c]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(140,100,70,0.09) 1px, transparent 1px)",
              backgroundSize: "100% 38px"
            }}
          >
            <div className="flex flex-wrap gap-4 text-sm text-[#7b5c45] mb-6">
              <span>{mainItem.category.toUpperCase()}</span>

              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {mainItem.date}
              </span>

              <span className="flex items-center gap-1">
                <Clock size={14} />
                {mainItem.readTime}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-serif text-[#3d291d] mb-8 leading-tight">
              {mainItem.title}
            </h1>

            <div className="whitespace-pre-line text-[#5c4635] leading-[2.3] text-lg font-serif">
              {mainItem.content}
            </div>

            <Heart
              className="mx-auto mt-12 text-rose-700"
              size={18}
            />
          </div>

          {/* SIDE CARD */}
          <div className="bg-[#ead7bf] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] border border-[#c9ae8c]">
            <h3 className="text-2xl font-serif text-[#3f2b1f] mb-6 flex items-center gap-2">
              <BookOpen size={18} />
              You might also like
            </h3>

            {companion && (
              <div
                onClick={handleCompanionClick}
                className="cursor-pointer"
              >
                <div className="overflow-hidden">
                  <img
                    src={companion.coverImage}
                    alt={companion.title}
                    className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
                  />
                </div>

                <h4 className="mt-5 text-3xl font-serif text-[#3f2b1f]">
                  {companion.title}
                </h4>

                <p className="mt-3 text-[#5c4635] leading-relaxed">
                  {companion.excerpt}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function NotebookPage({
  onBack
}: {
  onBack: () => void;
}) {
  const [selectedItem, setSelectedItem] =
    useState<Content | null>(null);

  const [filter, setFilter] = useState<
    "all" | "story" | "poem"
  >("all");

  const filtered =
    filter === "all"
      ? sampleContent
      : sampleContent.filter(c => c.category === filter);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* MAIN BG */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/love1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* VINTAGE TINT */}
      <div className="absolute inset-0 bg-[#3b2417]/35" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#f5e4cf] mb-10 hover:opacity-80 transition"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          {/* NOTEBOOK HEADER */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-full bg-[#f3dfc4]/20 border border-[#f3dfc4]/40 flex items-center justify-center backdrop-blur-sm">
                <BookHeart className="text-[#f6d7c3]" size={26} />
              </div>

              <div>
                <p className="uppercase tracking-[0.35em] text-[#d8b89c] text-xs">
                  Personal Writings
                </p>

                <h1 className="text-5xl md:text-7xl font-serif text-[#f8e7d5] leading-none mt-2">
                  Laila's Notebook
                </h1>
              </div>
            </div>

            <div className="w-32 h-[1px] bg-[#d6b89d]/60 mb-6" />

            <p className="text-[#ead7bf] text-lg leading-relaxed max-w-2xl font-light">
              Fragments of love, loneliness, midnight thoughts,
              poetry, and stories written softly between sleepless
              nights.
            </p>
          </div>
        </motion.div>

        {/* FILTERS */}
        <div className="flex gap-4 mt-14 mb-16 flex-wrap">
          {["all", "story", "poem"].map(tab => (
            <button
              key={tab}
              onClick={() =>
                setFilter(tab as "all" | "story" | "poem")
              }
              className={`px-6 py-3 text-sm uppercase tracking-[0.25em] transition duration-300
              ${
                filter === tab
                  ? "bg-[#f3dfc4] text-[#3d291d] shadow-lg"
                  : "bg-white/10 text-[#f6e7d5] border border-white/20 backdrop-blur-sm hover:bg-white/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <div className="space-y-14">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setSelectedItem(item)}
              className={`
                group
                relative
                cursor-pointer
                overflow-hidden
                bg-[#f2dfc8]
                border border-[#c9ae8c]
                shadow-[0_20px_70px_rgba(0,0,0,0.45)]
                transition duration-500
                hover:-translate-y-1
                ${
                  i % 2 === 0
                    ? "rotate-[-0.5deg]"
                    : "rotate-[0.5deg]"
                }
              `}
            >
              <div className="grid md:grid-cols-[320px_1fr]">
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full min-h-[360px] object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-black/15" />
                </div>

                {/* TEXT */}
                <div
                  className="p-8 md:p-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(120,90,60,0.08) 1px, transparent 1px)",
                    backgroundSize: "100% 38px"
                  }}
                >
                  <span className="text-xs tracking-[0.35em] text-[#7b5c45] uppercase">
                    {item.category}
                  </span>

                  <h2 className="text-4xl md:text-5xl font-serif text-[#3f2b1f] mt-5 leading-tight">
                    {item.title}
                  </h2>

                  <p className="text-[#5f4635] mt-6 text-lg leading-[1.9] max-w-2xl">
                    {item.excerpt}
                  </p>

                  <div className="w-20 h-[1px] bg-[#b38b6d] mt-8 mb-7" />

                  <div className="flex items-center justify-between text-sm text-[#7a604d] uppercase tracking-[0.18em]">
                    <span>{item.date}</span>

                    <span>{item.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <ReadingView
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
            allContent={sampleContent}
          />
        )}
      </AnimatePresence>
    </div>
  );
}