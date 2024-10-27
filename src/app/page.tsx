"use client";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { DashboardDark, DashboardLight } from "../../public";
import Radar from "@/components/Radar";
import { useEffect, useRef } from "react";

export default function Home() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const radarSpeed = 0.005;

	useEffect(() => {
		const canvas = canvasRef.current;
		const content = contentRef.current;
		if (!canvas || !content) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resize();
		window.addEventListener("resize", resize);

		const drawGrid = () => {
			ctx.strokeStyle = "rgba(50, 50, 50, 0.3)";
			ctx.lineWidth = 1;

			for (let x = 0; x < canvas.width; x += 40) {
				ctx.beginPath();
				ctx.moveTo(x, 0);
				ctx.lineTo(x, canvas.height);
				ctx.stroke();
			}

			for (let y = 0; y < canvas.height; y += 40) {
				ctx.beginPath();
				ctx.moveTo(0, y);
				ctx.lineTo(canvas.width, y);
				ctx.stroke();
			}
		};

		let angle = 0;
		const drawRadar = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			drawGrid();

			const centerX = canvas.width / 2;
			const centerY = canvas.height / 2;
			const radius = Math.max(canvas.width, canvas.height);

			// Changed the gradient to work counterclockwise
			const gradient = ctx.createConicGradient(centerX, centerY, angle);
			gradient.addColorStop(0, "rgba(0, 255, 0, 0.1)");
			gradient.addColorStop(0.08, "rgba(0, 255, 0, 0.05)");
			gradient.addColorStop(0.01, "transparent");

			ctx.fillStyle = gradient;
			ctx.beginPath();
			ctx.moveTo(centerX, centerY);
			// Changed the arc angles for counterclockwise rotation
			ctx.arc(centerX, centerY, radius, angle, angle - Math.PI / 2, true);
			ctx.lineTo(centerX, centerY);
			ctx.fill();

			// Subtract from angle instead of adding for counterclockwise rotation
			angle -= radarSpeed;
			// Reset angle when it goes below 0
			if (angle < 0) angle = Math.PI * 2;

			const elements = Array.from(content.getElementsByTagName("*"));
			for (let elem of elements) {
				const rect = (elem as HTMLElement).getBoundingClientRect();
				const elemCenterX = rect.left + rect.width / 2;
				const elemCenterY = rect.top + rect.height / 2;

				const elemAngle = Math.atan2(
					elemCenterY - centerY,
					elemCenterX - centerX
				);
				const angleDiff = Math.abs(
					((angle % (Math.PI * 2)) - elemAngle + Math.PI * 2) %
						(Math.PI * 2)
				);

				if (angleDiff < Math.PI / 4) {
					(elem as HTMLElement).style.opacity = "1";
				} else {
					(elem as HTMLElement).style.opacity = "0.89";
				}
			}

			requestAnimationFrame(drawRadar);
		};

		drawRadar();

		return () => {
			window.removeEventListener("resize", resize);
		};
	}, [radarSpeed]);

	return (
		<main className="grid-background h-[calc(100dvh-50px)] bg-transparent pt-10 relative w-full  ">
			<canvas
				ref={canvasRef}
				className="absolute top-0 left-0 w-full h-full"
			/>

			<div
				ref={contentRef}
				className="w-[98%] mx-auto sm:w-[96%] lg:w-[92%] xl:w-[90%] 2xl:w-[86%] relative"
			>
				<div className="flex flex-col items-center justify-center gap-2 pt-20  xl:px-20 md:px-10 px-2">
					<h2 className="text-center w-full max-w-[850px] font-extrabold text-[32px] md:text-4xl xl:text-[40px]">
						Seamless stablecoin deposits and payments for your fintech app
					</h2>
					<p className="text-center w-full max-w-[703px] mx-auto text-base sm:text-lg lg:text-xl font-normal text-[#858B8A] dark:text-white dark:text-opacity-50 ">
						Empower your customers with secure, non-custodial stablecoin
						deposits and payments using our easy-to-integrate wallet
						infrastructure.
					</p>

					<div className=" flex flex-col gap-3 md:gap-5 md:flex-row md:items-center md:justify-center mt-10 w-full">
						<Button className="bg-[#70FF00] hover:bg-[#A3FF50]/90 text-[#191A1A] rounded-md w-full md:w-fit h-12">
							Sign up now!
						</Button>
						<Button className="rounded-md bg-transparent hover:bg-transparent text-[#191A1A] border border-[#CFD2D2] dark:border-white dark:border-opacity-50 dark:text-white w-full  h-12 md:w-fit">
							Explore our API docs <ArrowUpRight />
						</Button>
					</div>
				</div>
				<div className="w-full h-[498px] md:h-[535px] lg:h-[635px] translate-y-32 relative pt-4 md:px-10  items-start justify-start">
					<div className="relative w-full h-full min-h-[499px] md:min-h-[534px] lg:min-h-[634px] hidden dark:block">
						<Image
							src={DashboardDark}
							layout="fill"
							alt="dashboard"
							className=" object-scale-down md:object-cover"
						/>
					</div>
					<div className="relative w-full h-full min-h-[499px] md:min-h-[534px] lg:min-h-[634px] block dark:hidden">
						<Image
							src={DashboardLight}
							layout="fill"
							alt="dashboard"
							className=" object-scale-down md:object-cover"
						/>
					</div>
				</div>
			</div>
		</main>
	);
}
