import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookHeart,
  ArrowLeft,
  Heart,
  Calendar,
  Clock
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
  title: "Where Our Worlds Meet",
  excerpt:
    "Two hearts, two cultures, and a love that slowly turns unfamiliar traditions into something that feels like home.",
  content: `He:

Teach me, my love, the language of your home,
the words you whisper when you're half asleep.
Teach me "aap" and "tum," and where they start,
and all the little secrets that you keep.

I'll learn the streets that raised you, one by one,
the songs your mother sang when you were young.
I'll drink your chai exactly as you like,
and learn the stories hidden in your eyes.

She:

Then come closer, my love. We'll start right here.
The chai must simmer slowly, just like this.
I'll show you how my world became so dear,
and laugh when you forget the ginger twist.

The roti may not turn out round or right,
the dal may burn, and you may lose your way.
But I'll still sit beside you every night,
because I'd choose you in the smallest days.

He:

I wore your dhoti, stumbling through the room,
while you laughed until your eyes began to shine.
I burned the dal and filled the place with smoke,
yet somehow, in that moment, you were mine.

I'll learn your Diwali, every little light,
the prayers, the colors, every cherished part.
And when your home becomes our home someday,
I'll know I didn't just learn your culture—
I learned your heart.

She:

And when you say "namaste" in that sweet way,
I'll smile because I know you're trying for me.
You don't have to speak my language perfectly;
your love has always spoken clearly.

You are my moon on every restless night,
the hand I reach for when the world feels far.
And if our worlds were never meant to meet,
then tell me why you feel so much like home?

Both:

Two cultures, two stories, two hearts finding one another,
two different worlds becoming one warm home.

We'll learn each other slowly, patiently,
through chai-stained mornings and candlelit nights.
We'll laugh at all the words we say wrong,
celebrate the traditions we make our own,
and love each other in a thousand little ways.

Because I don't want only a life beside you—
I want your memories, your language, your traditions,
your childhood stories, your favorite songs,
your ordinary mornings and your quiet nights.

And if love is a journey between two worlds,
then take my hand.

I'll learn yours,
you'll learn mine,
and somewhere between them,
we'll build a world that belongs only to us. ❤️.......laila...........`,
  date: "May 8, 2026",
  readTime: "4 min read",
  category: "story",
  coverImage: "/itid.png"
}
    ,
  {
    id: 2,
    title: "The Last Bookstore",
    excerpt:
      "In a world where everything had gone digital, one little bookstore still smelled of paper, rain, and memories.",
    content: `In a city that had forgotten
what paper felt like,
there was still one bookstore
that refused to disappear.

It stood quietly
between two glass buildings,
its windows dusty,
its wooden door older than most
of the people who walked past it.

Inside, everything smelled of paper.

Old pages.
Coffee.
Rain from forgotten afternoons.

She found the place
on a lonely evening
when she wasn't really looking
for a book.

She was looking for somewhere
to be alone.

The old man behind the counter
didn't ask her what she wanted.

He simply smiled
and said,

"Sometimes the right book
finds you."

She smiled at that.

Then she walked between the shelves
until she found a book
with no title on its cover.

Inside the first page
someone had written:

For the person
who is still waiting
for something beautiful
to happen.

She sat down.

And for the first time
in a very long while,
she didn't feel like leaving.

Outside,
the city kept moving.

Cars passed.
Phones rang.
People hurried home.

But inside that little bookstore,
time seemed to have forgotten her.

Sometimes,
she would later think,
we don't find places
because we need them.

We find them
because some part of us
already knows
we are tired of running.❤️.......laila...........`,
    date: "May 12, 2026",
    readTime: "4 min read",
    category: "story",
    coverImage: "/bg-poetry2.jpg"
  },

  {
    id: 3,
    title: "Between the Stars",
    excerpt:
      "Two people can stand beneath the same sky and still be worlds apart.",
    content: `I wonder if you ever look at the moon
and think of me.

Not because I expect you to,
but because there are nights
when the sky feels too beautiful
not to share with someone.

I would have told you
about the stars tonight—

how some looked close enough to touch,
yet were impossibly far away.

Maybe we were like that.

Two people
standing under the same sky,
feeling something
neither of us was brave enough to name.

You were there.

I was there.

And somehow,
that was never enough.

There were words
we kept swallowing.

Questions
we were too afraid to ask.

Hands that almost touched
and hearts that almost stayed.

Maybe timing
has always been cruel that way.

It gives us people
when we are not ready
to keep them.

And then,
when we finally understand
what they meant to us,
they are already somewhere
far beyond our reach.

Still,
if there is another life,
another night,
another version of us,

I hope we find each other sooner.

I hope you hold my hand
before the world teaches us
how easily beautiful things
can disappear.

And if we still have to part,

I hope we at least get
one perfect night beneath the stars—

one night
where neither of us
has to pretend
we don't love each other.❤️.......laila...........`,
    date: "May 10, 2026",
    readTime: "3 min read",
    category: "poem",
    coverImage: "/love3.png"
  },

  {
    id: 4,
    title: "Coffee at Dawn",
    excerpt:
      "Some love stories are never spoken aloud. They live quietly between two cups of coffee and unfinished conversations.",
    content: `She ordered black coffee every morning.

Not because she liked it bitter,

but because some mornings
she had already tasted
enough sweetness.

He used to sit across from her,
saying very little,
watching the sunlight
slowly find its way
through the window.

They never called it love.

Maybe because love sounded
too big for something
that lived so quietly between them.

It was in the little things.

The way he remembered her order.

The way she always moved
the sugar toward him
without asking.

The way he noticed
when she had a bad day.

The way she smiled
whenever he walked through the door.

They never said,
"I missed you."

They simply showed up.

Every morning.

At the same table.

At the same time.

Until one morning,
she didn't come.

He waited.

One coffee became two.

Then three.

The chair across from him
remained empty.

Years later,
he would still order black coffee.

Not because he couldn't
drink anything else.

But because some memories
have tastes of their own.

And sometimes,
love doesn't end
with a goodbye.

Sometimes it ends
with an empty chair,

an unfinished conversation,

and two people
pretending they didn't want
to stay a little longer.                                              
    ❤️.......laila...........`,
    date: "May 8, 2026",
    readTime: "4 min read",
    category: "story",
    coverImage: "/cfe.jpeg"
  },

  {
    id: 5,
    title: "Velvet Nights",
    excerpt:
      "Some memories arrive softly after midnight, carrying the warmth of someone we never quite learned to forget.",
    content: `Just as clouds occasionally veil the stars,
memories of you gently veil my thoughts.

You arrive without knocking—

in the quiet after midnight,
in the warmth of an empty room,
in every song that sounds
a little too much like us.

I still remember your smile.

Not the perfect one,

but the one you tried to hide
when you were looking at me.

There was something dangerous
about the way you looked at me—

soft enough to make me stay,
deep enough to make me forget
I was supposed to leave.

Some nights,
I still imagine you beside me.

Not saying anything.

Just sitting there,
close enough
for our shoulders to touch.

Maybe that's what I miss most.

Not the conversations.

Not even the kisses.

Just the comfort
of knowing you were there.

You had a way
of making ordinary nights
feel like something
I would remember forever.

And perhaps that's why
forgetting you has been so difficult.

How do you forget someone
who became a part
of the quietest corners
of your heart?

Wherever the world has taken you,
I hope life has been gentle with you.

I hope someone makes you laugh
the way you once made me.

And if you ever think of me,

I hope you remember
that somewhere, once,

there was someone
who looked at you
like you were the most beautiful
thing the night had ever kept secret.

Someone who loved you quietly.

Someone who meant every word.

And someone who,
even after all this time,
still remembers the way
you made ordinary nights
feel like home..❤️.......laila...........`,
    date: "May 8, 2026",
    readTime: "4 min read",
    category: "story",
    coverImage: "/love8.png"
  },
  {
    id: 6,
    title: "Whispers in the Rain",
    excerpt:
      "Some people leave with goodbyes. Others remain quietly in the little things we never learn to forget...",
    content: `The rain came quietly tonight,
the way you once came into my life—
without warning,
without asking to stay.

I watched the drops
slide slowly down my window
and somehow thought of your hands,
the warmth of them,
the way they made silence
feel a little less lonely.

There are people
we meet for a moment
and somehow carry for years.

You became one of those people.

I still find you
in the smallest things—
in songs I no longer play,
in streets I don't walk anymore,
in the smell of rain
when the evening becomes quiet.

Some people leave with goodbyes.

You left in little things—
an empty side of the bed,
a familiar perfume passing by,
a name I still hesitate to say,
and memories that arrive
without asking permission.

Maybe that's what missing someone is.

Not wanting them back every day,
but secretly wishing
the universe would let you meet again
just once.

Not to change anything.

Not to ask why they left.

Just to stand there
for a few quiet seconds
and look into their eyes again...

just long enough
to know if they still feel like home.❤️.......laila...........`,
    date: "May 15, 2026",
    readTime: "3 min read",
    category: "poem",
    coverImage: "/bg-poetry1.jpg"
  },

];

