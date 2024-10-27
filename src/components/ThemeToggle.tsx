"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		if (typeof window !== undefined) {
			const myTheme = localStorage.getItem("blockRadarTheme");
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
				.matches
				? "dark"
				: "light";
			setTheme(myTheme ? (myTheme as "light" | "dark") : systemTheme);
			document.documentElement.classList.add(
				myTheme ? myTheme : systemTheme
			);
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
		localStorage.setItem("blockRadarTheme", newTheme);

		document.documentElement.classList.remove(theme);
		document.documentElement.classList.add(newTheme);
	};

	return (
		<motion.div
			className="fixed bg-[#F7F7F7]  z-[888] bottom-10 right-5 cursor-pointer h-10 w-full max-w-[92px] border border-dashed rounded-[200px] border-[#E6E7E7] dark:border-[#FFFFFF1A]/10 dark:bg-[#171717] flex items-center justify-center "
			onClick={toggleTheme}
			whileHover={{ scale: 1.1 }}
			onHoverStart={(e) => {}}
			onHoverEnd={(e) => {}}
		>
			<motion.div className="w-10 h-8 flex items-center justify-center rounded-[900px] border dark:border-0 border-[#E6E7E7] bg-[#F5F6F6] dark:bg-transparent">
				<Sun
					size={24}
					className="text-[#191A1A] dark:text-[#FFFFFF4D]/30"
				/>
			</motion.div>
			<motion.div className="w-10 h-8 flex items-center justify-center rounded-[900px] border-0 dark:border dark:border-[#FFFFFF1A]/10 dark:bg-[#FFFFFF1A]/10 bg-transparent">
				<Moon size={24} className="text-[#CFD2D2] dark:text-[#FFFFFF]" />
			</motion.div>
		</motion.div>
	);
};

export default ThemeToggle;
