'use client';
import React, { useEffect, useState } from 'react';

function Favourite({ handleShow, showFavourite }) {
	const [favourite, setFavourite] = useState([]);
	const [change, setChange] = useState(false);
	useEffect(() => {
		let fav = localStorage.getItem('favourite');
		fav = JSON.parse(fav);
		setFavourite(fav);
	}, [change, showFavourite]);

	function deleteItem(item) {
		setChange(!change);
		let arr = favourite.filter(
			(element, index) => element._id !== item._id
		);
		localStorage.setItem('favourite', JSON.stringify(arr));
	}
	return (
		<section className="w-full h-[100vh]  flex place-content-center place-items-center bg-[#080707da] ">
			<div className="h-[70vh] w-[70vw] bg-white relative overflow-y-scroll">
				<button
					className="absolute right-0 top-0 text-black py-2 px-4 text-3xl font-semibold border-b-2 border-l-2 border-slate-800"
					onClick={handleShow}
				>
					x
				</button>
				{favourite ? (
					<div className="">
						<div className="flex text-3xl text-slate-800 font-semibold tracking-wider font-serif px-[2vw] mt-[2vw] border-b-4 border-slate-800 pb-4">
							<h3 className="w-[16vw]">Name</h3>
							<h3 className="w-[10vw]">Location</h3>
							<h3 className="w-[8vw]">Rooms</h3>
							<h3 className="w-[10vw]">Area(sqft)</h3>
							<h3 className="w-[8vw]">Type</h3>
						</div>
						{favourite.map((item, index) => {
							return (
								<div
									className="flex text-xl text-black tracking-wider font-serif px-[2vw] py-2  border-b-2 border-cyan-500 "
									key={index}
								>
									<h3 className="w-[16vw]">{item.name}</h3>
									<h3 className="w-[10vw]">
										{item.location}
									</h3>
									<h3 className="w-[8vw]">{item.rooms}</h3>
									<h3 className="w-[10vw]">{item.area}</h3>
									<h3 className="w-[8vw]">{item.type}</h3>
									<button
										className="bg-blue-800 text-white py-1 px-3 rounded-lg text-xl tracking-wider font-serif"
										onClick={() => deleteItem(item)}
									>
										Delete
									</button>
								</div>
							);
						})}
					</div>
				) : (
					<div className="flex place-content-center place-items-center w-full h-full text-6xl font-semibold text-slate-800 tracking-wider font-serif">
						Nothing is added here yet
					</div>
				)}
			</div>
		</section>
	);
}

export default Favourite;
