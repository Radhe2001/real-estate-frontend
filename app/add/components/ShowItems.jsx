'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ShowItems() {
	const [itemData, setItemData] = useState([]);
	const [change, setChange] = useState(false);
	useEffect(() => {
		axios
			.post('http://localhost:5000/add/all')
			.then((data) => setItemData(data.data.data))
			.catch((err) => console.log(err));
	}, [change]);
	function deleteItem(item) {
		axios
			.delete(`http://localhost:5000/add/delete/${item._id}`)
			.then((data) => {
				if (data.status === 200) {
					alert('deleted successfully');
					setChange(!change);
				} else alert('failed to delete item');
			})
			.catch((err) => console.log(err));
	}
	return (
		<section className="w-full h-[80vh]  flex place-content-center place-items-center  ">
			<div className="h-full w-[70vw] bg-white relative overflow-y-scroll">
				{itemData || itemData.length === 0 ? (
					<div className="">
						<div className="flex text-3xl text-slate-800 font-semibold tracking-wider font-serif px-[2vw] mt-[2vw] border-b-4 border-slate-800 pb-4">
							<h3 className="w-[16vw]">Name</h3>
							<h3 className="w-[10vw]">Location</h3>
							<h3 className="w-[8vw]">Rooms</h3>
							<h3 className="w-[10vw]">Area(sqft)</h3>
							<h3 className="w-[8vw]">Type</h3>
						</div>
						{itemData.map((item, index) => {
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

export default ShowItems;
