import React, { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Compass,
  Download,
  FileText,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Moon,
  MoveUpRight,
  Navigation,
  Phone,
  Plane,
  Plus,
  Send,
  Sparkles,
  Sun,
  TreePine,
  X
} from 'lucide-react'
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion'

const destinations = [
  {
    id: '01',
    place: 'IPE 公众环境研究中心',
    shortPlace: '环境信息尽调',
    date: '2026.05 — 至今',
    title: '环境数据尽调',
    detail: '环境信息披露与排放数据尽调实习生',
    description: '核对排污、年度环境报告排放数据，完成数据校验与台账归档；收集行业低碳案例，参与环境、社会与治理中的环境维度专项文稿撰写。',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1800&q=88',
    location: '北京 · 研究桌面',
    tone: 'stone'
  },
  {
    id: '02',
    place: '城市公园空间与体力活动关联研究',
    shortPlace: '地理信息空间分析',
    date: '2026.05 — 至今',
    title: '公园空间研究',
    detail: '导师课题参与 · 地理信息系统空间分析',
    description: '协助哈尔滨市多个城市公园空间使用调研，参与行为数据收集；基于地理信息系统对绿地分布与可达性进行初步量化分析。',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1800&q=88',
    location: '哈尔滨 · 实地调研',
    tone: 'sage'
  },
  {
    id: '03',
    place: '“顺时杉语 · 生态织补”',
    shortPlace: '生态景观修复',
    date: '2024.09 — 2025.05',
    title: '生态修复设计',
    detail: '延吉文杉园生态修复设计',
    description: '完成退化场地现状调研与生态问题识别，提出系统性修复与景观再生策略，初步应用场地绩效评估与可持续设计方法。',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1800&q=88',
    location: '延吉 · 景观设计',
    tone: 'sand'
  }
]

const timeline = [
  {
    date: '2026.09 — 至今',
    label: '教育背景',
    title: '东北林业大学 · 风景园林学',
    description: '硕士在读，2026 级。考研总分 376，快题设计 128 分。',
    index: '01'
  },
  {
    date: '2026.05 — 至今',
    label: '研究实习',
    title: 'IPE 环境信息披露尽调',
    description: '围绕企业环境披露、排放数据核验和低碳案例，参与多批次信息核查与环境、社会与治理专项文稿协作。',
    index: '02'
  },
  {
    date: '2026.05 — 至今',
    label: '研究课题',
    title: '城市公园空间与体力活动关联研究',
    description: '协助哈尔滨市多个城市公园调研，参与使用者行为数据收集与整理；基于地理信息系统分析绿地分布、可达性与公共健康之间的关系。',
    index: '03'
  },
  {
    date: '2024.09 — 2025.05',
    label: '设计项目',
    title: '“顺时杉语 · 生态织补”',
    description: '完成延吉文杉园退化场地调研与生态问题识别，提出景观再生策略，关注植物群落、场地功能与可持续绩效。',
    index: '04'
  },
  {
    date: '2022.05 — 2022.07',
    label: '项目负责',
    title: '“互联网+”创新创业大赛',
    description: '担任项目组长，主持方向确立、方案框架、计划书撰写、数据整理与最终成果整合。',
    index: '05'
  },
  {
    date: '2021 — 2025',
    label: '教学实践',
    title: '机构教师 · 多学科教学',
    description: '先后任职于多家教育机构，主讲高中生物、物理及初中历史，累计授课时长超过 400 小时。',
    index: '06'
  },
  {
    date: '2022 — 2025',
    label: '校园组织',
    title: '学生工作与外联执行',
    description: '参与晚会策划、团务组织、企业宣讲会与招聘会对接，积累沟通协调、现场执行与团队协作经验。',
    index: '07'
  }
]

const skills = [
  {
    title: '空间分析',
    number: '01',
    detail: '用地理信息系统把绿地、可达性与公共健康关系转化为空间证据。',
    tags: ['地理信息系统', '空间数据', '可达性分析']
  },
  {
    title: '环境研究',
    number: '02',
    detail: '熟悉环境信息披露、排放数据校验与资料结构化归档。',
    tags: ['环境治理框架', '排放数据', '信息核查']
  },
  {
    title: '设计表达',
    number: '03',
    detail: '从场地问题出发，建立可持续、可解释、能落地的设计方案。',
    tags: ['计算机辅助设计', '三维建模', '图像与版式']
  }
]

