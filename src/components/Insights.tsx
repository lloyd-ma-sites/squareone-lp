// Placeholder articles — replace as you publish.
const posts = [
  { date: "—", category: "Article", title: "Your first article will appear here" },
  { date: "—", category: "Article", title: "Add insights, updates and commentary" },
  { date: "—", category: "Article", title: "Each post can link to a full article" },
];

export default function Insights() {
  return (
    <section id="insights" className="bg-sand py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Label row with inline action (peg style) */}
        <div className="flex items-center justify-between border-b border-olive/20 pb-3 font-mono text-xs uppercase tracking-[0.2em] text-olive">
          <span>Latest News</span>
          <a href="#" className="transition-colors hover:text-olive-dark">
            [ View all news → ]
          </a>
        </div>

        <div className="reveal mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Featured */}
          <article className="group">
            <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-khaki/40 to-brown/10 font-mono text-xs uppercase tracking-widest text-brown/40">
              Featured image
            </div>
            <p className="mt-5 font-mono text-xs uppercase tracking-wider text-olive">
              Insights
            </p>
            <h3 className="mt-2 font-sans text-2xl font-medium text-brown">
              A featured article headline goes here
            </h3>
          </article>

          {/* List */}
          <ul className="divide-y divide-brown/15 border-t border-brown/15">
            {posts.map((post) => (
              <li key={post.title}>
                <a href="#" className="group flex flex-col gap-1 py-5">
                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-brown/50">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <span className="font-sans text-lg font-medium text-brown group-hover:text-olive">
                    {post.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
