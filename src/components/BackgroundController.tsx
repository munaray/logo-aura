import React, { useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";

interface BgControllerProps {
	bgRounded: number;
	bgPadding: number;
	bgColor: string;
}

const BackgroundController = () => {
	const [rounded, setRounded] = useState<number>(0);
	const [padding, setPadding] = useState<number>(40);
	const [color, setColor] = useState<string>("#000");

	let storageValue = null;

	try {
		const item = localStorage.getItem("value");
		storageValue = item ? JSON.parse(item) : null;
	} catch (error) {
		console.error("Failed to parse local storage value", error);
	}

	useEffect(() => {
		const updatedValue: BgControllerProps = {
			...storageValue,
			bgColor: color,
			bgPadding: padding,
			bgRounded: rounded,
		};

		localStorage.setItem("value", JSON.stringify(updatedValue));
	}, [rounded, padding, color]);

	return (
		<div>
			<figure className="py-2">
				<label className="p-2 flex justify-between items-center">
					Rounded <span>{rounded} px</span>
				</label>
				<Slider
					defaultValue={[0]}
					max={512}
					step={1}
					onValueChange={(e) => setRounded(e[0])}
				/>
			</figure>

			<figure className="py-2">
				<label className="p-2 flex justify-between items-center">
					Padding <span>{padding} px</span>
				</label>
				<Slider
					defaultValue={[40]}
					max={100}
					step={1}
					onValueChange={(e) => setPadding(e[0])}
				/>
			</figure>

			<figure className="py-2">
				<label className="p-2 flex justify-between items-center">
					Background Color
				</label>
				<ColorPickerController
					hideController={false}
					selectedColor={(color) => setColor(color)}
				/>
			</figure>
		</div>
	);
};

export default BackgroundController;
