import { createContext, Dispatch, SetStateAction } from "react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

export interface StorageProps {
	iconSize: number;
	iconRotate: number;
	iconColor: string;
	icon: keyof typeof dynamicIconImports;
	bgRounded: number;
	bgPadding: number;
	bgColor: string;
}

export interface UpdateStorageContextProps {
	updateStorage: StorageProps;
	setUpdateStorage: Dispatch<SetStateAction<StorageProps>>;
}

export const UpdateStorageContext =
	createContext<UpdateStorageContextProps | null>(null);
