import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Blockradar",
	description:
		"Empower your customers with secure, non-custodial stablecoin deposits and payments using our easy-to-integrate wallet infrastructure.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} relative`}>
				<Navbar />
				<main>{children}</main>
				<ThemeToggle />
			</body>
		</html>
	);
}
