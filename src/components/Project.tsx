import React from "react";

import wishPurityImg from "../assets/images/wish-purity.png";
import meroFinanceImg from "../assets/images/mero-finance.png";
import pulseImg from "../assets/images/Pulse.png";
import ecommerceImg from "../assets/images/ecommerce.png";
import Tilt from 'react-parallax-tilt';

import "../assets/styles/Project.scss";

type StatusTone = "live" | "offline";

type ProjectStatus = {
  label: string;
  tone: StatusTone;
};

type LinkButtonVariant = "primary" | "ghost" | "play";

type LinkHref = `http${string}` | "#";

type LinkItem =
  | {
    type: "link";
    label: string;
    href: LinkHref;
    variant?: LinkButtonVariant;
    disabled?: boolean;
  }
  | {
    type: "dropdown";
    label: string;
    items: Array<{ label: string; href: `http${string}` }>;
  };

type ProjectData = {
  title: string;
  description: string;
  image: string;
  status?: ProjectStatus;
  stack: string[];
  links: LinkItem[];
};

const projects: ProjectData[] = [
  {
    title: "CineProfile — Cinematic Analytics",
    description:
      "A beautifully crafted ('vibecoded') analytics application that reads Letterboxd data to provide deep insights into users' movie-watching habits, emotional signatures, and personalized film recommendations.",
    image: "https://placehold.co/600x400/141414/818cf8?text=CineProfile",
    status: { label: "Live", tone: "live" },
    stack: ["React", "TypeScript", "Data Vizz", "Tailwind", "API Integration"],
    links: [
      {
        type: "link",
        label: "GitHub",
        href: "https://github.com/Shrish242/cineprofile",
        variant: "ghost",
      },
      {
        type: "link",
        label: "Live",
        href: "https://cineprofile.lovable.app/",
        variant: "primary",
      },
    ],
  },
  {
    title: "Pulse - Health Check-In App",
    description:
      "A mobile wellness app that lets users share their health status with friends and family. Built with Capacitor for cross-platform deployment.",
    image: pulseImg,
    status: { label: "Live • Google Play", tone: "live" },
    stack: ["React", "TypeScript", "Capacitor", "Tailwind", "shadcn"],
    links: [
      {
        type: "link",
        label: "GitHub",
        href: "https://github.com/Shrish242/guardian-angel-app",
        variant: "ghost",
      },
      {
        type: "link",
        label: "Google Play",
        href: "#",
        variant: "play",
        disabled: true,
      },
    ],
  },
  {
    title: "E-Commerce Management Portal",
    description:
      "A full-stack e-commerce management system with product catalog, order tracking, and an administrative dashboard.",
    image: ecommerceImg,
    status: { label: "Offline - API Costs", tone: "offline" },
    stack: ["Next.js", "TypeScript", "Node.js", "REST API", "Tailwind"],
    links: [
      {
        type: "dropdown",
        label: "GitHub",
        items: [
          {
            label: "Frontend",
            href: "https://github.com/Shrish242/ecommerce-manage-frontend",
          },
          {
            label: "Backend",
            href: "https://github.com/Shrish242/backend-template1",
          },
        ],
      },
    ],
  },
  {
    title: "WishPurity — Premium Water Brand",
    description:
      "A premium marketing website for a water brand, focused on high-end visuals and fast performance for real-world deployment.",
    image: wishPurityImg,
    status: { label: "Live", tone: "live" },
    stack: ["React", "TypeScript", "Vite", "Tailwind", "UI Components"],
    links: [
      {
        type: "link",
        label: "Live",
        href: "https://wish-purity.vercel.app/",
        variant: "primary",
      },
      {
        type: "link",
        label: "GitHub",
        href: "https://github.com/Shrish242/WishPurity",
        variant: "ghost",
      },
    ],
  },
  {
    title: "Mero Finance — Finance Tracker",
    description:
      "A personal finance tracker built with a clean dashboard UX for logging expenses and viewing summaries.",
    image: meroFinanceImg,
    status: { label: "Live", tone: "live" },
    stack: ["Next.js", "React", "App Router", "Tailwind", "Dashboard UI"],
    links: [
      {
        type: "link",
        label: "Live",
        href: "https://mero-finance.vercel.app/",
        variant: "primary",
      },
      {
        type: "link",
        label: "GitHub",
        href: "https://github.com/Shrish242/mero-finance",
        variant: "ghost",
      },
    ],
  },
];

