import { BookOpen } from "lucide-react";

interface SidebarLayoutProps {
  companion: any;
  handleCompanionClick: () => void;
}

export default function SidebarLayout({
  companion,
  handleCompanionClick
}: SidebarLayoutProps) {
  return (
    <div className="bg-[#fffaf6] border border-[#e7d8c8] shadow-xl rounded-xl p-6 sticky top-6 h-fit">

      <h3 className="text-xl font-serif mb-5 flex items-center gap-2 text-stone-800">
        <BookOpen size={18} className="text-rose-500" />
        You might also like
      </h3>

      {companion ? (
        <div
          onClick={handleCompanionClick}
          className="cursor-pointer group"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-[#e7d8c8] bg-stone-100">

            <img
              src="/love.jpg"
              alt={companion.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          <div className="mt-4">
            <span className="text-[10px] tracking-[0.25em] uppercase text-stone-500">
              {companion.category}
            </span>

            <h4 className="mt-2 text-2xl font-serif text-stone-800 group-hover:text-rose-600 transition">
              {companion.title}
            </h4>

            <p className="text-sm leading-relaxed text-stone-600 mt-3">
              {companion.excerpt}
            </p>

            <div className="flex items-center justify-between text-xs text-stone-400 mt-5">
              <span>{companion.date}</span>
              <span>{companion.readTime}</span>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-stone-500 italic">
          No companion found
        </p>
      )}
    </div>
  );
}