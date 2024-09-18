import { Smile } from "lucide-react";
import React, { useState } from "react";
import { Slider } from "./ui/slider";

const IconController = () => {
	const [size, setSize] = useState<number>(280);
	const [rotate, setRotate] = useState<number>(0);

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
		</figure>
	);
};

export default IconController;
