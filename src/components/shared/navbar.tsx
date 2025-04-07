"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal-info";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import GlimmerEffect from "./GlimmerEffect";
import { ModeToggle } from "./mode-toggle";

const navLinks = [
	{ href: "/#about", label: "About" },
	{ href: "/#skills", label: "Skills" },
	{ href: "/#projects", label: "Projects" },
	{ href: "/#work-experience", label: "Experience" },
	{ href: "/#education", label: "Education" },
	{ href: "/#testimonials", label: "Testimonials" },
	{ href: "/#certificates", label: "Certificates" },
	{ href: "/blog", label: "Blog" },
	{ href: "/#contact", label: "Contact" },
];

const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={cn(
				"sticky top-0 z-40 w-full transition-all duration-300",
				scrolled
					? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2"
					: "bg-transparent py-4"
			)}
		>
			<div className="container mx-auto px-4">
				<div className="flex h-16 items-center justify-between">
					<Link
						href="/"
						className="flex items-center space-x-2 relative group"
					>
						<Avatar className="h-8 w-8">
							<GlimmerEffect />
							<AvatarImage
								src={personalInfo.avatar as string}
								alt={personalInfo.name}
								className="aspect-square object-cover"
							/>
							<AvatarFallback className="text-xs font-medium">
								{personalInfo.name
									.split(" ")
									.map((n) => n[0])
									.join("")}
							</AvatarFallback>
						</Avatar>
						<span className="text-lg font-semibold">
							{personalInfo.name}
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex md:items-center md:space-x-8">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
							>
								{link.label}
							</Link>
						))}
						<ModeToggle />
					</nav>

					{/* Mobile Navigation Toggle */}
					<div className="flex md:hidden">
						<ModeToggle />
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleMenu}
							className="ml-2"
						>
							{isMenuOpen ? (
								<X className="h-5 w-5" />
							) : (
								<Menu className="h-5 w-5" />
							)}
						</Button>
					</div>
				</div>

				{/* Mobile Navigation Menu */}
				{isMenuOpen && (
					<div className="md:hidden">
						<nav className="flex flex-col space-y-2 py-4">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="py-2 text-sm font-medium transition-colors hover:text-primary"
									onClick={() => setIsMenuOpen(false)}
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>
				)}
			</div>
		</header>
	);
};

export default Navigation;
