import { LucideProps } from "lucide-react";
import dynamic from "next/dynamic";
import dynamicIconImports from "lucide-react/dynamicIconImports";

import {
	StorageProps,
	UpdateStorageContext,
} from "@/context/UpdateStorageContext";

import React, { useContext, useEffect, useState } from "react";

interface IconProps extends LucideProps {
	name: keyof typeof dynamicIconImports;
}

const LogoPreview = () => {
	const [storageValue, setStorageValue] = useState<StorageProps | null>(null);
	const context = useContext(UpdateStorageContext);

	if (!context) {
		throw new Error(
			"UpdateStorageContext must be used within ClientProvider"
		);
	}

	const { updateStorage, setUpdateStorage } = context;

	useEffect(() => {
		const storageData = JSON.parse(localStorage.getItem("value") as string);
		console.log(storageData);
		setStorageValue(storageData);
	}, [updateStorage]);

	if (!storageValue) {
		return <div>Loading...</div>;
	}

	const Icon = ({ name, ...props }: IconProps) => {
		const LucideIcon = dynamic(dynamicIconImports[name]);
		if (!LucideIcon) {
			throw new Error(`Icon component for ${name} not found.`);
		}
		return <LucideIcon {...props} />;
	};

	return (
		<section className="flex items-center justify-center h-screen">
			<div className="h-[400px] w-[400px] bg-gray-200 outline-dotted outline-gray-300">
				<div
					className="h-full w-full"
					style={{
						borderRadius: storageValue.bgRounded,
						background: storageValue.bgColor,
					}}>
					<Icon
						name={storageValue.icon}
						color={storageValue.iconColor}
						size={storageValue.iconSize}
					/>
				</div>
			</div>

			<div></div>
		</section>
	);
};

export default LogoPreview;
