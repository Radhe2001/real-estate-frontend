'use client';
import React, { useState } from 'react';
import axios from 'axios';
import ShowItems from './components/ShowItems';

function page() {
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [year, setYear] = useState('');
	const [rooms, setRooms] = useState('');
	const [cost, setCost] = useState('');
	const [area, setArea] = useState('');
	const [type, setType] = useState('rental');
	const [description, setDescription] = useState('');
	const [file, setFile] = useState();
	const [active, setActive] = useState(1);
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('name', name);
		formData.append('location', location);
		formData.append('year', year);
		formData.append('rooms', rooms);
		formData.append('cost', cost);
		formData.append('area', area);
		formData.append('type', type);
		formData.append('description', description);
		formData.append('file', file);
		axios
			.post('http://localhost:5000/add', formData)
			.then((data) => alert('added successfully'))
			.catch((err) => console.log(err));
	};
	return (
		<section className="w-[100vw] h-[100vh] flex place-content-center place-items-center">
			<div className="">
				<div className="flex gap-2">
					<button
						className={`${
							active === 1 ? 'bg-slate-800' : 'bg-blue-800'
						} text-white text-3xl font-serif font-semibold tracking-wider px-4 py-1  rounded-t-2xl`}
						onClick={() => setActive(1)}
					>
						Add Item
					</button>
					<button
						className={`${
							active === 2 ? 'bg-slate-800' : 'bg-blue-800'
						} text-white text-3xl font-serif font-semibold tracking-wider px-4 py-1  rounded-t-2xl`}
						onClick={() => setActive(2)}
					>
						Show Item
					</button>
				</div>
				{active === 1 ? (
					<fieldset className="border-4 border-black px-10  py-10 rounded-3xl">
						<legend className="text-2xl font-semibold font-serif tracking-wider">
							Add Property
						</legend>
						<form className="" onSubmit={handleSubmit}>
							<div className="flex gap-[1vw] mb-4">
								<div className="grid">
									{' '}
									<label
										htmlFor="name"
										className="text-xl font-serif font-semibold tracking-wider mb-2"
									>
										Name :
									</label>
									<input
										type="text"
										name="name"
										id="name"
										onChange={(e) =>
											setName(e.target.value)
										}
										className="border-2 border-slate-700 rounded-xl text-lg py-1 px-3 w-[15vw]"
									/>
								</div>
								<div className="grid">
									{' '}
									<label
										htmlFor="location"
										className="text-xl font-serif font-semibold tracking-wider mb-2"
									>
										Location :
									</label>
									<input
										type="text"
										name="location"
										id="location"
										onChange={(e) =>
											setLocation(e.target.value)
										}
										className="border-2 border-slate-700 rounded-xl text-lg py-1 px-3 w-[15vw]"
									/>
								</div>
								<div className="grid">
									{' '}
									<label
										htmlFor="year"
										className="text-xl font-serif font-semibold tracking-wider mb-2"
									>
										Built in Year :
									</label>
									<input
										type="number"
										name="year"
										id="year"
										onChange={(e) =>
											setYear(e.target.value)
										}
										className="border-2 border-slate-700 rounded-xl text-lg py-1 px-3 w-[13vw]"
									/>
								</div>
							</div>
							<div className="flex gap-[1vw] mb-4">
								<div className="grid">
									{' '}
									<label
										htmlFor="rooms"
										className="text-xl font-serif font-semibold tracking-wider mb-2"
									>
										Rooms :
									</label>
									<input
										type="number"
										name="rooms"
										id="rooms"
										onChange={(e) =>
											setRooms(e.target.value)
										}
										className="border-2 border-slate-700 rounded-xl text-lg py-1 px-3 w-[15vw]"
									/>
								</div>
								<div className="grid">
									{' '}
									<label
										htmlFor="cost"
										className="text-xl font-serif font-semibold tracking-wider mb-2"
									>
										Cost(INR) :
									</label>
									<input
										type="number"
										name="cost"
										id="cost"
										onChange={(e) =>
											setCost(e.target.value)
										}
										className="border-2 border-slate-700 rounded-xl text-lg py-1 px-3 w-[15vw]"
									/>
								</div>
								<div className="grid">
									{' '}
									<label
										htmlFor="area"
										className="text-xl font-serif font-semibold tracking-wider mb-2"
									>
										Area(sq ft) :
									</label>
									<input
										type="number"
										name="area"
										id="area"
										onChange={(e) =>
											setArea(e.target.value)
										}
										className="border-2 border-slate-700 rounded-xl text-lg py-1 px-3 w-[13vw]"
									/>
								</div>
							</div>
							<div className="flex gap-[1vw] mb-4">
								<div className="grid">
									{' '}
									<label
										htmlFor="type"
										className="text-xl font-serif font-semibold tracking-wider mb-2"
									>
										Type :
									</label>
									<select
										name="type"
										id="type"
										onChange={(e) =>
											setType(e.target.value)
										}
										className="border-2 border-slate-700 rounded-xl text-lg py-1 px-3 w-[22vw]"
									>
										<option value="rental" className="">
											For Rent
										</option>
										<option value="sell" className="">
											For sell
										</option>
									</select>
								</div>
								<div className="grid">
									{' '}
									<label
										htmlFor="file"
										className="text-xl font-serif font-semibold tracking-wider mb-2"
									>
										Upload Picture :
									</label>
									<input
										type="file"
										onChange={(e) =>
											setFile(e.target.files[0])
										}
										className="border-2 border-slate-700 rounded-xl text-lg py-1 px-3 w-[22vw]"
										name="file"
										id="file"
									/>
								</div>
							</div>
							<div className="grid mb-4">
								<label
									htmlFor="file"
									className="text-xl font-serif font-semibold tracking-wider mb-2"
								>
									Description :
								</label>
								<textarea
									name="description"
									id="description"
									onChange={(e) =>
										setDescription(e.target.value)
									}
									className="border-2 border-slate-700 rounded-xl text-lg py-1 px-3 w-[45vw] h-[8vw]"
								></textarea>
							</div>
							<div className="flex place-content-center w-full">
								<button className="text-white  bg-blue-900 px-6 py-2 rounded-xl text-xl font-semibold tracking-widest font-serif">
									Add
								</button>
							</div>
						</form>
					</fieldset>
				) : (
					<ShowItems />
				)}
			</div>
		</section>
	);
}

export default page;
