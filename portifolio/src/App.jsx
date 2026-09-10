import React, { useState, useEffect } from "react";
import { GitBranch, Briefcase, Mail, ExternalLink, Menu, X } from "lucide-react";

const TOKENS = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&display=swap');

  .portfolio-root {
    --bg: #0A0E14;
    --bg-alt: #121826;
    --text: #E4E7EB;
    --text-muted: #8B93A1;
    --accent: #4ADE80;
    --accent-dark: #0A0E14;
    --border: #232A3B;
    --font-heading: 'Space Grotesk', sans-serif;
    --font-body: 'Inter', sans-serif;

    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    min-height: 100vh;
  }
  .portfolio-root * { box-sizing: border-box; }
  .portfolio-root h1, .portfolio-root h2, .portfolio-root h3 {
    font-family: var(--font-heading);
    margin: 0;
  }
  .portfolio-root a { color: inherit; text-decoration: none; }

  .pf-nav-links-desktop { display: flex; gap: 28px; }
  .pf-nav-toggle { display: none; }
  .pf-nav-links-mobile { display: none; }

  @media (max-width: 720px) {
    .pf-nav-links-desktop { display: none; }
    .pf-nav-toggle { display: flex; }
    .pf-nav-links-mobile.pf-open {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid var(--border);
    }
    .pf-nav-links-mobile a { padding: 8px 0; font-size: 15px; }
  }
