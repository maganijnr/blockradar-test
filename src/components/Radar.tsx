// import React from "react";

// const Radar = () => {
// 	return (
// 		<div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] items-center justify-center w-[70%] h-[70%] ">
// 			<div className="w-[70%] h-[70%] bg-transparent overflow-hidden">
// 				<div className="radarBeam"></div>
// 			</div>
// 		</div>
// 	);
// };

// export default Radar;

// components/Radar.tsx
import React from "react";
import { motion } from "framer-motion";

const Radar: React.FC = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<motion.div
				style={{
					width: 200,
					height: 200,
					borderRadius: "50%",
					border: "2px solid #00FF00",
					position: "relative",
				}}
				animate={{
					rotate: 360,
				}}
				transition={{
					repeat: Infinity,
					ease: "linear",
					duration: 5,
				}}
			>
				<motion.div
					style={{
						width: "50%",
						height: "100%",
						background: "rgba(0, 255, 0, 0.3)",
						borderTopLeftRadius: "100%",
						borderBottomLeftRadius: "100%",
						position: "absolute",
						top: 0,
						left: "50%",
						transformOrigin: "left center",
					}}
					animate={{
						rotate: 360,
					}}
					transition={{
						repeat: Infinity,
						ease: "linear",
						duration: 2,
					}}
				/>
			</motion.div>
		</div>
	);
};

export default Radar;
