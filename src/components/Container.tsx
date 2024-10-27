import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";

const Container: FC<{ children: ReactNode; className?: string }> = ({
	children,
	className,
}) => {
	return (
		<div
			className={cn(
				"w-[98%] mx-auto sm:w-[96%] lg:w-[92%] xl:w-[90%] 2xl:w-[86%]",
				className
			)}
		>
			{children}
		</div>
	);
};

export default Container;
