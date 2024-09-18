"use client";

import BackgroundController from "@/components/BackgroundController";
import Header from "@/components/Header";
import IconController from "@/components/IconController";
import SideNav from "@/components/SideNav";
import { useState } from "react";

export default function Home() {
	const [selectedIndex, setSelectedIndex] = useState<number>(0);

	const handleSelectedIndex = (value: number) => {
		setSelectedIndex(value);
	};
	return (
		<>
			<Header />
			<figure className="w-64 fixed">
				<SideNav selectedIndex={handleSelectedIndex} />
			</figure>
			<figure className="ml-64 grid grid-cols-1 md:grid-cols-6 fixed">
				<div className="md:col-span-2 border h-screen shadow-sm p-5 overflow-auto">
					{selectedIndex === 0 ? (
						<IconController />
					) : (
						<BackgroundController />
					)}
				</div>
				<div className="md:col-span-3 bg-red-100">Icon Preview</div>
				<div className="md:col-span-1 bg-blue-100">Ads Banner</div>
			</figure>
		</>
	);
}