const evidenceRows = [
  {
    label: '环境研究',
    source: '环境信息尽调',
    output: '数据核验 / 台账归档 / 专项文稿',
    marks: 3
  },
  {
    label: '空间分析',
    source: '城市公园课题',
    output: '实地调研 / 行为整理 / 可达性分析',
    marks: 3
  },
  {
    label: '项目执行',
    source: '教学与校园组织',
    output: '表达沟通 / 协同推进 / 现场交付',
    marks: 3
  }
]

const aiWorkflow = [
  {
    step: '01',
    title: '先整理',
    text: '把分散的环境资料、表格和访谈信息整理成可检索的结构。'
  },
  {
    step: '02',
    title: '再提炼',
    text: '用人工智能辅助归纳重点、梳理逻辑、生成初稿和检查表达。'
  },
  {
    step: '03',
    title: '人工复核',
    text: '回到原始数据逐条核对，不让工具替代专业判断和事实责任。'
  }
]

const journalEntries = [
  {
    date: '观察笔记 / 01',
    title: '地图与社会公平',
    text: '城市公园不是孤立的绿色斑块。它和步行距离、身体活动、公共服务以及不同人群的生活半径紧密相连。',
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=84'
  },
  {
    date: '观察笔记 / 02',
    title: '从披露到行动',
    text: '在环境尽调中，数据准确只是起点。更重要的是让信息可复核、可比较，并能进入团队的判断流程。',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=84'
  },
  {
    date: '观察笔记 / 03',
    title: '景观的长期主义',
    text: '从一处退化场地开始，把植物、雨洪、使用者和时间放回同一套系统，才有真正可持续的空间。',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=84'
  }
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } }
}

