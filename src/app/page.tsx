"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/";
const GITHUB_URL = "https://github.com/";
const EMAIL_URL = "mailto:hello@example.com";

const NAV_LINKS = [
  { href: "#projects", label: "精選專案" },
  { href: "#tech-stack", label: "技術棧" },
  { href: "#about", label: "關於我" },
  { href: "#contact", label: "聯絡方式" },
] as const;

const HIGHLIGHTS = [
  "Full-Stack Web & Mobile",
  "AI API & Automation Integration",
  "Agile & Rapid Prototyping",
] as const;

const TECH_STACK = [
  {
    title: "Frontend",
    items: "Next.js · React · TypeScript · Tailwind CSS",
  },
  {
    title: "Mobile",
    items: "React Native · Expo · Flutter",
  },
  {
    title: "Backend & AI",
    items: "Node.js · DeepSeek / OpenAI API · Supabase",
  },
  {
    title: "Tools",
    items: "Git · Vercel · Cursor · App Store / Play Console",
  },
] as const;

const PROJECTS = [
  {
    number: "01",
    title: "貓貓塔羅牌（貓巫師 CatWiz）",
    tags: ["React", "Vite", "LLM API", "Capacitor / AdMob"],
    role: "獨立負責產品設計、抽卡／解讀流程、AI 解讀串接與雙模式人格（正常／毒舌）。",
    challenge:
      "要把 LLM 解讀穩定嵌進互動占卜體驗，同時兼顧趣味留存與移動端上架變現。",
    outcome: "完成完整占卜流程、今日運勢／合拍度模組，並支援 Android 打包與廣告整合。",
    image: "/projects/cat-tarot.png",
    imageAlt: "貓巫師塔羅 App 首頁截圖",
  },
  {
    number: "02",
    title: "WhatsApp 群發 CRM",
    tags: ["Next.js", "Baileys", "Prisma", "Workflow"],
    role: "負責聯絡人管理、篩選標籤、廣播任務與 WhatsApp 連線工作流介面。",
    challenge:
      "大量客戶名單需要可搜尋、可批次選取，並串接 WhatsApp 自動化發送流程。",
    outcome: "建成可管理數千聯絡人的 CRM，支援匯入、標籤篩選與廣播任務。",
    image: "/projects/whatsapp-crm.png",
    imageAlt: "WhatsApp CRM 聯絡人列表截圖",
  },
  {
    number: "03",
    title: "股票評分 App（StockScore）",
    tags: ["Next.js", "TypeScript", "Dashboard UI"],
    role: "設計評分查詢、持倉與選股器介面，建立港股／美股評分查詢流程。",
    challenge:
      "需要把複雜評分邏輯收斂成清楚的查詢與結果呈現，讓決策流程更快。",
    outcome: "完成暗色儀表板與評分查詢主流程，支援代號／名稱搜尋。",
    image: "/projects/stock-score.png",
    imageAlt: "StockScore 股票評分程式截圖",
  },
  {
    number: "04",
    title: "123deal 香港頂讓平台",
    tags: ["Next.js", "Tailwind CSS", "SEO", "Lead Gen"],
    role: "負責平台首頁、盤源分類、列表呈現與 WhatsApp／放盤轉換動線。",
    challenge:
      "香港頂讓市場資訊分散；需把盤源、分類與查詢 CTA 做成可信賴的交易入口。",
    outcome: "上線生意買賣／頂讓資訊站，涵蓋飲食、零售、教育等分類與查詢轉換。",
    image: "/projects/123deal.png",
    imageAlt: "123deal 網站首頁截圖",
  },
  {
    number: "05",
    title: "AI 營養師（Diet Dashboard）",
    tags: ["Next.js", "AI API", "TDEE / BMR", "Product UI"],
    role: "打造飲食數據面板、體型／成因診斷流程，以及 AI 營養評估報告介面。",
    challenge:
      "要把卡路里預算、體型策略與餐點輸入整合成可執行的減肥決策工具。",
    outcome: "完成可即時計算預算與處方建議的 AI 營養師網頁產品。",
    image: "/projects/nutritionist.png",
    imageAlt: "AI 營養師 Diet Dashboard 截圖",
  },
] as const;

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-50 border-b border-paper-rule/80 bg-paper/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="font-display text-xl font-semibold tracking-tight text-ink"
          >
            Alvin Profolio
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-muted transition hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-paper transition hover:bg-accent-hover sm:inline-flex"
            >
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? "關閉選單" : "開啟選單"}
              className="inline-flex rounded-md border border-paper-rule p-2 text-ink md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-paper-rule bg-paper px-4 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2.5 text-ink-muted hover:bg-paper-soft hover:text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-medium text-paper"
                onClick={() => setMobileOpen(false)}
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="border-b border-paper-rule">
          <div className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
            <div className="max-w-3xl animate-fade-up">
              <p className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Alvin Profolio
              </p>
              <h1 className="mt-6 font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl lg:text-[2.15rem] lg:leading-[1.25]">
                Full-Stack &amp; Mobile App Developer
              </h1>
              <p className="prose-measure mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
                專注於 Next.js、React Native、TypeScript 與 AI
                系統整合。具備從 UI/UX
                原型設計、前後端開發到雲端部署與 App Store 上架的全流程實戰經驗。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-paper transition hover:bg-accent-hover"
                >
                  瀏覽專案作品
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-2 py-3 text-sm font-medium text-ink-muted transition hover:text-ink"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-3 border-t border-paper-rule pt-8 sm:grid-cols-3">
              {HIGHLIGHTS.map((item) => (
                <p
                  key={item}
                  className="text-sm font-medium tracking-tight text-ink-muted sm:text-[0.95rem]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="section-pad mx-auto max-w-6xl">
          <div className="mb-4 border-b border-paper-rule pb-8">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              精選專案 (Featured Projects)
            </h2>
            <p className="mt-3 max-w-xl text-ink-muted">
              技術架構、個人負責模組，以及實際解決的技術與商業難題。
            </p>
          </div>

          <div className="divide-y divide-paper-rule">
            {PROJECTS.map((item) => (
              <article key={item.number} className="py-14 first:pt-10 last:pb-0">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <span className="font-display text-sm text-ink-faint">
                    {item.number}
                  </span>
                  <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-ink-faint">
                  {item.tags.join("  ·  ")}
                </p>

                <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-sm border border-paper-rule bg-paper-soft">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 960px"
                  />
                </div>

                <div className="mt-10 grid gap-8 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
                      負責範圍
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {item.role}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
                      技術／商業難題
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {item.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
                      成果
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink">
                      {item.outcome}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-6 text-sm">
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-accent underline-offset-4 hover:underline"
                  >
                    查看 Demo
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 font-medium text-ink-muted underline-offset-4 hover:text-ink hover:underline"
                  >
                    詳細簡介
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section
          id="tech-stack"
          className="border-y border-paper-rule bg-paper-soft"
        >
          <div className="section-pad mx-auto max-w-6xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              核心技術棧 (Tech Stack &amp; Capabilities)
            </h2>
            <p className="mt-3 max-w-xl text-ink-muted">
              以現代 Web / Mobile 與 AI 整合為核心的實戰技術組合。
            </p>

            <ul className="mt-12 divide-y divide-paper-rule border-y border-paper-rule">
              {TECH_STACK.map((item, i) => (
                <li
                  key={item.title}
                  className="grid gap-2 py-6 sm:grid-cols-[3rem_1fr_1.4fr] sm:gap-8 sm:py-7"
                >
                  <span className="font-display text-sm text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted sm:pt-0.5">
                    {item.items}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-pad mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                關於我 (About Me)
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              <p>
                我是一名 Full-Stack &amp; Mobile App
                Developer，習慣從商業問題出發，用可上線的產品回應需求。
              </p>
              <p>
                日常工作涵蓋 UI/UX 原型、Next.js / React Native
                開發、API 與 AI 系統整合，以及 Vercel
                部署與雙平台上架。重視可維護架構、清楚溝通與快速迭代。
              </p>
              <p>
                正在尋找能持續打磨產品與工程品質的 Full-Stack / Mobile
                職缺，歡迎透過 LinkedIn 或 Email 進一步交流。
              </p>
            </div>
          </div>
        </section>

        {/* Contact + Footer */}
        <section id="contact" className="border-t border-paper-rule">
          <div className="section-pad mx-auto max-w-6xl pb-12 pt-20">
            <div className="border-y border-paper-rule py-16 text-center sm:py-20">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                聯絡我 (Contact)
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-ink-muted">
                對我的專案或背景有興趣，歡迎透過 LinkedIn 或 Email 聯繫。
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-medium text-paper transition hover:bg-accent-hover"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={EMAIL_URL}
                  className="inline-flex items-center gap-2 rounded-md border border-paper-rule bg-paper px-6 py-3.5 text-sm font-medium text-ink transition hover:border-ink/30"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </div>
            </div>

            <footer className="mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div>
                <p className="font-display text-sm font-semibold text-ink">
                  Alvin Profolio
                </p>
                <p className="mt-1 text-xs text-ink-faint">
                  © {new Date().getFullYear()} Alvin Profolio. All rights
                  reserved.
                </p>
              </div>
              <div className="flex items-center gap-5 text-sm text-ink-muted">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-ink"
                  aria-label="GitHub"
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-ink"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
