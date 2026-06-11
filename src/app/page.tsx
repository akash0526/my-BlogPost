"use client";
import React, { useEffect, useRef, useState } from "react";

const roles = [
	"Full-Stack Developer",
	"IT Specialist",
	"Social Media Manager",
	"Digital Strategist",
	"Systems Architect",
];

const skills = [
	{
		title: "Networking",
		icon: "◈",
		desc: "LAN/Wi-Fi setup, troubleshooting, and infrastructure management.",
		img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800",
		accent: "#00C9FF",
	},
	{
		title: "Systems Admin",
		icon: "⬡",
		desc: "SCCM, Intune, Group Policy, and Active Directory management.",
		img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
		accent: "#FF6B6B",
	},
	{
		title: "Software Dev",
		icon: "◇",
		desc: "Full-stack solutions using React, Node.js, .NET, and PHP.",
		img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
		accent: "#C6FF4B",
	},
	{
		title: "Digital Strategy",
		icon: "△",
		desc: "Social media campaigns, brand visibility, content creation with Canva & CapCut.",
		img: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
		accent: "#FF9900",
	},
];

const stats = [
	{ value: "4+", label: "Years Experience" },
	{ value: "15+", label: "Projects Delivered" },
	{ value: "3", label: "Countries Worked" },
	{ value: "∞", label: "Problems Solved" },
];

const projects = [
	{
		title: "Developer Portfolio",
		subtitle: "Personal Brand Website",
		desc: "A responsive portfolio showcasing full-stack development expertise, IT management capabilities, and digital strategy services with modern UI/UX design.",
		tech: ["React", "Next.js", "Tailwind", "Vercel"],
		url: "https://my-blog-post-eight.vercel.app/",
		color: "#667eea",
		gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
		icon: "⟐",
	},
	{
		title: "NepConnect",
		subtitle: "AI-Powered Local Marketplace",
		desc: "Community marketplace platform with interactive OpenStreetMap integration, real-time location-based listings, user authentication, and AI-powered discovery features.",
		tech: ["React", "Leaflet Maps", "OpenStreetMap", "Node.js"],
		url: "https://nepconnect-2w96.vercel.app/",
		color: "#11998e",
		gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
		icon: "⊕",
	},
	{
		title: "Clinic Management",
		subtitle: "Healthcare Administration System",
		desc: "Full-featured clinic management system with role-based dashboards for admins, doctors, and reception staff. Supports patient records, appointments, and billing.",
		tech: ["React", "Node.js", "SQL", "Role-Based Auth"],
		url: "https://clinic-system-six-topaz.vercel.app/",
		color: "#ee0979",
		gradient: "linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)",
		icon: "⊛",
	},
];

const experiences = [
	{
		role: "Social Media Manager",
		company: "Homecroo Pty Ltd",
		location: "Sydney, Australia (Remote)",
		period: "Mar 2024 – Aug 2025",
		type: "Social Media",
		highlights: [
			"Managed digital presence across Facebook, Instagram, LinkedIn, and TikTok",
			"Created product-focused TikTok campaigns using Canva and CapCut",
			"Designed promotional content, scheduled posts, and grew engagement metrics",
			"Prepared monthly performance reports and responded to customer inquiries",
		],
	},
	{
		role: "Software Developer",
		company: "Xenith Tech Pvt. Ltd.",
		location: "Kathmandu, Nepal (Hybrid)",
		period: "Aug 2023 – Sep 2025",
		type: "Full-Stack",
		highlights: [
			"Built web applications using React, Node.js, C#, and .NET",
			"Improved XenLogix logistics software efficiency through full-stack development",
			"Provided IT support for hardware, networking, and system administration",
			"Managed SQL Server databases for data handling and reliability",
		],
	},
	{
		role: "Dot Net Developer",
		company: "Planet Earth Solutions",
		location: "Kathmandu, Nepal",
		period: "Sep 2021 – Aug 2023",
		type: "Development + IT",
		highlights: [
			"Developed websites and applications using C#, .NET, PHP, JavaScript",
			"Managed WordPress sites including themes, plugins, and hosting",
			"Provided IT support: hardware troubleshooting, network config, email admin",
			"Optimized SQL queries across SQL Server and Oracle databases",
		],
	},
];