`;

const PROFILE_PHOTO = "/images/foto.png";

const PROJECTS = [
  {
    id: "ta-na-mao",
    title: "Tá na Mão",
    subtitle: "Sistema de gestão para prestadores de serviço (PUC Minas)",
    problem:
      "Prestadores de serviço precisam organizar clientes, fornecedores, estoque e movimentações em um único ambiente sem perder eficiência.",
    solution:
      "Aplicação mobile desenvolvida em React Native com módulos para clientes, fornecedores, estoque, movimentações e gestão do negócio, integrada a uma API REST e banco de dados no Render.",
    tech: ["React Native", "API REST", "Render", "Modelagem de dados"],
    github: "",
    demo: "",
    cover: "/images/ta-na-mao.png",
  },
  {
    id: "reeconecta",
    title: "ReeConecta",
    subtitle: "Plataforma para descarte de resíduos eletroeletrônicos (PUC Minas)",
    problem:
      "As pessoas e empresas precisam de uma forma simples e segura de descartar resíduos eletrônicos de maneira sustentável e organizada.",
    solution:
      "Plataforma desenvolvida em C# com arquitetura MVC para facilitar o descarte correto de resíduos eletroeletrônicos, com documentação de requisitos e foco em logística reversa e sustentabilidade.",
    tech: ["C#", ".NET MVC", "Engenharia de software", "UX"],
    github: "https://github.com/gabrielgomessdev/tanamao",
    demo: "https://reeconecta20251028113611-cfh4hedtabf6bmf8.brazilsouth-01.azurewebsites.net",
    cover: "/images/reeconecta.png",
  },
  {
    id: "realimentar",
    title: "ReAlimentar",
    subtitle: "Plataforma de combate ao desperdício de alimentos (PUC Minas)",
    problem:
      "Há excesso de alimentos que poderia ser doado, mas ainda faltam soluções simples para conectar doadores e instituições beneficiadas.",
    solution:
      "Interface web criada com HTML, CSS e JavaScript para conectar doadores e instituições, com simulação de banco de dados local e foco em impacto social e sustentabilidade.",
    tech: ["HTML", "CSS", "JavaScript", "Análise de requisitos"],
    github: "https://github.com/gabrielgomessdev/realimentar",
    demo: "https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2025-1-e1-proj-web-t12-pmv-ads-2025-1-e1-proj-realimentar/codigo-fonte/",
    cover: "/images/realimentar.png",
  },
];

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#skills", label: "Stack" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        backdropFilter: "blur(8px)",
        background: scrolled || menuOpen ? "rgba(10,14,20,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.25s ease",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "18px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#top" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 18 }}>
            gabriel.dev
          </a>

          <nav className="pf-nav-links-desktop">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{ fontSize: 14, color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className="pf-nav-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: 8,
              color: "var(--text)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        <nav
          className={`pf-nav-links-mobile${menuOpen ? " pf-open" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{ color: "var(--text-muted)" }}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" style={{ maxWidth: 1160, margin: "0 auto", padding: "96px 24px 64px" }}>
      <p style={{ color: "var(--accent)", fontSize: 14, marginBottom: 16 }}>
        Disponível para oportunidades
      </p>
      <h1
        style={{
          fontSize: "clamp(32px, 5vw, 56px)",
          lineHeight: 1.15,
          maxWidth: 780,
          fontWeight: 700,
        }}
      >
        Desenvolvedor em formação, construindo soluções reais.
      </h1>
      <p
        style={{
          marginTop: 24,
          maxWidth: 620,
          fontSize: 17,
          lineHeight: 1.6,
          color: "var(--text-muted)",
        }}
      >
        Desenvolvedor de Software em formação e Embaixador Estudantil do Google 2026 com
        ênfase em Inteligência Artificial. Cursando Análise e Desenvolvimento de Sistemas
        na PUC Minas e com base técnica pelo IFNMG, tenho como missão conectar inovação,
        tecnologia de ponta e desenvolvimento prático.
      </p>
      <div style={{ display: "flex", gap: 14, marginTop: 36 }}>
        <a
          href="#projetos"
          style={{
            background: "var(--accent)",
            color: "var(--accent-dark)",
            padding: "12px 22px",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Ver projetos
        </a>
        <a
          href="#contato"
          style={{
            border: "1px solid var(--accent)",
            color: "var(--accent)",
            padding: "12px 22px",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Entrar em contato
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" style={{ maxWidth: 1160, margin: "0 auto", padding: "64px 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
        <img
          src={PROFILE_PHOTO}
          alt="Foto de perfil"
          style={{
            width: 160,
            height: 160,
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid var(--border)",
            background: "var(--bg-alt)",
          }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <h2 style={{ fontSize: 28 }}>Sobre mim</h2>
      </div>
      <div style={{ maxWidth: 700, color: "var(--text-muted)", fontSize: 16, lineHeight: 1.75 }}>
        <p style={{ marginBottom: 16 }}>
          Estou no curso de Análise e Desenvolvimento de Sistemas e, desde o
          início, decidi que a melhor forma de aprender era construindo
          coisas de verdade, não só seguindo tutoriais.
        </p>
        <p style={{ marginBottom: 16 }}>
          Como Embaixador, acompanho de perto as tendências e ferramentas de IA da Google,
          compartilhando conhecimento sobre ecossistemas inteligentes e inteligência artificial
          aplicada. Como programador, transformo conceitos em código: crio soluções full-stack
          (web e mobile) utilizando C#, ASP.NET, React Native e JavaScript, integrando APIs e
          aplicando boas práticas de arquitetura.
        </p>
        <p>
          Minha atuação em Logística complementa meu perfil com habilidades sólidas de visão sistêmica,
          otimização de fluxos e organização sob pressão. Meu objetivo é ingressar no mercado de tecnologia
          unindo fundamentos sólidos de engenharia com a mentalidade
          voltada para o futuro da IA.
        </p>
      </div>
    </section>
  );
}


const SKILL_GROUPS = [
  {
    label: "Back-end",
    items: ["C#", "ASP.NET Core", "Node.js", "PHP", "APIs REST"]
  },
  {
    label: "Front-end / Mobile",
    items: ["HTML", "CSS", "JavaScript", "React", "React Native", "Expo"]
  },
  {
    label: "Banco de dados",
    items: ["MySQL", "SQL Server", "SQLite"]
  },
  {
    label: "Ferramentas",
    items: ["Git", "GitHub", "Figma", "Trello"]
  },
  {
    label: "Cloud & Dados",
    items: ["Microsoft Azure", "Render", "Power BI"]
  },
  {
    label: "Sistemas",
    items: ["Windows", "Linux", "Ubuntu Server", "Redes LAN"]
  }
];

function Skills() {
  return (
    <section id="skills" style={{ maxWidth: 1160, margin: "0 auto", padding: "64px 24px" }}>
      <h2 style={{ fontSize: 28, marginBottom: 8 }}>Stack e ferramentas</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 28 }}>
        {SKILL_GROUPS.map((group) => (
          <div key={group.label}>
            <h3 style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 12, fontWeight: 500 }}>
              {group.label}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {group.items.map((item) => (
                <span
                  key={item}
                  style={{
                    background: "var(--bg-alt)",
                    border: "1px solid var(--border)",
                    borderRadius: 999,
                    padding: "6px 14px",
                    fontSize: 13,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function ProjectCard({ project }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--bg-alt)",
        border: `1px solid ${hover ? "var(--accent)" : "var(--border)"}`,
        borderRadius: 12,
        overflow: "hidden",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.25s ease",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {project.cover && (
        <img
          src={project.cover}
          alt={`Capa do projeto ${project.title}`}
          style={{ width: "100%", height: 140, objectFit: "cover", display: "block", background: "var(--bg)" }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      )}
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        <div>
          <h3 style={{ fontSize: 19, marginBottom: 4 }}>{project.title}</h3>
          <p style={{ color: "var(--text-muted)", fontSize: 14 }}>{project.subtitle}</p>
        </div>

        {project.problem && (
          <p style={{ fontSize: 14, lineHeight: 1.6 }}>
            <strong style={{ color: "var(--text-muted)", fontWeight: 500 }}>Problema: </strong>
            {project.problem}
          </p>
        )}
        {project.solution && (
          <p style={{ fontSize: 14, lineHeight: 1.6 }}>
            <strong style={{ color: "var(--text-muted)", fontWeight: 500 }}>Solução: </strong>
            {project.solution}
          </p>
        )}

        {project.tech && project.tech.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 12,
                  border: "1px solid var(--border)",
                  borderRadius: 999,
                  padding: "3px 10px",
                  color: "var(--text-muted)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div style={{ display: "flex", gap: 16, marginTop: "auto", paddingTop: 8 }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--accent)" }}>
              <GitBranch size={14} /> Repositório
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--accent)" }}>
              <ExternalLink size={14} /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projetos" style={{ maxWidth: 1160, margin: "0 auto", padding: "64px 24px" }}>
      <h2 style={{ fontSize: 28, marginBottom: 8 }}>Projetos</h2>
      <p style={{ color: "var(--text-muted)", marginBottom: 32, fontSize: 15 }}>
        Do problema ao código, alguns dos projetos que construí recentemente em equipe.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" style={{ maxWidth: 1160, margin: "0 auto", padding: "64px 24px 96px" }}>
      <h2 style={{ fontSize: 28, marginBottom: 12 }}>Vamos conversar</h2>
      <p style={{ color: "var(--text-muted)", maxWidth: 520, fontSize: 15, marginBottom: 28, lineHeight: 1.6 }}>
        Estou aberto a oportunidades, trocas de conhecimento ou só bater um
        papo sobre desenvolvimento. Me chama em qualquer um dos canais
        abaixo.
      </p>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        {[
          { icon: GitBranch, label: "GitHub", href: "https://github.com/gabrielgomessdev" },
          { icon: Briefcase, label: "LinkedIn", href: "https://linkedin.com/in/gabrielgomes18" },
          { icon: Mail, label: "E-mail", href: "mailto:gabrielgomes1810@gmail.com" },
        ].map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: "10px 16px",
              color: "var(--text)",
            }}
          >
            <c.icon size={16} /> {c.label}
          </a>
        ))}
      </div>
    </section>
  );
}



export default function PortfolioApp() {
  return (
    <div className="portfolio-root">
      <style>{TOKENS}</style>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}