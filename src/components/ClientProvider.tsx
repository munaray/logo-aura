"use client";

import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import { useState } from "react";
import { StorageProps } from "@/context/UpdateStorageContext";

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
	const [updateStorage, setUpdateStorage] = useState<StorageProps>({
		iconSize: 280,
		iconRotate: 0,
		iconColor: "#fff",
		icon: "smile",
		bgColor: "#000",
		bgPadding: 0,
		bgRounded: 40,
	});

	return (
		<UpdateStorageContext.Provider
			value={{ updateStorage, setUpdateStorage }}>
			{children}
		</UpdateStorageContext.Provider>
	);
};
