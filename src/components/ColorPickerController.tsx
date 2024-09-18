import React, { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

interface ColorControllerProps {
	hideController: boolean;
	selectedColor: (color: string) => void;
}

const ColorPickerController: React.FC<ColorControllerProps> = ({
	hideController = false,
	selectedColor,
}) => {
	const [color, setColor] = useState<string>("rgba(255,255,255,1)");

	const handleColorChange = (newColor: string) => {
		setColor(newColor);
		selectedColor(newColor);
	};
	return (
		<figure>
			<ColorPicker
				value={color}
				onChange={(e) => handleColorChange(e)}
				hideControls={hideController}
				hideEyeDrop
				hideAdvancedSliders
				hideColorGuide
				hideInputType
			/>
		</figure>
	);
};

export default ColorPickerController;