function ReadingView({
  item,
  onClose
}: {
  item: Content;
  onClose: () => void;
}) {
  const [mainItem, setMainItem] = useState(item);
  useEffect(() => {
  const originalOverflow = document.body.style.overflow;

  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = originalOverflow;
  };
}, []);

  useEffect(() => {
    setMainItem(item);
  }, [item]);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
{/* FIXED BACKGROUND */}
<div
  className="fixed inset-0"
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(36, 24, 17, 0.35),
        rgba(36, 24, 17, 0.35)
      ),
      url('/love.jpg')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
/>

      {/* READING CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 py-8 md:py-12">
        {/* BACK BUTTON */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-[#f6e7d5] mb-10 hover:opacity-80 transition"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* SINGLE NOTEBOOK PAGE */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-3xl bg-[#f3e4d1] p-7 sm:p-10 md:p-14 shadow-[0_25px_80px_rgba(0,0,0,0.5)] border border-[#c9ae8c]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(140,100,70,0.09) 1px, transparent 1px)",
              backgroundSize: "100% 38px"
            }}
          >
            {/* META */}
            <div className="flex flex-wrap gap-4 text-xs md:text-sm text-[#7b5c45] mb-7">
              <span className="tracking-[0.2em]">
                {mainItem.category.toUpperCase()}
              </span>

              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {mainItem.date}
              </span>

              <span className="flex items-center gap-1">
                <Clock size={14} />
                {mainItem.readTime}
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#3d291d] mb-9 leading-tight">
              {mainItem.title}
            </h1>

            {/* CONTENT */}
            <div className="whitespace-pre-line text-[#5c4635] leading-[2.15] md:leading-[2.3] text-base md:text-lg font-serif">
              {mainItem.content}
            </div>

            {/* END HEART */}
            <Heart
              className="mx-auto mt-14 text-rose-700"
              size={18}
            />
          </motion.div>
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
      : sampleContent.filter(
          (content) => content.category === filter
        );

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* MAIN BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/love1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#241811]/35" />

      {/* VINTAGE TINT */}
      <div className="absolute inset-0 bg-[#3b2417]/35" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* BACK */}
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
                <BookHeart
                  className="text-[#f6d7c3]"
                  size={26}
                />
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
          {["all", "story", "poem"].map((tab) => (
            <button
              key={tab}
              onClick={() =>
                setFilter(
                  tab as "all" | "story" | "poem"
                )
              }
              className={`px-6 py-3 text-sm uppercase tracking-[0.25em] transition duration-300 ${
                filter === tab
                  ? "bg-[#f3dfc4] text-[#3d291d] shadow-lg"
                  : "bg-white/10 text-[#f6e7d5] border border-white/20 backdrop-blur-sm hover:bg-white/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* WRITING CARDS */}
        <div className="space-y-14">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.08,
                duration: 0.6
              }}
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
                  {/* CATEGORY */}
                  <span className="text-xs tracking-[0.35em] text-[#7b5c45] uppercase">
                    {item.category}
                  </span>

                  {/* TITLE */}
                  <h2 className="text-4xl md:text-5xl font-serif text-[#3f2b1f] mt-5 leading-tight">
                    {item.title}
                  </h2>

                  {/* EXCERPT */}
                  <p className="text-[#5f4635] mt-6 text-lg leading-[1.9] max-w-2xl">
                    {item.excerpt}
                  </p>

                  {/* DIVIDER */}
                  <div className="w-20 h-[1px] bg-[#b38b6d] mt-8 mb-7" />

                  {/* DATE + READ TIME */}
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

      {/* READING VIEW */}
      <AnimatePresence>
        {selectedItem && (
          <ReadingView
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}