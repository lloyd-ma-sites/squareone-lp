// Placeholder articles — replace these as you publish.
const posts = [
  { date: "", category: "Article", title: "Your first article will appear here" },
  { date: "", category: "Article", title: "Add insights, updates and commentary" },
  { date: "", category: "Article", title: "Each post can link to a full article" },
];

export default function Insights() {
  return (
    <section id="insights" className="bg-sand py-24">
      <div className="reveal mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-olive">
            Insights and Updates
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-brown md:text-4xl">
            Thinking from the practice.
          </h2>
          <p className="mt-4 text-brown/70">
            This is where articles will be published. The list below is placeholder
            content until your first pieces go live.
          </p>
        </div>

        <ul className="mt-12 divide-y divide-brown/10 border-t border-brown/10">
          {posts.map((post) => (
            <li key={post.title}>
              <a
                href="#"
                className="group flex flex-col gap-2 py-6 transition-colors hover:bg-cream/60 sm:flex-row sm:items-center sm:gap-8"
              >
                <span className="w-28 shrink-0 text-xs font-semibold uppercase tracking-wider text-olive">
                  {post.category}
                </span>
                <span className="font-serif text-lg text-brown group-hover:text-olive">
                  {post.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
