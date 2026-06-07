"use client";

import { Terminal, Database, Cpu, Cloud, Code, GitMerge, Layers, ChevronRight, Server, Network, BrainCircuit, Globe, Mail, Award, HardDrive, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const nodeList = document.querySelectorAll('.observe-on-scroll');
    const elements = Array.from(nodeList) as HTMLElement[];

    // Debugging logs
    try {
      // eslint-disable-next-line no-console
      console.debug('[hero] prefersReduced=', prefersReduced, 'observe-on-count=', elements.length);
      const hero = document.querySelector('.hero-root');
      // eslint-disable-next-line no-console
      console.debug('[hero] hero element found=', !!hero);
    } catch (e) {
      // ignore
    }

    if (prefersReduced) {
      elements.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    const observerOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          // small stagger based on position to make it feel nicer
          const delay = Math.min(300, index * 50);
          setTimeout(() => {
            el.classList.add('scroll-animate-fade-up');
          }, delay);
          observer.unobserve(el);
        }
      });
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));

    // Trigger hero entrance animation on first load
    try {
      const hero = document.querySelector('.hero-root');
      if (hero) {
        // small delay so layout settles
        setTimeout(() => {
          hero.classList.add('hero-animated');
        }, 100);
      }
    } catch (e) {
      // ignore in non-browser environments
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="dark bg-[#0a0a0a] text-zinc-100 min-h-screen font-sans selection:bg-cyan-900/50 selection:text-cyan-50">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-sm font-bold tracking-tighter">
            <Terminal className="size-5 text-cyan-400" />
            <span>M_QURANY<span className="text-cyan-400 animate-pulse">_</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-mono text-zinc-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">./about</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">./skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">./experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">./projects</a>
            <Button variant="outline" className="font-mono text-xs border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/30">
              INIT_CONTACT
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-root hero-animated relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen pointer-events-none">
          <img src="/images/hero-bg.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
        </div>
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto relative z-10 text-center flex flex-col items-center">
          <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            AVAILABLE FOR CONTRACTS & FULL-TIME
          </div>

          <div className="mb-6 flex flex-col items-center">
            <p className="hero-sub font-mono text-sm text-zinc-500 tracking-widest mb-4">FULL STACK / AI / DEVOPS</p>
            <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-2 leading-[1.1]">
              MOHAMMED<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                QURANY
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed font-light">
              Senior Full Stack Web Developer & AI Engineer. I architect and ship
              end-to-end systems — SaaS, E-commerce, AI Assistants, and large-scale platforms
              that scale from day one.
            </p>
          </div>

          <div className="hero-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10 max-w-4xl w-full">
            <div className="flex items-center justify-center gap-2 px-3 py-3 rounded-lg bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-cyan-500/30 transition-all cursor-default">
              <Layers className="size-4 text-cyan-400 shrink-0" />
              <p className="text-sm font-bold text-white">SaaS</p>
            </div>
            <div className="flex items-center justify-center gap-2 px-3 py-3 rounded-lg bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-orange-500/30 transition-all cursor-default">
              <Globe className="size-4 text-orange-400 shrink-0" />
              <p className="text-sm font-bold text-white">E-Commerce</p>
            </div>
            <div className="flex items-center justify-center gap-2 px-3 py-3 rounded-lg bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-purple-500/30 transition-all cursor-default">
              <Cpu className="size-4 text-purple-400 shrink-0" />
              <p className="text-sm font-bold text-white">AI Assistants</p>
            </div>
            <div className="flex items-center justify-center gap-2 px-3 py-3 rounded-lg bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-blue-500/30 transition-all cursor-default">
              <Database className="size-4 text-blue-400 shrink-0" />
              <p className="text-sm font-bold text-white">ERP Systems</p>
            </div>
            <div className="flex items-center justify-center gap-2 px-3 py-3 rounded-lg bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-emerald-500/30 transition-all cursor-default">
              <Cloud className="size-4 text-emerald-400 shrink-0" />
              <p className="text-sm font-bold text-white">Cloud Infra</p>
            </div>
            <div className="flex items-center justify-center gap-2 px-3 py-3 rounded-lg bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-rose-500/30 transition-all cursor-default">
              <GitMerge className="size-4 text-rose-400 shrink-0" />
              <p className="text-sm font-bold text-white">Large Scale</p>
            </div>
          </div>

          <div className="hero-cta flex flex-col sm:flex-row gap-4">
            <a href="#projects">
              <Button className="bg-cyan-500 text-black hover:bg-cyan-400 h-12 px-8 font-mono font-bold tracking-wide">
                EXECUTE / PROJECTS <ChevronRight className="ml-2 size-4" />
              </Button>
            </a>
            <a href="/mohammed qurany.pdf" download="Mohammed-Qurany-CV.pdf">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 h-12 px-8 font-mono">
                VIEW / RESUME
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* About Me */}
      <section id="about" className="py-24 px-6 border-b border-white/5 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-white/20 flex-1"></div>
            <h2 className="font-mono text-xl tracking-widest text-zinc-300">00 / ABOUT_ME</h2>
            <div className="h-px bg-white/20 flex-[3]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
            <div className="md:col-span-2 flex justify-center observe-on-scroll">
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-950/20">
                <img src="/images/profile.png" alt="Mohammed Qurany" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-6 observe-on-scroll">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  The Engineer Behind <span className="text-cyan-400">The Code.</span>
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  I am a Senior Full Stack Web Developer and AI Engineer with deep hands-on experience
                  across freelance work and large-scale ERP systems. I bridge the gap between ambitious
                  ideas and production-ready reality.
                </p>
              </div>

              <p className="text-zinc-400 leading-relaxed">
                My work spans SaaS platforms, e-commerce marketplaces, AI-powered assistants, and enterprise-grade
                infrastructure. Whether it is shipping a monolithic ERP handling millions of transactions or
                deploying an LLM pipeline that reduces hallucination rates by 40%, I bring the same standard
                of engineering discipline: clean architecture, measurable outcomes, and systems that scale.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10 text-center">
                  <p className="text-2xl font-bold text-cyan-400">3+</p>
                  <p className="text-xs font-mono text-zinc-500 mt-1">YEARS EXP</p>
                </div>
                <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10 text-center">
                  <p className="text-2xl font-bold text-purple-400">10+</p>
                  <p className="text-xs font-mono text-zinc-500 mt-1">PROJECTS</p>
                </div>
                <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10 text-center">
                  <p className="text-2xl font-bold text-emerald-400">100%</p>
                  <p className="text-xs font-mono text-zinc-500 mt-1">SATISFACTION</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Skills */}
      <section id="skills" className="py-24 px-6 border-b border-white/5 bg-[#0d0d0d] relative overflow-hidden">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-white/20 flex-1"></div>
            <h2 className="font-mono text-xl tracking-widest text-zinc-300">01 / CORE_CAPABILITIES</h2>
            <div className="h-px bg-white/20 flex-[3]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-white/10 rounded-xl bg-black/40 hover:bg-white/[0.02] transition-colors group observe-on-scroll">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/20">
                  <Code className="size-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Frontend</h3>
                  <p className="text-xs font-mono text-cyan-400">PRODUCTION GRADE</p>
                </div>
              </div>
              <p className="text-sm text-zinc-400 mb-5">Architecting responsive, high-performance interfaces with modern frameworks and strict type safety.</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Vue.js", "TailwindCSS", "SASS", "Redux", "Zustand", "WebSocket", "PWA"].map(t => (
                  <Badge key={t} variant="outline" className="bg-cyan-950/20 text-cyan-300 font-mono text-xs border-cyan-500/20">{t}</Badge>
                ))}
              </div>
            </div>

            <div className="p-6 border border-white/10 rounded-xl bg-black/40 hover:bg-white/[0.02] transition-colors group observe-on-scroll">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-950/40 border border-blue-500/20">
                  <Server className="size-6 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Backend</h3>
                  <p className="text-xs font-mono text-blue-400">SCALABLE APIS</p>
                </div>
              </div>
              <p className="text-sm text-zinc-400 mb-5">Building resilient microservices, monoliths, and event-driven architectures serving millions of requests.</p>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express", "NestJS", "Python", "Django", "FastAPI", "REST API", "GraphQL", "gRPC", "Socket.io"].map(t => (
                  <Badge key={t} variant="outline" className="bg-blue-950/20 text-blue-300 font-mono text-xs border-blue-500/20">{t}</Badge>
                ))}
              </div>
            </div>

            <div className="p-6 border border-white/10 rounded-xl bg-black/40 hover:bg-white/[0.02] transition-colors group observe-on-scroll">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-purple-950/40 border border-purple-500/20">
                  <BrainCircuit className="size-6 text-purple-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">AI & Data Science</h3>
                  <p className="text-xs font-mono text-purple-400">PRODUCTION AI</p>
                </div>
              </div>
              <p className="text-sm text-zinc-400 mb-5">Integrating LLMs, vector databases, and ML pipelines into real-world applications with measurable impact.</p>
              <div className="flex flex-wrap gap-2">
                {["LangChain", "OpenAI API", "TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy", "RAG", "Vector DBs", "LLM Pipelines"].map(t => (
                  <Badge key={t} variant="outline" className="bg-purple-950/20 text-purple-300 font-mono text-xs border-purple-500/20">{t}</Badge>
                ))}
              </div>
            </div>

            <div className="p-6 border border-white/10 rounded-xl bg-black/40 hover:bg-white/[0.02] transition-colors group observe-on-scroll">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-amber-950/40 border border-amber-500/20">
                  <HardDrive className="size-6 text-amber-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Database & Storage</h3>
                  <p className="text-xs font-mono text-amber-400">DATA LAYER</p>
                </div>
              </div>
              <p className="text-sm text-zinc-400 mb-5">Designing high-throughput schemas, optimizing queries, and managing distributed data across polyglot persistence.</p>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MongoDB", "Redis", "MySQL", "SQLite", "Prisma", "Sequelize", "TypeORM", "Firebase", "Supabase"].map(t => (
                  <Badge key={t} variant="outline" className="bg-amber-950/20 text-amber-300 font-mono text-xs border-amber-500/20">{t}</Badge>
                ))}
              </div>
            </div>

            <div className="p-6 border border-white/10 rounded-xl bg-black/40 hover:bg-white/[0.02] transition-colors group observe-on-scroll">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/20">
                  <Cloud className="size-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Cloud & DevOps</h3>
                  <p className="text-xs font-mono text-emerald-400">INFRASTRUCTURE</p>
                </div>
              </div>
              <p className="text-sm text-zinc-400 mb-5">Orchestrating containers, automating deployments, and managing cloud-native infrastructure at scale.</p>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Kubernetes", "AWS", "GCP", "Terraform", "Jenkins", "GitHub Actions", "Nginx", "Traefik", "CI/CD"].map(t => (
                  <Badge key={t} variant="outline" className="bg-emerald-950/20 text-emerald-300 font-mono text-xs border-emerald-500/20">{t}</Badge>
                ))}
              </div>
            </div>

            <div className="p-6 border border-white/10 rounded-xl bg-black/40 hover:bg-white/[0.02] transition-colors group observe-on-scroll">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-rose-950/40 border border-rose-500/20">
                  <Wrench className="size-6 text-rose-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Testing & Tooling</h3>
                  <p className="text-xs font-mono text-rose-400">QUALITY & DX</p>
                </div>
              </div>
              <p className="text-sm text-zinc-400 mb-5">Ensuring code quality with comprehensive testing, strict linting, and optimized build pipelines.</p>
              <div className="flex flex-wrap gap-2">
                {["Jest", "Vitest", "Cypress", "Playwright", "ESLint", "Prettier", "Vite", "Webpack", "Git", "Storybook"].map(t => (
                  <Badge key={t} variant="outline" className="bg-rose-950/20 text-rose-300 font-mono text-xs border-rose-500/20">{t}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 border-b border-white/5">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px bg-white/20 flex-1"></div>
            <h2 className="font-mono text-xl tracking-widest text-zinc-300">02 / OPERATIONAL_HISTORY</h2>
            <div className="h-px bg-white/20 flex-[3]"></div>
          </div>

          <div className="space-y-12">
            <div className="relative pl-8 md:pl-0 observe-on-scroll">
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-white/10"></div>
              <div className="md:hidden absolute left-[-4px] top-2 size-2 rounded-full bg-cyan-400"></div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                <div className="md:w-1/4 pt-1">
                  <span className="font-mono text-sm text-cyan-400">2025 — PRESENT</span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-white mb-2">LLM & AI Engineer</h3>
                  <p className="text-zinc-500 font-mono text-sm mb-4">INDEPENDENT</p>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    Specializing in LLM engineering and AI engineering. Architecting and deploying AI-powered applications, integrating Large Language Models, and optimizing AI systems for production environments.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="bg-white/5 text-zinc-300 hover:bg-white/10">Python</Badge>
                    <Badge variant="secondary" className="bg-white/5 text-zinc-300 hover:bg-white/10">LangChain</Badge>
                    <Badge variant="secondary" className="bg-white/5 text-zinc-300 hover:bg-white/10">LLMs</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative pl-8 md:pl-0 observe-on-scroll">
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-white/10"></div>
              <div className="md:hidden absolute left-[-4px] top-2 size-2 rounded-full bg-blue-400"></div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                <div className="md:w-1/4 pt-1">
                  <span className="font-mono text-sm text-blue-400">2024 — 2025</span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-white mb-2">Full Stack Developer</h3>
                  <p className="text-zinc-500 font-mono text-sm mb-4">NATIONAL QUALITY</p>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    Working with large scale ERP systems. Developed, maintained, and optimized full-stack architectures for enterprise resource planning, ensuring high performance and reliability.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="bg-white/5 text-zinc-300 hover:bg-white/10">Node.js</Badge>
                    <Badge variant="secondary" className="bg-white/5 text-zinc-300 hover:bg-white/10">React</Badge>
                    <Badge variant="secondary" className="bg-white/5 text-zinc-300 hover:bg-white/10">Enterprise</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative pl-8 md:pl-0 observe-on-scroll">
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-white/10"></div>
              <div className="md:hidden absolute left-[-4px] top-2 size-2 rounded-full bg-zinc-500"></div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                <div className="md:w-1/4 pt-1">
                  <span className="font-mono text-sm text-zinc-400">2023 — 2024</span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-white mb-2">Freelance Web Developer</h3>
                  <p className="text-zinc-500 font-mono text-sm mb-4">INDEPENDENT</p>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    Full web development freelancing. Delivered custom web applications for various clients, handling requirements gathering, design, database architecture, and deployment from end to end.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="bg-white/5 text-zinc-300 hover:bg-white/10">TypeScript</Badge>
                    <Badge variant="secondary" className="bg-white/5 text-zinc-300 hover:bg-white/10">Next.js</Badge>
                    <Badge variant="secondary" className="bg-white/5 text-zinc-300 hover:bg-white/10">Web Dev</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-[#0d0d0d] border-b border-white/5">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px bg-white/20 flex-1"></div>
            <h2 className="font-mono text-xl tracking-widest text-zinc-300">03 / SHIPPED_PROJECTS</h2>
            <div className="h-px bg-white/20 flex-[3]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-black/60 border-white/10 overflow-hidden group observe-on-scroll">
              <div className="aspect-video w-full overflow-hidden border-b border-white/10 relative">
                <img src="/images/project-vocab.png" alt="VocabMaster" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <CardHeader>
                <CardTitle className="font-bold text-xl text-white">VocabMaster</CardTitle>
                <CardDescription className="text-zinc-400">Interactive Vocabulary Learning Platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-400 mb-6">
                  A full-featured language learning platform enabling users to create custom vocabulary sets, practice with adaptive exercises, and track progress. Features real-time dashboards and spaced repetition algorithms.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "TypeScript", "PostgreSQL"].map(t => (
                    <span key={t} className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-zinc-300 hover:text-white hover:bg-white/5 font-mono text-xs">
                  <Globe className="size-4 mr-2" /> VIEW_DEPLOYMENT
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-black/60 border-white/10 overflow-hidden group observe-on-scroll">
              <div className="aspect-video w-full overflow-hidden border-b border-white/10 relative">
                <img src="/images/project-foodhub.png" alt="FoodHub" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <CardHeader>
                <CardTitle className="font-bold text-xl text-white">FoodHub</CardTitle>
                <CardDescription className="text-zinc-400">Local Food Discovery & Delivery Platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-400 mb-6">
                  A geo-aware food discovery platform connecting users with local food gems, homemade meals, and niche food startups. Supports search, filtering by cuisine, real-time order tracking, and a merchant-facing dashboard.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Node.js", "MongoDB", "REST API"].map(t => (
                    <span key={t} className="text-xs font-mono text-orange-400 bg-orange-400/10 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-zinc-300 hover:text-white hover:bg-white/5 font-mono text-xs">
                  <Globe className="size-4 mr-2" /> VIEW_DEPLOYMENT
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-black/60 border-white/10 overflow-hidden group observe-on-scroll">
              <div className="aspect-video w-full overflow-hidden border-b border-white/10 relative">
                <img src="/images/project-sidra.png" alt="Sidra Honey Marketplace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <CardHeader>
                <CardTitle className="font-bold text-xl text-white">Sidra — سدرة</CardTitle>
                <CardDescription className="text-zinc-400">Premium Honey E-Commerce Marketplace</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-400 mb-6">
                  A full-stack Arabic e-commerce marketplace for premium honey varieties. Features RTL layout, rich product storytelling, user reviews, secure checkout, and a seller portal for inventory management.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "MongoDB", "RTL / i18n"].map(t => (
                    <span key={t} className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-zinc-300 hover:text-white hover:bg-white/5 font-mono text-xs">
                  <Globe className="size-4 mr-2" /> VIEW_DEPLOYMENT
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-black/60 border-white/10 overflow-hidden group">
              <div className="aspect-video w-full overflow-hidden border-b border-white/10 relative">
                <img src="/images/project-posterizer.png" alt="Posterizer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <CardHeader>
                <CardTitle className="font-bold text-xl text-white">Posterizer</CardTitle>
                <CardDescription className="text-zinc-400">Event & Business Promotion Platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-400 mb-6">
                  A modern platform for creating and publishing eye-catching event and business promotions. Includes a drag-and-drop poster builder, scheduling tools, audience targeting, and social sharing integrations.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node.js", "PostgreSQL"].map(t => (
                    <span key={t} className="text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-zinc-300 hover:text-white hover:bg-white/5 font-mono text-xs">
                  <Globe className="size-4 mr-2" /> VIEW_DEPLOYMENT
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px bg-white/20 flex-1"></div>
            <h2 className="font-mono text-xl tracking-widest text-zinc-300">04 / CERTIFICATIONS</h2>
            <div className="h-px bg-white/20 flex-[3]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 bg-black/40 border border-white/10 rounded-xl">
              <Award className="size-8 text-emerald-400 shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-1">Node.js — The Complete Guide</h4>
                <p className="text-xs font-mono text-zinc-500 mb-2">UDEMY PROFESSIONAL</p>
                <p className="text-sm text-zinc-400">Mastery of Node.js internals — event loop, streams, clustering, worker threads, and building production-grade REST APIs.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-black/40 border border-white/10 rounded-xl">
              <Award className="size-8 text-blue-400 shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-1">TypeScript — From Zero to Hero</h4>
                <p className="text-xs font-mono text-zinc-500 mb-2">UDEMY PROFESSIONAL</p>
                <p className="text-sm text-zinc-400">Advanced TypeScript patterns including generics, decorators, conditional types, and type-safe API design at scale.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-black/40 border border-white/10 rounded-xl">
              <Award className="size-8 text-cyan-400 shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-1">React — Advanced Patterns & Performance</h4>
                <p className="text-xs font-mono text-zinc-500 mb-2">UDEMY PROFESSIONAL</p>
                <p className="text-sm text-zinc-400">Deep expertise in React architecture, concurrent features, custom hooks, state management, and render optimization.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-black/40 border border-white/10 rounded-xl">
              <Award className="size-8 text-purple-400 shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-1">AI Engineering & LLM Integration</h4>
                <p className="text-xs font-mono text-zinc-500 mb-2">UDEMY PROFESSIONAL</p>
                <p className="text-sm text-zinc-400">Hands-on training in LangChain, OpenAI API, RAG pipelines, prompt engineering, and deploying AI agents to production.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none"></div>

        <div className="container mx-auto max-w-2xl relative z-10 text-center">
          <Terminal className="size-12 text-cyan-400 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
            READY TO SCALE?
          </h2>
          <p className="text-zinc-400 mb-10 text-lg">
            Whether you need a massive ERP system overhauled or an autonomous AI agent integrated into your workflow. Let's initiate the connection.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:mohammed.qurany1@gmail.com">
              <Button className="w-full sm:w-auto bg-cyan-500 text-black hover:bg-cyan-400 h-12 px-8 font-mono font-bold tracking-wide">
                <Mail className="size-4 mr-2" /> SEND_TRANSMISSION
              </Button>
            </a>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="https://github.com/mm232323" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="h-12 w-12 border-white/20 text-zinc-400 hover:text-white hover:bg-white/10">
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/mohammed-qurany-37181a412/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="h-12 w-12 border-white/20 text-zinc-400 hover:text-white hover:bg-white/10">
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z" />
                  </svg>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 bg-black text-center text-zinc-500 font-mono text-xs">
        <p>SYSTEM.TERMINAL_EXIT(0) &copy; {new Date().getFullYear()} MOHAMMED QURANY.</p>
        <p className="mt-2 text-white/20">OPERATING AT MAXIMUM EFFICIENCY</p>
      </footer>
    </div>
  );
}
