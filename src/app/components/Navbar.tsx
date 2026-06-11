"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 60);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const links = [
		{ href: "#about", label: "About" },
		{ href: "#projects", label: "Projects" },
		{ href: "#experience", label: "Experience" },
		{ href: "#contact", label: "Contact" },
	];

	return (
		<>
			<style>{`
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 1.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: none;
        }
        .nav.scrolled {
          padding: 1rem 3rem;
          background: rgba(5, 5, 8, 0.85);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .nav-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem;
          color: #fff;
          text-decoration: none;
          letter-spacing: 0.08em;
          position: relative;
        }
        .nav-logo::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #fff;
          transition: width 0.3s ease;
        }
        .nav-logo:hover::after { width: 100%; }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }
        .nav-link {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          position: relative;
          padding: 0.25rem 0;
          transition: color 0.3s ease;
        }
        .nav-link:hover { color: #fff; }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: rgba(255,255,255,0.5);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }

        .nav-cta {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #fff;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 0.6rem 1.5rem;
          transition: all 0.3s ease;
        }
        .nav-cta:hover {
          background: #fff;
          color: #050508;
          border-color: #fff;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: none;
          padding: 8px;
          z-index: 1002;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 1.5px;
          background: #fff;
          transition: all 0.3s ease;
        }
        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(4px, 5px);
        }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(4px, -5px);
        }

        .mobile-menu {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(5,5,8,0.97);
          backdrop-filter: blur(30px);
          z-index: 1001;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2.5rem;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3rem;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.3s, transform 0.3s;
        }
        .mobile-menu a:hover { color: #fff; transform: translateX(10px); }

        @media (max-width: 768px) {
          .nav { padding: 1.2rem 1.5rem; }
          .nav.scrolled { padding: 1rem 1.5rem; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

			<nav className={`nav ${scrolled ? "scrolled" : ""}`}>
				<Link href="/" className="nav-logo">
					AKASH<span style={{ color: "rgba(255,255,255,0.3)" }}>.</span>
				</Link>

				<div className="nav-links">
					{links.map((l) => (
						<a key={l.href} href={l.href} className="nav-link">
							{l.label}
						</a>
					))}
					<a href="mailto:akashadhikari0526@gmail.com" className="nav-cta">
						Let's Talk
					</a>
				</div>

				<button
					className={`hamburger ${menuOpen ? "open" : ""}`}
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Toggle menu"
				>
					<span />
					<span />
					<span />
				</button>
			</nav>

			<div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
				{links.map((l) => (
					<a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
						{l.label}
					</a>
				))}
				<a
					href="mailto:akashadhikari0526@gmail.com"
					onClick={() => setMenuOpen(false)}
					style={{
						fontFamily: "'Space Mono', monospace",
						fontSize: "0.8rem",
						letterSpacing: "0.15em",
						textTransform: "uppercase",
					}}
				>
					akashadhikari0526@gmail.com
				</a>
			</div>
		</>
	);
}
