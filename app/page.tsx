/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#0a0a0a]">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Avatar */}
          <div className="animate-fade-in-up mb-8">
            <div className="avatar-ring inline-block">
              <img
                src="https://avatars.githubusercontent.com/Everless321"
                alt="Everless"
                width={120}
                height={120}
                className="rounded-full bg-white"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="animate-fade-in-up animation-delay-100 text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Everless
          </h1>

          {/* Bio */}
          <p className="animate-fade-in-up animation-delay-200 text-lg text-black/50 max-w-md mx-auto mb-8">
            热爱开源，喜欢创造有趣的工具。
          </p>

          {/* Social Links */}
          <div className="animate-fade-in-up animation-delay-300 flex items-center justify-center gap-3">
            <a
              href="https://github.com/Everless321"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12">Projects</h2>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* dYm Card */}
            <a
              href="https://github.com/Everless321/dYm"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card p-6 group"
            >
              <div className="flex items-start gap-4">
                <img
                  src="/dym-icon.png"
                  alt="dYm"
                  width={48}
                  height={48}
                  className="rounded-xl shrink-0 group-hover:scale-105 transition-transform"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[#0a0a0a] mb-1 group-hover:text-[#0071e3] transition-colors">
                    dYm
                  </h3>
                  <p className="text-sm text-black/50 line-clamp-2">
                    抖音视频下载与智能分析工具
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Electron", "React", "TypeScript"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs rounded-md bg-black/5 text-black/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>

            {/* Coming Soon Card */}
            <div className="project-card p-6 opacity-50 cursor-default">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-black/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-black/30 mb-1">
                    Coming Soon
                  </h3>
                  <p className="text-sm text-black/30">
                    更多项目即将到来
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-black/30">
            Made with ♥ by Everless
          </p>
        </div>
      </footer>
    </div>
  );
}
