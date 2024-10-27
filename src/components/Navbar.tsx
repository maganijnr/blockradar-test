"use client";
import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import { DarkLogo, LightLogo } from "../../public";
import { Button } from "./ui/button";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
import GroupedNavItem from "./GroupedNavItem";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

	const navLinks: {
		name: string;
		path?: string;
		subLinks?: { name: string; path: string }[];
	}[] = [
		{ name: "Use Cases", path: "/" },
		{ name: "Security Overview", path: "/" },
	];

	const linksWithSubLinks: {
		name: string;

		subLinks?: { name: string; path: string }[];
	}[] = [
		{
			name: "Developers",
			subLinks: [
				{ name: "NextJs", path: "/" },
				{ name: "Vuejs", path: "/" },
				{ name: "Flutter", path: "/" },
				{ name: "React Native", path: "/" },
			],
		},
		{
			name: "Resources",
			subLinks: [
				{ name: "NextJs", path: "/" },
				{ name: "Vuejs", path: "/" },
				{ name: "Flutter", path: "/" },
				{ name: "React Native", path: "/" },
			],
		},
		{
			name: "Compnay",
			subLinks: [
				{ name: "NextJs", path: "/" },
				{ name: "Vuejs", path: "/" },
				{ name: "Flutter", path: "/" },
				{ name: "React Native", path: "/" },
			],
		},
	];
	return (
		<header className="bg-transparent sticky z-[999] top-5 h-[52px]">
			<Container className="h-full">
				<nav className="flex items-center justify-between h-full w-full pl-4 pr-8 bg-[#FAFAFA99]/60 border border-[#E6E7E7] rounded-2xl dark:bg-[#12121280]/50 dark:border-[#ffffff] dark:border-opacity-[0.06]">
					{/*Light logo*/}
					<div className="w-[112px] h-[21.28px] relative block dark:hidden">
						<Image
							src={LightLogo}
							alt="logo"
							layout="fill"
							objectFit="contain"
						/>
					</div>
					{/*Dark logo*/}
					<div className="w-[112px] h-[21.28px] relative hidden dark:block">
						<Image
							src={DarkLogo}
							alt="logo"
							layout="fill"
							objectFit="contain"
						/>
					</div>

					<div className=" items-center gap-3 hidden lg:flex">
						<div className=" flex items-center gap-3">
							{navLinks.map((link) => {
								if (!link.path) {
									return (
										<GroupedNavItem key={link.name} link={link} />
									);
								}
								return (
									<Link
										key={link.name}
										href={link.path}
										className="text-sm dark:text-white mx-2 dark:text-opacity-80 font-medium text-[#191A1A]"
									>
										{link.name}
									</Link>
								);
							})}
						</div>
						<div className=" flex items-center gap-3">
							{linksWithSubLinks.map((link) => {
								return <GroupedNavItem key={link.name} link={link} />;
							})}
						</div>
					</div>

					<div className="lg:flex items-center justify-end gap-5 hidden ">
						<Button className="bg-transparent hover:bg-transparent text-[#191A1A] dark:text-white text-sm font-medium shadow-none outline-none">
							Log in
						</Button>
						<Button className="bg-[#191A1A] dark:bg-white text-sm font-medium rounded-xl px-2">
							Sign up
							<HiArrowNarrowRight
								size={24}
								className="dark:text-[#191A1A] text-white"
							/>
						</Button>
					</div>

					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="block lg:hidden"
					>
						{mobileMenuOpen ? <X /> : <Menu />}
					</button>
				</nav>
			</Container>
		</header>
	);
};

export default Navbar;
