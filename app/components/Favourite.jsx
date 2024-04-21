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
			<div className="h-[70vh] lg:w-[70vw]  md:w-[80vw]   sm:w-[90vw] bg-white relative overflow-y-scroll">
				<button
					className="absolute right-0 top-0 text-black py-2 px-4 text-3xl font-semibold border-b-2 border-l-2 border-slate-800"
					onClick={handleShow}
				>
					x
				</button>
				{favourite ? (
					<div className="">
						<div className="flex xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-slate-800 font-semibold tracking-wider font-serif px-[2vw] mt-[2vw] border-b-4 border-slate-800 pb-4">
							<h3 className="lg:w-[16vw] md:w-[17vw] sm:w-[18vw]">
								Name
							</h3>
							<h3 className="lg:w-[12vw] md:w-[13vw] sm:w-[14vw]">
								Location
							</h3>
							<h3 className="lg:w-[10vw] md:w-[11vw] sm:w-[12vw]">
								Rooms
							</h3>
							<h3 className="lg:w-[13vw] md:w-[14vw] sm:w-[16vw]">
								Area(sqft)
							</h3>
							<h3 className="lg:w-[10vw] md:w-[11vw] sm:w-[12vw]">
								Type
							</h3>
						</div>
						{favourite.map((item, index) => {
							return (
								<div
									className="flex lg:text-xl md:text-lg sm:text-md text-black tracking-wider font-serif px-[2vw] py-2  border-b-2 border-cyan-500 "
									key={index}
								>
									<h3 className="lg:w-[16vw] md:w-[17vw] sm:w-[18vw]">
										{item.name}
									</h3>
									<h3 className="lg:w-[12vw] md:w-[13vw] sm:w-[14vw]">
										{item.location}
									</h3>
									<h3 className="lg:w-[10vw] md:w-[11vw] sm:w-[12vw]">
										{item.rooms}
									</h3>
									<h3 className="lg:w-[13vw] md:w-[14vw] sm:w-[16vw]">
										{item.area}
									</h3>
									<h3 className="lg:w-[10vw] md:w-[11vw] sm:w-[12vw]">
										{item.type}
									</h3>
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
