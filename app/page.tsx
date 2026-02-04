/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white bg-grid">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Avatar with Kuromi Frame */}
          <div className="animate-fade-in-up mb-8 inline-block">
            <div className="relative animate-float">
              {/* Kuromi Ears */}
              <div className="kuromi-ears" />
              {/* Kuromi Skull */}
              <div className="kuromi-skull" />
              {/* Avatar */}
              <div className="kuromi-frame">
                <img
                  src="https://avatars.githubusercontent.com/Everless321"
                  alt="Everless"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="animate-fade-in-up animation-delay-100 text-5xl sm:text-6xl font-bold tracking-tight mb-4">
            <span className="text-gradient-pink">Everless</span>
          </h1>

          {/* Bio */}
          <p className="animate-fade-in-up animation-delay-200 text-xl text-white/60 mb-6">
            Developer & Creator
          </p>

          <p className="animate-fade-in-up animation-delay-300 text-white/40 max-w-md mx-auto mb-10 leading-relaxed">
            热爱开源，喜欢创造有趣的工具。专注于桌面应用开发，让复杂的事情变得简单。
          </p>

          {/* Social Links */}
          <div className="animate-fade-in-up animation-delay-400 flex items-center justify-center gap-4">
            <a
              href="https://github.com/Everless321"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
          <p className="text-white/50 text-center mb-16">我创建的开源项目</p>

          {/* Project Card - dYm */}
          <a
            href="https://github.com/Everless321/dYm"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card block p-8 group"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Project Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff6b9d] to-[#e91e8c] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>

              {/* Project Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-[#ff6b9d] transition-colors">
                    dYm
                  </h3>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[#ff6b9d]/20 text-[#ff6b9d]">
                    Desktop App
                  </span>
                </div>
                <p className="text-white/60 mb-4 leading-relaxed">
                  抖音视频下载与智能分析工具。支持批量下载、AI 智能分析、本地管理，让视频管理变得简单高效。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Electron", "React", "TypeScript", "SQLite"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 group-hover:bg-[#ff6b9d]/20 transition-colors shrink-0 self-center">
                <svg className="w-5 h-5 text-white/50 group-hover:text-[#ff6b9d] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
            </div>
          </a>

          {/* More projects placeholder */}
          <div className="mt-8 text-center">
            <p className="text-white/30 text-sm">更多项目即将到来...</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/30 text-sm">
            Made with{" "}
            <span className="text-[#ff6b9d]">♥</span>
            {" "}by Everless
          </p>
        </div>
      </footer>
    </div>
  );
}
