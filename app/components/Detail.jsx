import React from 'react';

function Detail({ handleShowDetail, activeItem }) {
	return (
		<section className="w-full h-[100vh]  flex place-content-center place-items-center bg-[#080707da] ">
			<div className="h-[70vh] w-[70vw] bg-white relative ">
				<button
					className="absolute right-0 top-0 text-black py-2 px-4 text-3xl font-semibold border-b-2 border-l-2 border-slate-800"
					onClick={handleShowDetail}
				>
					x
				</button>
				{activeItem ? (
					<div className="flex place-items-center gap-6 w-full h-full">
						<img
							src={`http://localhost:5000/Images/${activeItem.image}`}
							alt=""
							className="w-[50%] h-[100%]"
						/>
						<div className="grid ">
							<h1 className="text-[#153448] text-4xl font-semibold tracking-wider font-serif mb-6">
								{activeItem.name}
							</h1>
							<h2 className="text-[#322C2B] text-xl tracking-wider mb-6">
								{activeItem.description}
							</h2>
							<div className="grid grid-cols-2 text-[#322C2B]">
								<h1 className="flex gap-2  text-xl tracking-wider mb-1">
									<span className="text-slate-800  text-xl tracking-wider mb-1 font-serif font-semibold">
										Rooms:
									</span>
									{activeItem.rooms}
								</h1>
								<h1 className="flex gap-2  text-xl tracking-wider mb-1">
									<span className="text-slate-800  text-xl tracking-wider mb-1 font-serif font-semibold">
										Area:
									</span>
									{activeItem.area}
								</h1>
								<h1 className="flex gap-2  text-xl tracking-wider mb-1">
									<span className="text-slate-800  text-xl tracking-wider mb-1 font-serif font-semibold">
										Cost:
									</span>
									{activeItem.cost}
								</h1>
								<h1 className="flex gap-2  text-xl tracking-wider mb-1">
									<span className="text-slate-800  text-xl tracking-wider mb-1 font-serif font-semibold">
										Year built:
									</span>
									{activeItem.year}
								</h1>
								<h1 className="flex gap-2  text-xl tracking-wider mb-1">
									<span className="text-slate-800  text-xl tracking-wider mb-1 font-serif font-semibold">
										Type:
									</span>
									{activeItem.type}
								</h1>
								<h1 className="flex gap-2  text-xl tracking-wider mb-1">
									<span className="text-slate-800  text-xl tracking-wider mb-1 font-serif font-semibold">
										Location:
									</span>
									{activeItem.location}
								</h1>
							</div>
						</div>
					</div>
				) : null}
			</div>
		</section>
	);
}

export default Detail;
