"use client";

import { Image, PencilRuler, Shield } from "lucide-react";
import React, { useState } from "react";

interface SideNavProps {
	selectedIndex: (index: number) => void;
}

const SideNav: React.FC<SideNavProps> = ({ selectedIndex }) => {
	const MENU_LIST = [
		{
			id: 1,
			name: "Icon",
			icon: PencilRuler,
		},
		{
			id: 2,
			name: "Background",
			icon: Image,
		},
		{
			id: 3,
			name: "Upgrade",
			icon: Shield,
		},
	] as const;

	const [activeIndex, setActiveIndex] = useState<number>(0);

	const handleClick = (index: number) => {
		setActiveIndex(index);
		selectedIndex(index);
	};
	return (
		<section className="border shadow-sm h-screen">
			<div>
				{MENU_LIST.map((menu, index) => (
					<h2
						key={index}
						onClick={() => handleClick(index)}
						className={`p-3 text-lg px-7 text-gray-500 my-2 cursor-pointer hover:bg-blue-700 hover:text-white flex items-center gap-2 ${
							activeIndex === index
								? "bg-blue-700 text-white"
								: ""
						}`}>
						<menu.icon className="h-5 w-5" />
						{menu.name}
					</h2>
				))}
			</div>
		</section>
	);
};

export default SideNav;