function IconGithub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props} fill="currentColor">
      <path d="M12 .6a11.5 11.5 0 0 0-3.64 22.4c.58.11.79-.25.79-.56v-2.1c-3.23.7-3.91-1.37-3.91-1.37-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.72-1.56-2.58-.3-5.29-1.29-5.29-5.73 0-1.27.46-2.31 1.2-3.12-.12-.3-.52-1.52.12-3.17 0 0 .98-.31 3.2 1.19a11 11 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.64 1.65.24 2.87.12 3.17.75.81 1.2 1.85 1.2 3.12 0 4.45-2.71 5.43-5.3 5.72.41.36.78 1.08.78 2.18v3.24c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .6Z" />
    </svg>
  );
}

function IconExternal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props} fill="currentColor">
      <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z" />
    </svg>
  );
}

function IconChevron(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props} fill="currentColor">
      <path d="M7 10l5 5 5-5H7z" />
    </svg>
  );
}

function TechPill({ name }: { name: string }) {
  return <span className="project-tech-pill">{name}</span>;
}

function Button({
  href,
  children,
  variant = "ghost",
  disabled = false,
  leftIcon,
}: {
  href: string;
  children: React.ReactNode;
  variant?: LinkButtonVariant;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
}) {
  const cls = ["project-btn", variant, disabled ? "disabled" : ""].filter(Boolean).join(" ");

  if (disabled) {
    return (
      <span className={cls} aria-disabled="true">
        {leftIcon}
        <span>{children}</span>
      </span>
    );
  }

  return (
    <a className={cls} href={href} target="_blank" rel="noreferrer">
      {leftIcon}
      <span>{children}</span>
    </a>
  );
}

function DropdownButton({
  label,
  items,
}: {
  label: string;
  items: Array<{ label: string; href: `http${string}` }>;
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node;
      if (!ref.current) return;
      if (!ref.current.contains(target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div className="project-dropdown" ref={ref}>
      <button type="button" className="project-btn ghost" onClick={() => setOpen((v) => !v)}>
        <IconGithub className="icon" style={{ width: '1.25rem' }} />
        <span>{label}</span>
        <IconChevron className="icon chevron" style={{ width: '1.25rem' }} />
      </button>

      {open ? (
        <div className="dropdown-menu" role="menu">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              target="_blank"
              rel="noreferrer"
              className="dropdown-item"
              role="menuitem"
            >
              {it.label}
              <IconExternal className="icon external" style={{ width: '1rem' }} />
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Project() {
  return (
    <section className="projects-section" id="projects">
      <div className="bg-grid-pattern"></div>
      <div className="container">
        <h2 className="section-title animate-fade-in">Selected Projects</h2>

        <div className="projects-grid">
          {projects.map((p, pIdx) => (
            <Tilt
              key={p.title}
              className="project-tilt-wrapper"
              perspective={1500}
              scale={1.02}
              gyroscope={true}
              transitionSpeed={2500}
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
            >
              <article className="project-card animate-fade-in" style={{ animationDelay: `${0.1 * (pIdx + 1)}s` }}>
                <div className="project-image">
                  <img src={p.image} alt={p.title} />
                  {p.status ? (
                    <span className={`project-status ${p.status.tone}`}>
                      {p.status.label}
                    </span>
                  ) : null}
                </div>

                <div className="project-content">
                  <h3 className="project-title">{p.title}</h3>
                  <div className="project-stack">
                    {p.stack.map((t) => (
                      <TechPill key={t} name={t} />
                    ))}
                  </div>
                  <p className="project-description">{p.description}</p>

                  <div className="project-actions">
                    {p.links.map((l, idx) => {
                      if (l.type === "dropdown") {
                        return <DropdownButton key={idx} label={l.label} items={l.items} />;
                      }

                      const icon =
                        l.label.toLowerCase().includes("github") ? (
                          <IconGithub className="icon" style={{ width: '1.25rem' }} />
                        ) : l.label.toLowerCase().includes("live") ? (
                          <IconExternal className="icon" style={{ width: '1.25rem' }} />
                        ) : null;

                      return (
                        <Button
                          key={idx}
                          href={l.href}
                          variant={l.variant || "ghost"}
                          disabled={!!l.disabled}
                          leftIcon={icon}
                        >
                          {l.label}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </article>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
