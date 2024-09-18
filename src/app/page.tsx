"use client";

import Header from "@/components/Header";
import SideNav from "@/components/SideNav";

export default function Home() {
	const handleSelectedIndex = (value: number) => {
		console.log("Selected Index", value);
	};
	return (
		<>
			<Header />
			<figure className="w-64 fixed">
				<SideNav selectedIndex={handleSelectedIndex} />
			</figure>
			<figure className="ml-64 grid grid-cols-1 md:grid-cols-6">
				<div className="md:col-span-2 bg-green-200">Control Panel</div>
				<div className="md:col-span-3 bg-red-100">Icon Preview</div>
				<div className="md:col-span-1 bg-blue-100">Ads Banner</div>
			</figure>
		</>
	);
}
