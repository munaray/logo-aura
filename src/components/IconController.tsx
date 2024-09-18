import { Smile } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";

interface UpdatedValueProps {
	iconSize: number;
	iconRotate: number;
	iconColor: string;
	icon: string;
}

const IconController = () => {
	const [size, setSize] = useState<number>(280);
	const [rotate, setRotate] = useState<number>(0);
	const [color, setColor] = useState<string>("rgba(255,255,255,1)");

	let storageValue = null;
	try {
		const item = localStorage.getItem("value");
		storageValue = item ? JSON.parse(item) : null;
	} catch (error) {
		console.error("Failed to parse localStorage value", error);
	}

	useEffect(() => {
		const updatedValue: UpdatedValueProps = {
			...storageValue,
			iconSize: size,
			iconRotate: rotate,
			iconColor: color,
			icon: "Smile",
		};

		localStorage.setItem("value", JSON.stringify(updatedValue));
	}, [size, rotate, color]);

	return (
		<figure>
			<div>
				<label>Icon</label>
				<Smile className="cursor-pointer my-2 p-3 bg-gray-200 rounded-md w-12 h-12 flex items-center justify-center" />
			</div>
			<figure className="py-2">
				<label className="p-2 flex justify-between items-center">
					Size <span>{size} px</span>
				</label>
				<Slider
					defaultValue={[280]}
					max={512}
					step={1}
					onValueChange={(e) => setSize(e[0])}
				/>
			</figure>

			<figure className="py-2">
				<label className="p-2 flex justify-between items-center">
					Rotate <span>{rotate} deg</span>
				</label>
				<Slider
					defaultValue={[0]}
					max={360}
					step={1}
					onValueChange={(e) => setRotate(e[0])}
				/>
			</figure>

			<figure className="py-2">
				<label className="p-2 flex justify-between items-center">
					Icon Color
				</label>
				<ColorPickerController
					hideController={true}
					selectedColor={(color) => setColor(color)}
				/>
			</figure>
		</figure>
	);
};

export default IconController;