function App() {
  const [activeDestination, setActiveDestination] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isNight, setIsNight] = useState(false)
  const [formState, setFormState] = useState('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const { scrollY } = useScroll()
  const progress = useSpring(useTransform(scrollY, [0, 2600], [0, 1]), { stiffness: 100, damping: 30 })
  const heroImageY = useTransform(scrollY, [0, 900], [0, 100])

  useEffect(() => {
    const timer = window.setInterval(() => setActiveDestination((current) => (current + 1) % destinations.length), 6500)
    return () => window.clearInterval(timer)
  }, [])

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormState('sent')
  }

  return (
    <div className={`min-h-screen overflow-hidden transition-colors duration-700 ${isNight ? 'bg-[#101110] text-[#f5f4ef]' : 'bg-white text-[#191a17]'}`}>
      <motion.div className={`fixed left-0 top-0 z-[80] h-[2px] origin-left ${isNight ? 'bg-white' : 'bg-[#191a17]'}`} style={{ scaleX: progress }} />
      <FloatingNav isNight={isNight} setIsNight={setIsNight} menuOpen={menuOpen} setMenuOpen={setMenuOpen} goTo={goTo} />

      <main>
        <Hero activeDestination={activeDestination} setActiveDestination={setActiveDestination} heroImageY={heroImageY} isNight={isNight} goTo={goTo} />

        <section id="profile" className="scroll-mt-20 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1380px]">
            <SectionHeader number="01" kicker="个人概述" title="个人定位" />
            <div className="mt-16 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
              <Reveal className={`liquid-glass rounded-[2rem] p-8 sm:p-10 ${isNight ? 'liquid-glass-dark' : 'liquid-glass-light'}`}>
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="max-w-2xl font-display text-xl font-medium leading-[1.3] tracking-[-0.035em] sm:text-2xl">
                      我习惯先把问题弄清楚，再把事情做扎实。
                    </p>
                    <p className={`mt-9 max-w-xl text-base leading-8 ${isNight ? 'text-white/60' : 'text-black/60'}`}>
                      风景园林学硕士在读，正在把景观设计训练、环境数据整理和研究写作连接起来。做环境尽调时，我关注数据是否准确、过程是否可复核；做城市公园课题时，我关注空间结论能否解释真实的使用差异。也会用人工智能辅助资料归纳、表格结构化、文稿校对和初步提炼，再回到原始材料完成复核。希望从环境治理研究、环境数据整理或可持续发展咨询开始，把研究和执行结合起来。
                    </p>
                  </div>
                  <div className={`mt-16 flex flex-wrap gap-x-8 gap-y-4 border-t pt-6 font-mono text-[10px] tracking-[0.14em] ${isNight ? 'border-white/15 text-white/45' : 'border-black/10 text-black/45'}`}>
                    <span>2004.04 / 出生</span>
                    <span>吉林 / 成长于此</span>
                    <span>暑期可全职投入</span>
                  </div>
                </div>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <Reveal delay={0.08} className={`liquid-glass rounded-[2rem] p-7 ${isNight ? 'liquid-glass-dark' : 'liquid-glass-light'}`}>
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.18em] opacity-45">教育背景 / 01</p>
                      <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.045em]">东北林业大学</h3>
                      <p className="mt-2 text-sm opacity-55">风景园林学 · 硕士在读 · 2026 级</p>
                    </div>
                    <span className="rounded-full bg-[#d5e2c9] px-3 py-1 font-mono text-[10px] text-[#3c5431]">在读</span>
                  </div>
                  <div className={`mt-9 grid grid-cols-2 gap-5 border-t pt-5 ${isNight ? 'border-white/10' : 'border-black/10'}`}>
                    <Stat value="376" label="考研总分" />
                    <Stat value="128" label="快题设计" />
                  </div>
                </Reveal>
                <Reveal delay={0.15} className={`liquid-glass rounded-[2rem] p-7 ${isNight ? 'liquid-glass-dark' : 'liquid-glass-light'}`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.18em] opacity-45">教育背景 / 02</p>
                      <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.045em]">延边大学</h3>
                      <p className="mt-2 text-sm opacity-55">园林 · 本科 · 2021 — 2025</p>
                    </div>
                    <TreePine className="h-6 w-6 opacity-35" strokeWidth={1.2} />
                  </div>
                  <div className={`mt-9 flex items-center gap-3 border-t pt-5 font-mono text-[10px] tracking-[0.12em] opacity-45 ${isNight ? 'border-white/10' : 'border-black/10'}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#789767]" />
                    风景园林 / 生态 / 系统
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="journey" className="scroll-mt-20 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1380px]">
            <SectionHeader number="02" kicker="教育与经历" title="成长路径" />
            <div className="timeline-list mt-12 space-y-4">
              {timeline.map((item, index) => (
                <Reveal key={item.index} delay={index * 0.06} className="timeline-row grid gap-4 md:grid-cols-[170px_1fr] md:gap-8">
                  <div className="pt-2 md:text-right">
                    <p className="font-mono text-[10px] tracking-[0.14em] opacity-45">{item.date}</p>
                    <p className="mt-2 font-mono text-[9px] tracking-[0.18em] opacity-30">{item.label}</p>
                  </div>
                  <div className={`liquid-glass rounded-[1.5rem] p-5 sm:p-6 ${isNight ? 'liquid-glass-dark' : 'liquid-glass-light'}`}>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="font-mono text-[10px] tracking-[0.16em] opacity-35">0{item.index} / 经历证据</p>
                        <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.045em] sm:text-2xl">{item.title}</h3>
                        <p className="mt-3 max-w-3xl text-sm leading-7 opacity-55">{item.description}</p>
                      </div>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-current/10 font-mono text-[10px] opacity-45">{item.index}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className={`mt-7 flex flex-wrap gap-x-8 gap-y-3 border-t pt-6 font-mono text-[10px] tracking-[0.13em] opacity-45 ${isNight ? 'border-white/10' : 'border-black/10'}`}>
              <span>求职方向 / 环境治理研究</span>
              <span>环境数据整理</span>
              <span>可持续发展咨询</span>
            </div>
          </div>
        </section>

        <section id="work" className={`scroll-mt-20 px-5 py-20 sm:px-8 lg:px-12 lg:py-28 ${isNight ? 'bg-[#111210]' : 'bg-white'}`}>
          <div className="mx-auto max-w-[1380px]">
            <SectionHeader number="03" kicker="项目与研究" title="精选经历" />
            <div className="mt-12 grid gap-6 lg:grid-cols-[0.48fr_1fr]">
              <div className="flex flex-col">
                <p className="max-w-sm text-base leading-7 opacity-55">从环境数据到绿色空间，从研究桌到真实场地。这里是我正在走过的三条路线。</p>
                <div className="mt-12 space-y-2">
                  {destinations.map((destination, index) => (
                    <button key={destination.id} onClick={() => setActiveDestination(index)} className={`group flex w-full items-start gap-4 rounded-2xl px-4 py-4 text-left transition-all ${activeDestination === index ? (isNight ? 'bg-white/[0.08]' : 'bg-white') : 'hover:bg-white/55'}`}>
                      <span className={`mt-1 font-mono text-[10px] ${activeDestination === index ? 'opacity-90' : 'opacity-35'}`}>{destination.id}</span>
                      <span className="min-w-0 flex-1">
                        <span className={`block font-display text-lg tracking-[-0.03em] ${activeDestination === index ? '' : 'opacity-55'}`}>{destination.shortPlace}</span>
                        <span className="mt-2 block text-xs opacity-45">{destination.date}</span>
                      </span>
                      <ChevronRight className={`mt-1 h-4 w-4 shrink-0 transition-transform ${activeDestination === index ? 'translate-x-0 opacity-75' : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-45'}`} />
                    </button>
                  ))}
                </div>
                <div className={`mt-auto hidden border-t pt-8 font-mono text-[10px] tracking-[0.16em] opacity-45 lg:block ${isNight ? 'border-white/10' : 'border-black/10'}`}>
                  <span className="mr-4">向下查看经历</span>
                  <ArrowDown className="inline h-4 w-4" />
                </div>
              </div>
              <Reveal className="relative overflow-hidden rounded-[2.2rem]">
                <AnimatePresence mode="wait">
                  <motion.div key={destinations[activeDestination].id} initial={{ opacity: 0, scale: 1.035 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.99 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="relative min-h-[480px] overflow-hidden rounded-[2.2rem] bg-black">
                    <img src={destinations[activeDestination].image} alt={destinations[activeDestination].place} className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-[1600ms] hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />
                    <div className="absolute left-7 right-7 top-7 flex items-center justify-between font-mono text-[10px] tracking-[0.16em] text-white/70 sm:left-10 sm:right-10 sm:top-10">
                      <span>{destinations[activeDestination].location}</span>
                      <span>{destinations[activeDestination].date}</span>
                    </div>
                    <div className="absolute bottom-7 left-7 right-7 sm:bottom-10 sm:left-10 sm:right-10">
                      <p className="font-mono text-[10px] tracking-[0.2em] text-white/60">{destinations[activeDestination].detail}</p>
                      <h3 className="mt-4 whitespace-pre-line font-display text-2xl font-semibold leading-[1] tracking-[-0.04em] text-white sm:text-4xl">{destinations[activeDestination].title}</h3>
                      <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">{destinations[activeDestination].description}</p>
                    </div>
                    <div className="absolute bottom-7 right-7 flex gap-2 sm:bottom-10 sm:right-10">
                      <button aria-label="上一个经历" onClick={() => setActiveDestination((activeDestination + destinations.length - 1) % destinations.length)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/15 text-white backdrop-blur transition hover:bg-white hover:text-black"><ArrowLeft className="h-4 w-4" /></button>
                      <button aria-label="下一个经历" onClick={() => setActiveDestination((activeDestination + 1) % destinations.length)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/15 text-white backdrop-blur transition hover:bg-white hover:text-black"><ArrowRight className="h-4 w-4" /></button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="journal" className="scroll-mt-20 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1380px]">
            <SectionHeader number="04" kicker="个人思考" title="观察笔记" action={<span className="hidden font-mono text-[10px] tracking-[0.17em] opacity-40 md:block">简短记录 / 2021 — 2026</span>} />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {journalEntries.map((entry, index) => (
                <Reveal key={entry.title} delay={index * 0.08} className="group">
                  <div className="overflow-hidden rounded-[1.6rem] bg-[#deddd6]">
                    <img src={entry.image} alt={entry.title} loading="lazy" className="aspect-[1.12] w-full object-cover grayscale-[0.12] transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0" />
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-4">
                    <p className="font-mono text-[10px] tracking-[0.18em] opacity-45">{entry.date}</p>
                    <MoveUpRight className="h-4 w-4 opacity-35 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold leading-[1.05] tracking-[-0.05em]">{entry.title}</h3>
                  <p className="mt-4 text-sm leading-7 opacity-55">{entry.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities" className={`scroll-mt-20 px-5 py-20 sm:px-8 lg:px-12 lg:py-28 ${isNight ? 'bg-[#1c1d1a]' : 'bg-white'}`}>
          <div className="mx-auto max-w-[1380px]">
            <SectionHeader number="05" kicker="能力与证书" title="核心能力" />
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {skills.map((skill, index) => (
                <Reveal key={skill.title} delay={index * 0.08} className={`liquid-glass rounded-[1.8rem] p-7 sm:p-8 ${isNight ? 'liquid-glass-dark' : 'liquid-glass-light'}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.18em] opacity-45">{skill.number}</span>
                    <Sparkles className="h-5 w-5 opacity-35" strokeWidth={1.2} />
                  </div>
                  <h3 className="mt-14 font-display text-2xl font-semibold tracking-[-0.05em]">{skill.title}</h3>
                  <p className="mt-4 text-sm leading-7 opacity-55">{skill.detail}</p>
                  <div className={`mt-8 flex flex-wrap gap-2 border-t pt-6 ${isNight ? 'border-white/10' : 'border-black/10'}`}>
                    {skill.tags.map((tag) => <span key={tag} className="rounded-full border border-current/10 px-3 py-2 font-mono text-[9px] tracking-[0.08em] opacity-55">{tag}</span>)}
                  </div>
                </Reveal>
              ))}
            </div>
            <AiWorkflow isNight={isNight} />
            <EvidenceChart isNight={isNight} />
            <div className={`mt-16 grid gap-10 border-t pt-12 lg:grid-cols-[0.6fr_1.4fr] ${isNight ? 'border-white/10' : 'border-black/10'}`}>
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] opacity-45">补充经历</p>
                <p className="mt-5 max-w-sm text-sm leading-7 opacity-55">除了专业研究，也在教学、组织和团队协作中持续练习表达、协调和交付。</p>
              </div>
              <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                <CarryItem icon={BriefcaseBusiness} title="400+ 小时教学" text="高中生物、物理，初中历史。把复杂内容讲清楚。" />
                <CarryItem icon={Compass} title="项目执行" text="团务、晚会、宣讲会与招聘会，习惯在现场推进事情。" />
                <CarryItem icon={FileText} title="证书与语言" text="英语四级、普通话二甲、吉林省大学生就业能力拓展培训证书。" />
                <CarryItem icon={Leaf} title="工作方向" text="环境治理研究、环境数据整理、可持续发展咨询。" />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 px-5 pb-10 pt-20 sm:px-8 lg:px-12 lg:pb-12 lg:pt-28">
          <div className="mx-auto max-w-[1380px]">
            <div className="grid gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
              <Reveal>
                <p className="font-mono text-[10px] tracking-[0.2em] opacity-45">06 / 联系方式</p>
                <h2 className="mt-7 max-w-xl font-display text-3xl font-semibold leading-[1] tracking-[-0.06em] sm:text-4xl">
                  联系我<span className="block opacity-45">一起做有价值的事。</span>
                </h2>
                <div className="mt-10 space-y-4 text-sm opacity-60">
                  <a href="mailto:13944190282@163.com" className="flex items-center gap-3 transition hover:opacity-100"><Mail className="h-4 w-4" />13944190282@163.com</a>
                  <button onClick={() => navigator.clipboard?.writeText('13944190282')} className="flex items-center gap-3 transition hover:opacity-100"><Phone className="h-4 w-4" />139 4419 0282</button>
                  <span className="flex items-center gap-3"><MapPin className="h-4 w-4" />吉林 / 哈尔滨 / 支持远程</span>
                </div>
              </Reveal>
              <Reveal delay={0.1} className={`liquid-glass rounded-[2rem] p-7 sm:p-10 ${isNight ? 'liquid-glass-dark' : 'liquid-glass-light'}`}>
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid gap-7 sm:grid-cols-2">
                    <label className="block"><span className="font-mono text-[10px] tracking-[0.18em] opacity-45">你的称呼</span><input required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} className="contact-input" placeholder="怎么称呼你？" /></label>
                    <label className="block"><span className="font-mono text-[10px] tracking-[0.18em] opacity-45">你的邮箱</span><input required type="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} className="contact-input" placeholder="请输入邮箱" /></label>
                  </div>
                  <label className="block"><span className="font-mono text-[10px] tracking-[0.18em] opacity-45">留言内容</span><textarea required rows="4" value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} className="contact-input resize-none" placeholder="请简单介绍你正在推进的工作..." /></label>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <button type="submit" className={`group inline-flex items-center gap-3 rounded-full px-5 py-3.5 font-mono text-[10px] tracking-[0.15em] transition hover:-translate-y-0.5 ${isNight ? 'bg-white text-[#191a17] hover:bg-[#d5e2c9]' : 'bg-[#191a17] text-white hover:bg-[#789767]'}`}>
                      {formState === 'sent' ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                      {formState === 'sent' ? '留言已准备' : '发送留言'}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                    <span className="text-xs opacity-45">{formState === 'sent' ? '感谢留言，我会尽快回复。' : '欢迎从一次真诚的交流开始。'}</span>
                  </div>
                </form>
              </Reveal>
            </div>
            <footer className={`mt-24 flex flex-col gap-8 border-t pt-8 text-xs opacity-45 sm:flex-row sm:items-end sm:justify-between ${isNight ? 'border-white/10' : 'border-black/10'}`}>
              <div>
                <p className="font-display text-xl font-semibold tracking-[-0.05em] opacity-80">LY<span className="opacity-45">.</span></p>
                <p className="mt-2 font-mono text-[10px] tracking-[0.16em]">共建可持续的数字未来</p>
              </div>
              <div className="flex flex-wrap gap-5 font-mono text-[10px] tracking-[0.1em]">
                <a href="mailto:13944190282@163.com" className="transition hover:opacity-100">邮箱</a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:opacity-100"><Instagram className="h-3.5 w-3.5" />社交链接</a>
                <button onClick={() => window.print()} className="flex items-center gap-2 transition hover:opacity-100"><Download className="h-3.5 w-3.5" />打印简历</button>
              </div>
              <p className="font-mono text-[10px] tracking-[0.12em]">© 2026 / 李雨忆</p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  )
}

function FloatingNav({ isNight, setIsNight, menuOpen, setMenuOpen, goTo }) {
  const links = [
    ['profile', '个人简介'],
    ['journey', '成长路径'],
    ['work', '精选经历'],
    ['journal', '观察笔记'],
    ['contact', '联系方式']
  ]

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className={`liquid-glass mx-auto flex max-w-[1380px] items-center justify-between rounded-full px-3 py-2.5 transition-colors ${isNight ? 'liquid-glass-dark' : 'liquid-glass-light'}`}>
        <button onClick={() => goTo('top')} className="group flex items-center gap-3 pl-1">
          <span className={`flex h-8 w-8 items-center justify-center rounded-full font-display text-xs font-semibold transition-transform group-hover:rotate-6 ${isNight ? 'bg-white text-[#191a17]' : 'bg-[#191a17] text-white'}`}>LY</span>
          <span className="hidden font-mono text-[9px] tracking-[0.16em] opacity-55 sm:block">李雨忆 / 个人简历</span>
        </button>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([id, label]) => <button key={id} onClick={() => goTo(id)} className="font-mono text-[9px] tracking-[0.16em] opacity-55 transition hover:opacity-100">{label}</button>)}
        </nav>
        <div className="flex items-center gap-1">
          <button aria-label="切换主题" onClick={() => setIsNight((value) => !value)} className="flex h-8 w-8 items-center justify-center rounded-full opacity-55 transition hover:bg-black/5 hover:opacity-100">{isNight ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button>
          <button aria-label="打开导航" onClick={() => setMenuOpen((value) => !value)} className="flex h-8 w-8 items-center justify-center rounded-full opacity-55 transition hover:bg-black/5 hover:opacity-100 md:hidden">{menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className={`liquid-glass mx-auto mt-2 max-w-[1380px] rounded-3xl p-4 md:hidden ${isNight ? 'liquid-glass-dark' : 'liquid-glass-light'}`}>{links.map(([id, label], index) => <button key={id} onClick={() => goTo(id)} className="flex w-full items-center gap-3 border-b border-current/10 px-3 py-4 text-left font-display text-[13px] font-medium tracking-[0.06em] opacity-75 last:border-0"><span className="font-mono text-[10px] tracking-[0.14em] opacity-35">0{index + 1}</span>{label}</button>)}</motion.nav>}
      </AnimatePresence>
    </header>
  )
}

function Hero({ activeDestination, setActiveDestination, heroImageY, isNight, goTo }) {
  const destination = destinations[activeDestination]
  return (
    <section id="top" className="relative min-h-[720px] overflow-hidden px-5 pb-12 pt-28 sm:px-8 lg:min-h-[820px] lg:px-12">
      <div className="mx-auto grid max-w-[1380px] items-center gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
        <Reveal className="relative z-10">
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] opacity-45"><span className="h-1.5 w-1.5 rounded-full bg-[#789767]" />开放实习机会 / 2026</div>
          <div className="mt-8 flex items-center gap-4">
            <div className={`liquid-glass shrink-0 rounded-[1.35rem] p-1.5 ${isNight ? 'liquid-glass-dark' : 'liquid-glass-light'}`}>
              <img src="/li-yuyi-avatar.jpeg" alt="李雨忆头像" className="h-20 w-16 rounded-[1rem] object-cover object-top sm:h-24 sm:w-20" />
            </div>
            <div>
              <h1 className="max-w-3xl font-display text-[clamp(1.6rem,2.2vw,2.4rem)] font-semibold leading-[0.95] tracking-[-0.06em]">李雨忆<span className="text-[#789767]">.</span></h1>
              <p className="mt-3 font-display text-base tracking-[-0.02em] opacity-65 sm:text-lg">风景园林学硕士在读</p>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-lg leading-8 opacity-60 sm:text-xl">环境治理研究者 / 数字化环境分析师 / 景观规划师</p>
          <p className="mt-4 max-w-xl text-sm leading-7 opacity-50">擅长把环境问题转成可核验的数据、可解释的空间方案，以及能被团队使用的研究材料。</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {['环境治理', '地理信息', '景观设计', '人工智能工具'].map((tag) => <span key={tag} className={`rounded-full border px-3 py-2 font-mono text-[9px] tracking-[0.1em] ${isNight ? 'border-white/15' : 'border-black/10'}`}>{tag}</span>)}
          </div>
          <div className={`mt-8 grid max-w-[500px] grid-cols-3 gap-4 border-y py-4 ${isNight ? 'border-white/10' : 'border-black/10'}`}>
            <HeroStat value="376" label="考研总分" />
            <HeroStat value="128" label="快题设计" />
            <HeroStat value="400+" label="累计授课" />
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <button onClick={() => goTo('work')} className={`group inline-flex items-center gap-3 rounded-full px-5 py-3.5 font-mono text-[10px] tracking-[0.14em] transition hover:-translate-y-0.5 ${isNight ? 'bg-white text-[#191a17]' : 'bg-[#191a17] text-white'}`}>查看精选经历 <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></button>
            <button onClick={() => goTo('contact')} className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] opacity-50 transition hover:opacity-100">联系我 <ChevronRight className="h-4 w-4" /></button>
          </div>
        </Reveal>

        <motion.div style={{ y: heroImageY }} className="relative mx-auto w-full max-w-[700px]">
          <div className="relative aspect-[0.88] overflow-hidden rounded-[2.3rem] bg-[#d8d6cc] shadow-[0_30px_100px_rgba(25,26,23,0.14)] sm:aspect-[1.08] lg:aspect-[0.93]">
            <AnimatePresence mode="wait">
              <motion.img key={destination.id} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} src={destination.image} alt={destination.place} loading="eager" className="absolute inset-0 h-full w-full object-cover" />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
            <div className="absolute left-6 right-6 top-6 flex items-center justify-between font-mono text-[9px] tracking-[0.15em] text-white/70 sm:left-9 sm:right-9 sm:top-9">
              <span className="flex items-center gap-2"><Navigation className="h-3.5 w-3.5" />{destination.location}</span>
              <span>{destination.id} / 03</span>
            </div>
            <div className="absolute bottom-7 left-6 right-6 sm:bottom-9 sm:left-9 sm:right-9">
              <p className="font-mono text-[10px] tracking-[0.16em] text-white/60">{destination.shortPlace}</p>
              <h2 className="mt-4 max-w-xl whitespace-pre-line font-display text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl">{destination.title}</h2>
            </div>
            <div className="absolute bottom-6 right-6 flex gap-2 sm:bottom-9 sm:right-9">
              <button aria-label="上一个项目" onClick={() => setActiveDestination((activeDestination + destinations.length - 1) % destinations.length)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/10 text-white backdrop-blur transition hover:bg-white hover:text-black"><ArrowLeft className="h-4 w-4" /></button>
              <button aria-label="下一个项目" onClick={() => setActiveDestination((activeDestination + 1) % destinations.length)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/10 text-white backdrop-blur transition hover:bg-white hover:text-black"><ArrowRight className="h-4 w-4" /></button>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between px-2 font-mono text-[9px] tracking-[0.14em] opacity-45">
            <span>个人简历 / 2026</span>
            <span className="flex items-center gap-2"><span className="h-px w-8 bg-current" /> 向下浏览</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SectionHeader({ number, kicker, title, action }) {
  return (
    <Reveal className="flex flex-col gap-5 border-b border-current/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-start gap-5">
        <span className="pt-1 font-mono text-[10px] tracking-[0.18em] opacity-45">{number}</span>
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] opacity-45">{kicker}</p>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(1.8rem,3vw,3.4rem)] font-semibold leading-[1] tracking-[-0.06em]">{title}</h2>
        </div>
      </div>
      {action}
    </Reveal>
  )
}

function Reveal({ children, className = '', delay = 0 }) {
  return <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.16 }} transition={{ delay }} className={className}>{children}</motion.div>
}

function Stat({ value, label }) {
  return <div><p className="font-display text-4xl font-semibold tracking-[-0.08em]">{value}</p><p className="mt-2 font-mono text-[9px] tracking-[0.14em] opacity-45">{label}</p></div>
}

function HeroStat({ value, label }) {
  return <div><p className="font-display text-2xl font-semibold tracking-[-0.07em] sm:text-3xl">{value}</p><p className="mt-1 font-mono text-[8px] tracking-[0.12em] opacity-40">{label}</p></div>
}

function EvidenceChart({ isNight }) {
  return (
    <Reveal className={`liquid-glass mt-6 rounded-[1.8rem] p-7 sm:p-8 ${isNight ? 'liquid-glass-dark' : 'liquid-glass-light'}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] opacity-45">能力证据图</p>
          <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.04em]">能力和经历，彼此对应。</h3>
        </div>
        <p className="max-w-xs text-xs leading-5 opacity-45">不做主观打分，只展示简历里已经发生过的事情。</p>
      </div>
      <div className="mt-7 grid gap-5">
        {evidenceRows.map((row) => (
          <div key={row.label} className="grid gap-3 sm:grid-cols-[0.28fr_0.3fr_1fr] sm:items-center sm:gap-5">
            <div className="font-display text-base font-medium">{row.label}</div>
            <div className="text-sm opacity-55">{row.source}</div>
            <div>
              <div className="flex items-center gap-1.5">
                {[0, 1, 2].map((mark) => <span key={mark} className={`h-2 flex-1 rounded-full ${mark < row.marks ? 'bg-[#789767]' : isNight ? 'bg-white/10' : 'bg-black/10'}`} />)}
              </div>
              <p className="mt-2 text-xs opacity-50">{row.output}</p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  )
}

function AiWorkflow({ isNight }) {
  return (
    <Reveal className={`liquid-glass mt-6 rounded-[1.8rem] p-7 sm:p-8 ${isNight ? 'liquid-glass-dark' : 'liquid-glass-light'}`}>
      <div className="grid gap-8 lg:grid-cols-[0.48fr_1.52fr] lg:items-center">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d5e2c9] text-[#3c5431]"><Sparkles className="h-5 w-5" strokeWidth={1.4} /></span>
            <p className="font-mono text-[10px] tracking-[0.18em] opacity-45">人工智能辅助工作流</p>
          </div>
          <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.045em]">让工具提速，让人负责。</h3>
          <p className="mt-4 max-w-sm text-sm leading-7 opacity-55">人工智能适合处理重复、分散和需要初步归纳的工作；数据判断、事实核验和最终表达仍然回到人的专业责任。</p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {aiWorkflow.map((item, index) => (
            <div key={item.step} className={`relative rounded-2xl border p-4 ${isNight ? 'border-white/10 bg-white/[0.04]' : 'border-black/10 bg-white/55'}`}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] opacity-40">{item.step}</span>
                {index < aiWorkflow.length - 1 && <ArrowRight className="hidden h-4 w-4 opacity-30 md:block" />}
              </div>
              <h4 className="mt-7 font-display text-lg font-semibold tracking-[-0.035em]">{item.title}</h4>
              <p className="mt-3 text-xs leading-6 opacity-55">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

function CarryItem({ icon: Icon, title, text }) {
  return <div className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-current/10 opacity-70"><Icon className="h-4 w-4" strokeWidth={1.3} /></span><div><h3 className="font-display text-lg tracking-[-0.03em]">{title}</h3><p className="mt-2 max-w-xs text-sm leading-6 opacity-55">{text}</p></div></div>
}

export default App
