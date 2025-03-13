import { useState } from "react";
import { ChromePicker } from "react-color";

function App() {
	const [name, setName] = useState("John Doe");
	const [size, setSize] = useState(100);
	const [length, setLength] = useState(2);
	const [background, setBackground] = useState("#4A90E2");
	const [color, setColor] = useState("#FFFFFF");

	const [showBgPicker, setShowBgPicker] = useState(false);
	const [showColorPicker, setShowColorPicker] = useState(false);

	const queryParams = new URLSearchParams({
		name: encodeURIComponent(name),
		size: size.toString(),
		length: length.toString(),
		background: background.replace("#", ""),
		color: color.replace("#", ""),
	}).toString();

	const avatarUrl = `https://ui-avatars.com/api/?${queryParams}`;

	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-4">
			<h1 className="text-2xl font-bold mb-6">UI Avatars Generator</h1>
			<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
				<div className="flex flex-col items-center mb-4">
					<img
						src={avatarUrl}
						alt="Generated Avatar"
						className="rounded-full border border-gray-300"
					/>
					<p className="text-sm text-gray-500 mt-2">
						Avatar generated using{" "}
						<a
							href="https://ui-avatars.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 hover:underline"
						>
							ui-avatars.com
						</a>
					</p>
				</div>
				<div className="space-y-4">
					<div>
						<label className="block font-medium text-gray-700">Name</label>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full p-2 border rounded"
						/>
					</div>
					<div>
						<label className="block font-medium text-gray-700">Size (px)</label>
						<input
							type="number"
							value={size}
							onChange={(e) => setSize(Number(e.target.value))}
							className="w-full p-2 border rounded"
						/>
					</div>
					<div>
						<label className="block font-medium text-gray-700">
							Initials Length
						</label>
						<input
							type="number"
							value={length}
							onChange={(e) => setLength(Number(e.target.value))}
							className="w-full p-2 border rounded"
						/>
					</div>
					{/* Background Color Picker */}
					<div>
						<label className="block font-medium text-gray-700">
							Background Color
						</label>
						<div className="flex items-center">
							<div
								className="w-10 h-10 border rounded cursor-pointer"
								style={{ backgroundColor: background }}
								onClick={() => setShowBgPicker(!showBgPicker)}
							></div>
							{showBgPicker && (
								<div className="absolute z-10 mt-2">
									<ChromePicker
										color={background}
										onChange={(color) => setBackground(color.hex)}
									/>
								</div>
							)}
						</div>
					</div>
					{/* Text Color Picker */}
					<div>
						<label className="block font-medium text-gray-700">
							Text Color
						</label>
						<div className="flex items-center">
							<div
								className="w-10 h-10 border rounded cursor-pointer"
								style={{ backgroundColor: color }}
								onClick={() => setShowColorPicker(!showColorPicker)}
							></div>
							{showColorPicker && (
								<div className="absolute z-10 mt-2">
									<ChromePicker
										color={color}
										onChange={(color) => setColor(color.hex)}
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