const techStack = [
	{
		category: "Languages",
		items: ["HTML/CSS", "JavaScript", "TypeScript", "PHP", "C#", "Java"],
	},
	{
		category: "Frameworks",
		items: ["React.js", "Node.js", ".NET Core", "Next.js", "Angular"],
	},
	{
		category: "CMS & E-comm",
		items: ["WordPress", "Shopify", "cPanel", "Vercel"],
	},
	{ category: "Databases", items: ["SQL Server", "PostgreSQL", "Oracle"] },
	{
		category: "DevOps & Tools",
		items: ["Git/GitHub", "Azure DevOps", "Jira", "VS Code"],
	},
	{
		category: "Social & Design",
		items: ["Canva", "CapCut", "Meta Business Suite", "Photoshop"],
	},
];

export default function Home() {
	const [roleIdx, setRoleIdx] = useState(0);
	const [roleVisible, setRoleVisible] = useState(true);
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const [scrollY, setScrollY] = useState(0);
	const [activeCard, setActiveCard] = useState<number | null>(null);
	const [hoveredProject, setHoveredProject] = useState<number | null>(null);
	const [hoveredExp, setHoveredExp] = useState<number | null>(null);
	const heroRef = useRef(null);
	const cursorRef = useRef<HTMLDivElement>(null);
	const cursorDotRef = useRef<HTMLDivElement>(null);

	// Role cycling
	useEffect(() => {
		const interval = setInterval(() => {
			setRoleVisible(false);
			setTimeout(() => {
				setRoleIdx((i) => (i + 1) % roles.length);
				setRoleVisible(true);
			}, 400);
		}, 2800);
		return () => clearInterval(interval);
	}, []);

	// Mouse tracking
	useEffect(() => {
		let cx = 0,
			cy = 0,
			tx = 0,
			ty = 0;
		const onMove = (e: MouseEvent) => {
			tx = e.clientX;
			ty = e.clientY;
		};
		window.addEventListener("mousemove", onMove);
		const animate = () => {
			cx += (tx - cx) * 0.12;
			cy += (ty - cy) * 0.12;
			if (cursorRef.current)
				cursorRef.current.style.transform = `translate(${cx - 20}px, ${cy - 20}px)`;
			if (cursorDotRef.current)
				cursorDotRef.current.style.transform = `translate(${tx - 4}px, ${ty - 4}px)`;
			setMousePos({ x: tx, y: ty });
			requestAnimationFrame(animate);
		};
		animate();
		return () => window.removeEventListener("mousemove", onMove);
	}, []);

	// Scroll
	useEffect(() => {
		const onScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Intersection observer for fade-ins
	useEffect(() => {
		const els = document.querySelectorAll(".reveal");
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						e.target.classList.add("revealed");
						io.unobserve(e.target);
					}
				});
			},
			{ threshold: 0.08 },
		);
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);

	const heroParallax = scrollY * 0.4;
	const heroOpacity = Math.max(0, 1 - scrollY / 500);

	return (
		<>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Space+Mono:wght@400;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        ::selection { background: rgba(255,255,255,0.15); color: #fff; }

        body {
          background: #050508;
          color: #e8e4dc;
          font-family: 'DM Sans', sans-serif;
          cursor: none !important;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        * { cursor: none !important; }

        /* === CUSTOM CURSOR === */
        .cursor-ring {
          position: fixed; top: 0; left: 0;
          width: 40px; height: 40px;
          border: 1.5px solid rgba(255,255,255,0.4);
          border-radius: 50%;
          pointer-events: none; z-index: 9999;
          mix-blend-mode: difference;
          transition: width 0.3s, height 0.3s, background 0.3s, border-color 0.3s;
        }
        .cursor-dot {
          position: fixed; top: 0; left: 0;
          width: 8px; height: 8px;
          background: white; border-radius: 50%;
          pointer-events: none; z-index: 9999;
          mix-blend-mode: difference;
        }

        /* === HERO === */
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; background: #050508;
        }
        .hero-bg-img {
          position: absolute; inset: -20%;
          background: url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1800') center/cover no-repeat;
          opacity: 0.1; filter: grayscale(100%);
          will-change: transform;
        }
        .hero-noise {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
          pointer-events: none;
        }
        .hero-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }
        .hero-glow {
          position: absolute; width: 700px; height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(80,120,255,0.08) 0%, rgba(120,80,255,0.03) 40%, transparent 70%);
          pointer-events: none; will-change: transform;
        }
        .hero-content {
          position: relative; z-index: 2;
          text-align: center; padding: 2rem;
          will-change: transform, opacity;
        }
        .hero-eyebrow {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem; letter-spacing: 0.4em;
          color: rgba(255,255,255,0.3); text-transform: uppercase;
          margin-bottom: 2rem;
          animation: fadeUp 1s ease both;
        }
        .hero-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(5rem, 14vw, 14rem);
          line-height: 0.88; letter-spacing: -0.01em; color: #fff;
          animation: fadeUp 1s ease 0.15s both;
        }
        .hero-name span {
          display: block; color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
        .hero-role-wrap { height: 2.5rem; overflow: hidden; margin: 2rem 0 3rem; }
        .hero-role {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.95rem, 2.5vw, 1.35rem);
          font-weight: 300; letter-spacing: 0.15em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); display: inline-block;
          transition: opacity 0.35s ease, transform 0.35s ease;
          animation: fadeUp 1s ease 0.3s both;
        }
        .hero-role.hidden { opacity: 0; transform: translateY(20px); }
        .hero-cta {
          display: inline-flex; align-items: center; gap: 1rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase;
          color: #fff; text-decoration: none;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 1rem 2.5rem; position: relative; overflow: hidden;
          transition: color 0.4s, border-color 0.4s;
          animation: fadeUp 1s ease 0.45s both;
        }
        .hero-cta::before {
          content: ''; position: absolute; inset: 0;
          background: white;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.7,0,0.3,1); z-index: -1;
        }
        .hero-cta:hover { color: #050508; border-color: white; }
        .hero-cta:hover::before { transform: scaleX(1); }
        .scroll-indicator {
          position: absolute; bottom: 2.5rem; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
          z-index: 2; animation: fadeUp 1s ease 1s both;
        }
        .scroll-line {
          width: 1px; height: 60px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);
          animation: scrollPulse 2s ease infinite;
        }
        .scroll-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem; letter-spacing: 0.3em;
          color: rgba(255,255,255,0.2); text-transform: uppercase;
        }

        /* === GLOBAL SECTION === */
        .section { padding: 10rem 2rem; max-width: 1400px; margin: 0 auto; }
        .section-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem; letter-spacing: 0.5em;
          color: rgba(255,255,255,0.25); text-transform: uppercase;
          margin-bottom: 1.5rem;
          display: flex; align-items: center; gap: 1.5rem;
        }
        .section-label::after {
          content: ''; flex: 1; height: 1px;
          background: rgba(255,255,255,0.06);
        }
        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 7rem);
          line-height: 0.9; color: #fff; margin-bottom: 5rem;
        }
        .section-title em {
          font-style: normal; color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.25);
        }

        /* === STATS === */
        .stats-row {
          display: grid; grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          margin-bottom: 0;
        }
        .stat-item {
          padding: 3rem 2rem;
          border-right: 1px solid rgba(255,255,255,0.06);
          transition: background 0.3s ease;
        }
        .stat-item:last-child { border-right: none; }
        .stat-item:hover { background: rgba(255,255,255,0.02); }
        .stat-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 4.5rem; color: #fff; line-height: 1; margin-bottom: 0.5rem;
        }
        .stat-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem; letter-spacing: 0.25em;
          color: rgba(255,255,255,0.3); text-transform: uppercase;
        }

        /* === ABOUT === */
        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 6rem; align-items: start;
        }
        .about-img-wrap {
          position: relative; aspect-ratio: 3/4; overflow: hidden;
        }
        .about-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          filter: grayscale(60%) contrast(1.1);
          transition: filter 0.8s ease, transform 1s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .about-img-wrap:hover img { filter: grayscale(0%) contrast(1); transform: scale(1.04); }
        .about-img-border {
          position: absolute; inset: 1.5rem;
          border: 1px solid rgba(255,255,255,0.1);
          pointer-events: none; transition: inset 0.4s ease;
        }
        .about-img-wrap:hover .about-img-border { inset: 0.75rem; }
        .about-tag {
          position: absolute; bottom: 2rem; right: 2rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem; letter-spacing: 0.25em;
          color: rgba(255,255,255,0.5); text-transform: uppercase;
          background: rgba(5,5,8,0.8); padding: 0.5rem 1rem;
          backdrop-filter: blur(10px);
        }
        .about-text { padding-top: 3rem; }
        .about-body {
          font-size: 1.15rem; line-height: 1.85;
          color: rgba(232,228,220,0.65); margin-bottom: 2rem;
        }
        .about-body strong { color: #fff; font-weight: 500; }
        .bullet-list { list-style: none; display: flex; flex-direction: column; gap: 1.25rem; }
        .bullet-item {
          display: flex; gap: 1rem; align-items: flex-start;
          font-size: 0.95rem; color: rgba(232,228,220,0.7);
          line-height: 1.6; padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .bullet-item:last-child { border-bottom: none; }
        .bullet-icon {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem; color: rgba(255,255,255,0.2);
          padding-top: 0.3rem; min-width: 2rem; letter-spacing: 0.1em;
        }
        .bullet-item strong { color: #fff; }

        /* === PROJECTS === */
        .projects-section { padding-top: 0; }
        .projects-grid {
          display: flex; flex-direction: column; gap: 2px;
        }
        .project-card {
          position: relative; display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 420px; overflow: hidden;
          background: #08080b;
          transition: all 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .project-card::before {
          content: ''; position: absolute; inset: 0;
          opacity: 0; transition: opacity 0.5s ease; z-index: 1;
        }
        .project-card:hover::before { opacity: 1; }
        .project-card:hover { background: #0a0a0f; }

        .project-visual {
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }
        .project-visual-bg {
          position: absolute; inset: 0; opacity: 0.08;
          transition: opacity 0.5s ease;
        }
        .project-card:hover .project-visual-bg { opacity: 0.15; }
        .project-visual-icon {
          font-size: 8rem; color: rgba(255,255,255,0.04);
          transition: all 0.5s ease;
        }
        .project-card:hover .project-visual-icon { color: rgba(255,255,255,0.08); transform: scale(1.1) rotate(5deg); }
        .project-number {
          position: absolute; top: 2rem; left: 2rem;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 6rem; line-height: 1;
          color: rgba(255,255,255,0.03);
          transition: color 0.5s ease;
        }
        .project-card:hover .project-number { color: rgba(255,255,255,0.06); }

        .project-info {
          display: flex; flex-direction: column;
          justify-content: center; padding: 4rem;
          position: relative; z-index: 2;
        }
        .project-subtitle {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem; letter-spacing: 0.3em;
          text-transform: uppercase; margin-bottom: 1rem;
          transition: color 0.3s ease;
        }
        .project-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          line-height: 0.95; color: #fff; margin-bottom: 1.5rem;
        }
        .project-desc {
          font-size: 0.95rem; line-height: 1.7;
          color: rgba(255,255,255,0.5); margin-bottom: 2rem;
          max-width: 480px;
          transform: translateY(10px); opacity: 0.7;
          transition: all 0.4s ease;
        }
        .project-card:hover .project-desc { transform: translateY(0); opacity: 1; }

        .project-tech {
          display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;
        }
        .project-tech-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem; letter-spacing: 0.1em;
          padding: 0.35rem 0.8rem;
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.4);
          transition: all 0.3s ease;
        }
        .project-card:hover .project-tech-tag { border-color: rgba(255,255,255,0.15); color: rgba(255,255,255,0.6); }

        .project-link {
          display: inline-flex; align-items: center; gap: 0.75rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase;
          color: rgba(255,255,255,0.5); text-decoration: none;
          transition: all 0.3s ease;
        }
        .project-link:hover { color: #fff; }
        .project-link-arrow {
          font-size: 1rem;
          transition: transform 0.3s ease;
        }
        .project-link:hover .project-link-arrow { transform: translate(4px, -4px); }

        /* === EXPERIENCE TIMELINE === */
        .experience-section { padding-top: 0; }
        .timeline { display: flex; flex-direction: column; gap: 0; }
        .timeline-item {
          display: grid; grid-template-columns: 280px 1fr;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 3rem 0;
          transition: background 0.3s ease;
        }
        .timeline-item:last-child { border-bottom: 1px solid rgba(255,255,255,0.05); }
        .timeline-item:hover { background: rgba(255,255,255,0.01); }

        .timeline-meta { padding-right: 3rem; }
        .timeline-period {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem; letter-spacing: 0.1em;
          color: rgba(255,255,255,0.25); margin-bottom: 0.75rem;
        }
        .timeline-company {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem; color: #fff; line-height: 1;
          margin-bottom: 0.5rem;
        }
        .timeline-location {
          font-size: 0.8rem; color: rgba(255,255,255,0.3);
          font-style: italic;
        }
        .timeline-body {}
        .timeline-role {
          font-size: 1.1rem; font-weight: 600;
          color: rgba(255,255,255,0.85); margin-bottom: 1.25rem;
          display: flex; align-items: center; gap: 0.75rem;
        }
        .timeline-badge {
          font-family: 'Space Mono', monospace;
          font-size: 0.55rem; letter-spacing: 0.1em;
          padding: 0.25rem 0.6rem;
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
        }
        .timeline-highlights { list-style: none; padding: 0; }
        .timeline-highlights li {
          font-size: 0.9rem; color: rgba(255,255,255,0.5);
          line-height: 1.6; padding: 0.3rem 0 0.3rem 1.5rem;
          position: relative;
        }
        .timeline-highlights li::before {
          content: '→'; position: absolute; left: 0;
          color: rgba(255,255,255,0.2); font-size: 0.75rem;
        }

        /* === SKILLS GRID === */
        .skills-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 1px; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.04);
        }
        .skill-card {
          position: relative; overflow: hidden;
          background: #050508; aspect-ratio: 4/3;
        }
        .skill-card-img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover;
          filter: grayscale(80%) brightness(0.3);
          transition: filter 0.7s ease, transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .skill-card:hover .skill-card-img { filter: grayscale(0%) brightness(0.45); transform: scale(1.06); }
        .skill-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(5,5,8,0.95) 0%, rgba(5,5,8,0.4) 50%, transparent 100%);
        }
        .skill-card-content { position: absolute; bottom: 0; left: 0; right: 0; padding: 2.5rem; }
        .skill-card-icon {
          font-size: 1.5rem; margin-bottom: 1rem; display: block;
          transition: color 0.3s;
        }
        .skill-card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.5rem; color: #fff; line-height: 1; margin-bottom: 0.75rem;
          transition: transform 0.4s ease;
        }
        .skill-card:hover .skill-card-title { transform: translateY(-4px); }
        .skill-card-desc {
          font-size: 0.85rem; color: rgba(255,255,255,0.45); line-height: 1.6;
          max-width: 30ch; transform: translateY(8px); opacity: 0;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .skill-card:hover .skill-card-desc { opacity: 1; transform: translateY(0); }
        .skill-card-accent {
          position: absolute; top: 0; left: 0; right: 0;
          height: 2px; opacity: 0; transition: opacity 0.4s ease;
        }
        .skill-card:hover .skill-card-accent { opacity: 1; }

        /* === TECH STACK MARQUEE === */
        .tech-stack-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.03);
        }
        .tech-category {
          background: #050508; padding: 2.5rem;
          transition: background 0.3s ease;
        }
        .tech-category:hover { background: rgba(255,255,255,0.015); }
        .tech-category-title {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem; letter-spacing: 0.3em;
          color: rgba(255,255,255,0.25); text-transform: uppercase;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .tech-items { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .tech-pill {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem; color: rgba(255,255,255,0.55);
          padding: 0.4rem 0.9rem;
          border: 1px solid rgba(255,255,255,0.06);
          transition: all 0.3s ease;
        }
        .tech-pill:hover { border-color: rgba(255,255,255,0.15); color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.03); }

        /* === CONTACT === */
        .contact-section {
          padding: 10rem 2rem; position: relative; overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .contact-section-inner {
          max-width: 1400px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 6rem; align-items: end;
        }
        .contact-big-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(4rem, 9vw, 9rem);
          line-height: 0.88; color: #fff;
        }
        .contact-big-text em {
          font-style: normal; display: block; color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        }
        .contact-sub {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem; letter-spacing: 0.3em;
          color: rgba(255,255,255,0.25); text-transform: uppercase;
          margin-top: 1.5rem;
        }
        .contact-details { display: flex; flex-direction: column; gap: 2.5rem; }
        .contact-item-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem; letter-spacing: 0.35em;
          color: rgba(255,255,255,0.25); text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .contact-item-value {
          font-size: 1.05rem; color: rgba(255,255,255,0.7);
          text-decoration: none; display: flex; align-items: center;
          gap: 0.75rem; transition: color 0.3s;
        }
        .contact-item-value:hover { color: #fff; }
        .contact-item-arrow {
          font-size: 0.8rem; color: rgba(255,255,255,0.2);
          transition: transform 0.3s, color 0.3s;
        }
        .contact-item-value:hover .contact-item-arrow { transform: translate(4px, -4px); color: rgba(255,255,255,0.6); }
        .contact-location {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem; color: rgba(255,255,255,0.2);
          letter-spacing: 0.1em; margin-top: 2rem;
          display: flex; align-items: center; gap: 0.5rem;
        }
        .location-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #4CAF50; animation: pulse 2s ease infinite;
        }

        /* === FOOTER === */
        .footer {
          border-top: 1px solid rgba(255,255,255,0.04);
          padding: 3rem; display: flex; justify-content: space-between;
          align-items: center;
        }
        .footer-left {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem; letter-spacing: 0.2em;
          color: rgba(255,255,255,0.12); text-transform: uppercase;
        }
        .footer-right { display: flex; gap: 2rem; }
        .footer-link {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem; letter-spacing: 0.15em;
          color: rgba(255,255,255,0.15); text-decoration: none;
          text-transform: uppercase; transition: color 0.3s;
        }
        .footer-link:hover { color: rgba(255,255,255,0.5); }

        /* === ANIMATIONS === */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; } 50% { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        .reveal {
          opacity: 0; transform: translateY(50px);
          transition: opacity 1s cubic-bezier(0.25,0.46,0.45,0.94), transform 1s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .reveal.revealed { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }
        .reveal-delay-5 { transition-delay: 0.5s; }

        /* === RESPONSIVE === */
        @media (max-width: 1024px) {
          .project-card { grid-template-columns: 1fr; min-height: auto; }
          .project-visual { min-height: 200px; }
          .timeline-item { grid-template-columns: 1fr; }
          .timeline-meta { padding-right: 0; padding-bottom: 1.5rem; }
          .tech-stack-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .section { padding: 6rem 1.5rem; }
          .stats-row { grid-template-columns: repeat(2, 1fr); }
          .about-grid { grid-template-columns: 1fr; gap: 3rem; }
          .skills-grid { grid-template-columns: 1fr; }
          .contact-section-inner { grid-template-columns: 1fr; gap: 4rem; }
          .contact-section { padding: 6rem 1.5rem; }
          .tech-stack-grid { grid-template-columns: 1fr; }
          .footer { flex-direction: column; gap: 1rem; text-align: center; }
          .project-info { padding: 2.5rem; }
        }
        @media (max-width: 480px) {
          .stats-row { grid-template-columns: 1fr; }
          .stat-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
        }
      `}</style>

			{/* Custom Cursor */}
			<div
				ref={cursorRef}
				className="cursor-ring"
				style={{ position: "fixed", pointerEvents: "none", zIndex: 9999 }}
			/>
			<div
				ref={cursorDotRef}
				className="cursor-dot"
				style={{ position: "fixed", pointerEvents: "none", zIndex: 9999 }}
			/>

			{/* ===== HERO ===== */}
			<section className="hero" ref={heroRef}>
				<div
					className="hero-bg-img"
					style={{ transform: `translateY(${heroParallax}px)` }}
				/>
				<div className="hero-noise" />
				<div className="hero-grid" />
				<div
					className="hero-glow"
					style={{ left: mousePos.x - 350, top: mousePos.y - 350 }}
				/>

				<div
					className="hero-content"
					style={{
						opacity: heroOpacity,
						transform: `translateY(${scrollY * 0.15}px)`,
					}}
				>
					<div className="hero-eyebrow">Portfolio · 2025</div>
					<h1 className="hero-name">
						Akash
						<span>Adhikari</span>
					</h1>
					<div className="hero-role-wrap">
						<span className={`hero-role${roleVisible ? "" : " hidden"}`}>
							— {roles[roleIdx]} —
						</span>
					</div>
					<a href="mailto:akashadhikari0526@gmail.com" className="hero-cta">
						Get in Touch <span style={{ fontSize: "1.1rem" }}>↗</span>
					</a>
				</div>

				<div className="scroll-indicator">
					<span className="scroll-label">Scroll</span>
					<div className="scroll-line" />
				</div>
			</section>

			{/* ===== STATS ===== */}
			<div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
				<div className="stats-row reveal">
					{stats.map((s, i) => (
						<div className={`stat-item reveal reveal-delay-${i + 1}`} key={i}>
							<div className="stat-value">{s.value}</div>
							<div className="stat-label">{s.label}</div>
						</div>
					))}
				</div>
			</div>

			{/* ===== ABOUT ===== */}
			<section className="section" id="about">
				<div className="reveal">
					<div className="section-label">001 — About</div>
					<h2 className="section-title">
						Who I<br />
						<em>Actually Am</em>
					</h2>
				</div>
				<div className="about-grid">
					<div className="about-img-wrap reveal reveal-delay-1">
						<img
							src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
							alt="Professional workspace"
						/>
						<div className="about-img-border" />
						<div className="about-tag">Doha, Qatar · Available</div>
					</div>
					<div className="about-text reveal reveal-delay-2">
						<p className="about-body">
							I'm a <strong>Full-Stack Developer and IT Specialist</strong> with
							a unique edge — I don't just build software, I build{" "}
							<strong>
								bridges between complex technology and real business growth
							</strong>
							.
						</p>
						<p className="about-body">
							Based in Doha, Qatar, I combine deep technical knowledge with a
							strategic marketing mindset to deliver solutions that actually{" "}
							<strong>move the needle</strong>. From building web applications
							and managing IT infrastructure to running social media campaigns —
							I wear multiple hats and thrive in dynamic environments.
						</p>
						<ul className="bullet-list" style={{ marginTop: "2.5rem" }}>
							<li className="bullet-item">
								<span className="bullet-icon">01</span>
								<div>
									<strong>Web Development</strong> — Full-stack solutions using
									React, Node.js, .NET, PHP, and WordPress
								</div>
							</li>
							<li className="bullet-item">
								<span className="bullet-icon">02</span>
								<div>
									<strong>IT Infrastructure</strong> — Hardware, networking,
									system administration, and security management
								</div>
							</li>
							<li className="bullet-item">
								<span className="bullet-icon">03</span>
								<div>
									<strong>Digital Strategy</strong> — Social media campaigns,
									content creation, and brand growth across platforms
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* ===== PROJECTS ===== */}
			<section className="section projects-section" id="projects">
				<div className="reveal">
					<div className="section-label">002 — Selected Work</div>
					<h2 className="section-title">
						Live
						<br />
						<em>Projects</em>
					</h2>
				</div>
				<div className="projects-grid">
					{projects.map((p, i) => (
						<div
							className="project-card reveal reveal-delay-2"
							key={i}
							onMouseEnter={() => setHoveredProject(i)}
							onMouseLeave={() => setHoveredProject(null)}
							style={{
								borderLeft: `3px solid ${hoveredProject === i ? p.color : "transparent"}`,
								transition: "border-color 0.4s ease",
							}}
						>
							<div className="project-visual">
								<div
									className="project-visual-bg"
									style={{ background: p.gradient }}
								/>
								<div className="project-number">0{i + 1}</div>
								<div className="project-visual-icon">{p.icon}</div>
							</div>
							<div className="project-info">
								<div
									className="project-subtitle"
									style={{
										color:
											hoveredProject === i ? p.color : "rgba(255,255,255,0.3)",
									}}
								>
									{p.subtitle}
								</div>
								<h3 className="project-title">{p.title}</h3>
								<p className="project-desc">{p.desc}</p>
								<div className="project-tech">
									{p.tech.map((t, ti) => (
										<span className="project-tech-tag" key={ti}>
											{t}
										</span>
									))}
								</div>
								<a
									href={p.url}
									target="_blank"
									rel="noopener noreferrer"
									className="project-link"
								>
									View Live Project{" "}
									<span className="project-link-arrow">↗</span>
								</a>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* ===== EXPERIENCE ===== */}
			<section className="section experience-section" id="experience">
				<div className="reveal">
					<div className="section-label">003 — Experience</div>
					<h2 className="section-title">
						Where I've
						<br />
						<em>Worked</em>
					</h2>
				</div>
				<div className="timeline">
					{experiences.map((exp, i) => (
						<div
							className="timeline-item reveal reveal-delay-2"
							key={i}
							onMouseEnter={() => setHoveredExp(i)}
							onMouseLeave={() => setHoveredExp(null)}
						>
							<div className="timeline-meta">
								<div className="timeline-period">{exp.period}</div>
								<div className="timeline-company">{exp.company}</div>
								<div className="timeline-location">{exp.location}</div>
							</div>
							<div className="timeline-body">
								<div className="timeline-role">
									{exp.role}
									<span className="timeline-badge">{exp.type}</span>
								</div>
								<ul className="timeline-highlights">
									{exp.highlights.map((h, hi) => (
										<li key={hi}>{h}</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* ===== TECHNICAL CAPABILITIES ===== */}
			<section className="section" style={{ paddingTop: 0 }}>
				<div className="reveal">
					<div className="section-label">004 — Expertise</div>
					<h2 className="section-title">
						Technical
						<br />
						<em>Capabilities</em>
					</h2>
				</div>

				<div
					className="skills-grid reveal reveal-delay-1"
					style={{ marginBottom: "6rem" }}
				>
					{skills.map((skill, i) => (
						<div
							className="skill-card"
							key={i}
							onMouseEnter={() => setActiveCard(i)}
							onMouseLeave={() => setActiveCard(null)}
						>
							<img
								src={skill.img}
								alt={skill.title}
								className="skill-card-img"
							/>
							<div className="skill-card-overlay" />
							<div
								className="skill-card-accent"
								style={{
									background: `linear-gradient(to right, ${skill.accent}, transparent)`,
								}}
							/>
							<div className="skill-card-content">
								<span
									className="skill-card-icon"
									style={{
										color:
											activeCard === i ? skill.accent : "rgba(255,255,255,0.2)",
									}}
								>
									{skill.icon}
								</span>
								<div className="skill-card-title">{skill.title}</div>
								<div className="skill-card-desc">{skill.desc}</div>
							</div>
						</div>
					))}
				</div>

				<div className="reveal">
					<div className="section-label" style={{ marginTop: "4rem" }}>
						Tech Stack
					</div>
				</div>
				<div className="tech-stack-grid reveal reveal-delay-1">
					{techStack.map((cat, i) => (
						<div className="tech-category" key={i}>
							<div className="tech-category-title">{cat.category}</div>
							<div className="tech-items">
								{cat.items.map((item, ii) => (
									<span className="tech-pill" key={ii}>
										{item}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* ===== CONTACT ===== */}
			<section className="contact-section" id="contact">
				<div className="contact-section-inner">
					<div className="reveal">
						<h2 className="contact-big-text">
							Let's Build
							<em>Something</em>
							Together
						</h2>
						<p className="contact-sub">
							Currently available for new projects · Based in Doha, Qatar
						</p>
					</div>
					<div className="contact-details reveal reveal-delay-2">
						<div>
							<div className="contact-item-label">Email</div>
							<a
								href="mailto:akashadhikari0526@gmail.com"
								className="contact-item-value"
							>
								akashadhikari0526@gmail.com{" "}
								<span className="contact-item-arrow">↗</span>
							</a>
						</div>
						<div>
							<div className="contact-item-label">Phone</div>
							<a href="tel:+97470826507" className="contact-item-value">
								+974 70826507 <span className="contact-item-arrow">↗</span>
							</a>
						</div>
						<div>
							<div className="contact-item-label">Core Stack</div>
							<div className="contact-item-value" style={{ cursor: "default" }}>
								React · Node.js · .NET · WordPress · PHP
							</div>
						</div>
						<div className="contact-location">
							<div className="location-dot" />
							Currently in Doha, Qatar — Ready to contribute immediately
						</div>
					</div>
				</div>
			</section>

			{/* ===== FOOTER ===== */}
			<footer className="footer">
				<div className="footer-left">
					© 2025 Akash Adhikari · All Rights Reserved
				</div>
				<div className="footer-right">
					<a
						href="https://www.linkedin.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="footer-link"
					>
						LinkedIn
					</a>
					<a
						href="https://github.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="footer-link"
					>
						GitHub
					</a>
					<a href="mailto:akashadhikari0526@gmail.com" className="footer-link">
						Email
					</a>
				</div>
			</footer>
		</>
	);
}
