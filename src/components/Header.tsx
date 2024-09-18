import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const Header = () => {
	return (
		<section className="py-4 px-6 shadow-sm border flex justify-between items-center">
			<figure className="flex gap-3 items-center">
				<img src="/logo.svg" alt="logo icon" className="h-10 w-10" />
				<p>LogoAura</p>
			</figure>
			<Button className="flex gap-2 items-center bg-blue-700">
				<Download className="h-4 w-4" />
				Download
			</Button>
		</section>
	);
};

export default Header;
