import React, { FC } from "react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const GroupedNavItem: FC<{
	link: {
		name: string;
		path?: string;
		subLinks?: { name: string; path: string }[];
	};
}> = ({ link }) => {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="bg-transparent dark:bg-transparent border-0 outline-none hover:bg-transparent">
						{link.name}
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="flex flex-col w-[123px] py-1 gap-1">
							{link.subLinks?.map((item, idx) => (
								<li
									key={idx}
									className="h-8 cursor-pointer  flex items-center justify-center text-sm font-medium"
								>
									<NavigationMenuLink>{item.name}</NavigationMenuLink>
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default GroupedNavItem;
