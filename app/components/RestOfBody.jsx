'use client';
import React, { useEffect, useState } from 'react';
import Detail from './Detail';
import axios from 'axios';

function RestOfBody() {
	const [searchInput, setSearchInput] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [website, setWebsite] = useState('');
	const [subject, setSubject] = useState('');
	const [detailActive, setDetailActive] = useState(false);
	const [showDetail, setShowDetail] = useState(false);
	const [rentalData, setRentalData] = useState([]);
	const [sellData, setSellData] = useState([]);
	const [searchData, setSearchData] = useState([]);
	const [activeItem, setActiveItem] = useState();

	useEffect(() => {
		axios
			.get('http://localhost:5000/add/rental')
			.then((data) => setRentalData(data.data.data))
			.catch((err) => console.log(err));
		axios
			.get('http://localhost:5000/add/sell')
			.then((data) => setSellData(data.data.data))
			.catch((err) => console.log(err));
	}, []);

	const handleSearch = (e) => {
		e.preventDefault();
		axios
			.get(`http://localhost:5000/search/${searchInput}`)
			.then((data) => setSearchData(data.data.data))
			.catch((err) => console.log(err));
	};

	const addToFavourite = (item) => {
		let fav = localStorage.getItem('favourite');
		fav = JSON.parse(fav);
		if (fav === null) {
			let arr = [item];
			localStorage.setItem('favourite', JSON.stringify(arr));
		} else {
			let arr = fav.filter((ele, index) => ele._id !== item._id);
			arr.push(item);
			localStorage.setItem('favourite', JSON.stringify(arr));
		}
		alert('added to favourites list');
	};

	const handleShowDetail = () => setShowDetail(!showDetail);

	const handleSendMessage = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:5000/contact', {
				name: name,
				email: email,
				subject: subject,
				website: website,
				message: message,
			})
			.then((data) => {
				if (data.status === 200) alert('we will connect you soon');
				else alert('failed to send the contact request');
			})
			.catch((err) => alert('some error occurred'));
	};

	return (
		<main className="">
			<div
				className={`fixed top-0 w-full h-[100vh] ${
					showDetail ? '' : 'hidden'
				}`}
			>
				<Detail
					handleShowDetail={handleShowDetail}
					activeItem={activeItem}
				/>
			</div>
			<div id="home" className="mt-[16vw] mb-[14vw] w-full">
				<center>
					<h3 className="text-3xl font-serif tracking-widest font-semibold mb-6 text-cyan-200">
						THE BEST WAY TO
					</h3>
				</center>
				<center>
					<h2 className="text-6xl font-mono tracking-widest font-bold italic text-cyan-200">
						Find Your Perfect Home
					</h2>
				</center>

				<div className="flex place-content-center place-items-center mt-14">
					<div className="flex place-content-center place-items-center w-[75vw] gap-[2vw] py-8 bg-[#343744d2]">
						<input
							type="text"
							className="w-[30vw] h-16 text-2xl py-2 px-4 text-slate-900 placeholder:font-thin outline-none"
							placeholder="Search here"
							onChange={(e) => setSearchInput(e.target.value)}
						/>
						<button
							className="flex  place-content-center place-items-center gap-2 bg-[#234DD4] hover:bg-[#43C370] px-[1.5vw] py-[0.7vw]"
							onClick={handleSearch}
						>
							<img
								src="/images/search.png"
								alt=""
								className="h-8 w-8"
							/>
							<h5 className="text-2xl font-semibold tracking-widest font-serif ">
								Search
							</h5>
						</button>
					</div>
				</div>
			</div>
			{searchData.length !== 0 ? (
				<div id="search" className="w-full bg-white">
					<div className="flex place-content-center">
						<h1 className="text-5xl font-bold text-slate-800 font-serif italic tracking-wider w-[80vw] pt-24 pb-16">
							Search Results
						</h1>
					</div>
					<div className="flex place-content-center">
						<div className="w-[90vw] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[3vw] border-b-2 pb-20 border-slate-500  ">
							{searchData.map((item, index) => {
								return (
									<div
										className="w-full border-2 border-slate-500 hover:shadow-2xl hover:shadow-[#0e0e0e]"
										key={index}
									>
										<img
											src={`http://localhost:5000/Images/${item.image}`}
											alt=""
											className=""
										/>
										<h3 className="text-2xl font-semibold text-slate-900 font-serif italic tracking-wider mt-6 mb-4 px-4">
											{item.name}
										</h3>
										<div className="grid grid-cols-2 mx-4 gap-1 pb-8 border-b-2 border-slate-500">
											<div className="flex place-items-center">
												<h4 className="text-xl font-semibold text-slate-900 font-serif italic tracking-wider">
													Rooms :{' '}
												</h4>
												<h4 className="text-xl text-slate-800 font-serif tracking-wider ml-2">
													{item.rooms}
												</h4>
											</div>
											<div className="flex place-items-center">
												<h4 className="text-xl font-semibold text-slate-900 font-serif italic tracking-wider">
													Area :{' '}
												</h4>
												<h4 className="text-xl text-slate-800 font-serif tracking-wider ml-2">
													{item.area} sq ft{' '}
												</h4>
											</div>
											<div className="flex place-items-center">
												<h4 className="text-xl font-semibold text-slate-900 font-serif italic tracking-wider">
													Cost :{' '}
												</h4>
												<h4 className="text-xl text-slate-800 font-serif tracking-wider ml-2">
													{item.cost} cr{' '}
												</h4>
											</div>
											<div className="flex place-items-center">
												<h4 className="text-xl font-semibold text-slate-900 font-serif italic tracking-wider">
													Built :{' '}
												</h4>
												<h4 className="text-xl text-slate-800 font-serif tracking-wider ml-2">
													{item.year}
												</h4>
											</div>
										</div>
										<div className="flex px-4 py-4">
											<button
												className="flex  place-content-center place-items-center gap-2 bg-[#234DD4] hover:bg-[#43C370] px-4 rounded-xl py-2"
												onClick={(e) => {
													addToFavourite(item);
												}}
											>
												<h5 className="text-xl font-semibold tracking-widest font-serif ">
													Add to Favourite
												</h5>
											</button>
											<button
												className="ml-auto"
												onClick={() => {
													(() =>
														setActiveItem(item))();
													handleShowDetail();
												}}
											>
												<img
													src="/images/eye.png"
													alt=""
												/>
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			) : null}
			<div id="property" className="w-full  bg-[#EDEDED]">
				<div className="flex place-content-center">
					<h1 className="text-5xl font-bold text-slate-800 font-serif italic tracking-wider w-[80vw] pt-24 pb-16">
						Properties for Sell
					</h1>
				</div>
				<div className="flex place-content-center">
					<div className="w-[90vw] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[3vw] border-b-2 pb-20 border-slate-500  ">
						{sellData.map((item, index) => {
							return (
								<div
									className="w-full border-2 border-slate-500 hover:shadow-2xl hover:shadow-[#0e0e0e]"
									key={index}
								>
									<img
										src={`http://localhost:5000/Images/${item.image}`}
										alt=""
										className=""
									/>
									<h3 className="text-2xl font-semibold text-slate-900 font-serif italic tracking-wider mt-6 mb-4 px-4">
										{item.name}
									</h3>
									<div className="grid grid-cols-2 mx-4 gap-1 pb-8 border-b-2 border-slate-500">
										<div className="flex place-items-center">
											<h4 className="text-xl font-semibold text-slate-900 font-serif italic tracking-wider">
												Rooms :{' '}
											</h4>
											<h4 className="text-xl text-slate-800 font-serif tracking-wider ml-2">
												{item.rooms}
											</h4>
										</div>
										<div className="flex place-items-center">
											<h4 className="text-xl font-semibold text-slate-900 font-serif italic tracking-wider">
												Area :{' '}
											</h4>
											<h4 className="text-xl text-slate-800 font-serif tracking-wider ml-2">
												{item.area} sq ft{' '}
											</h4>
										</div>
										<div className="flex place-items-center">
											<h4 className="text-xl font-semibold text-slate-900 font-serif italic tracking-wider">
												Cost :{' '}
											</h4>
											<h4 className="text-xl text-slate-800 font-serif tracking-wider ml-2">
												{item.cost} cr{' '}
											</h4>
										</div>
										<div className="flex place-items-center">
											<h4 className="text-xl font-semibold text-slate-900 font-serif italic tracking-wider">
												Built :{' '}
											</h4>
											<h4 className="text-xl text-slate-800 font-serif tracking-wider ml-2">
												{item.year}
											</h4>
										</div>
									</div>
									<div className="flex px-4 py-4">
										<button
											className="flex  place-content-center place-items-center gap-2 bg-[#234DD4] hover:bg-[#43C370] px-4 rounded-xl py-2"
											onClick={(e) => {
												addToFavourite(item);
											}}
										>
											<h5 className="text-xl font-semibold tracking-widest font-serif ">
												Add to Favourite
											</h5>
										</button>
										<button
											className="ml-auto"
											onClick={() => {
												(() => setActiveItem(item))();
												handleShowDetail();
											}}
										>
											<img src="/images/eye.png" alt="" />
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div id="rental" className="w-full  bg-white">
				<div className="flex place-content-center">
					<h1 className="text-5xl font-bold text-slate-800 font-serif italic tracking-wider w-[80vw] pt-24 pb-16">
						Properties for Rent
					</h1>
				</div>
				<div className="flex place-content-center">
					<div className="w-[90vw] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[3vw] border-b-2 pb-20 border-slate-500  ">
						{rentalData.map((item, index) => {
							return (
								<div
									className="w-full border-2 border-slate-500 hover:shadow-2xl hover:shadow-[#0e0e0e]"
									key={index}
								>
									<img
										src={`http://localhost:5000/Images/${item.image}`}
										alt=""
										className=""
									/>
									<h3 className="text-2xl font-semibold text-slate-900 font-serif italic tracking-wider mt-6 mb-4 px-4">
										{item.name}
									</h3>
									<div className="grid grid-cols-2 mx-4 gap-1 pb-8 border-b-2 border-slate-500">
										<div className="flex place-items-center">
											<h4 className="text-xl font-semibold text-slate-900 font-serif italic tracking-wider">
												Rooms :{' '}
											</h4>
											<h4 className="text-xl text-slate-800 font-serif tracking-wider ml-2">
												{item.rooms}
											</h4>
										</div>
										<div className="flex place-items-center">
											<h4 className="text-xl font-semibold text-slate-900 font-serif italic tracking-wider">
												Area :{' '}
											</h4>
											<h4 className="text-xl text-slate-800 font-serif tracking-wider ml-2">
												{item.area}
											</h4>
										</div>
										<div className="flex place-items-center">
											<h4 className="text-xl font-semibold text-slate-900 font-serif italic tracking-wider">
												Rent :{' '}
											</h4>
											<h4 className="text-xl text-slate-800 font-serif tracking-wider ml-2">
												&#8377;{item.cost}/mo{' '}
											</h4>
										</div>
										<div className="flex place-items-center">
											<h4 className="text-xl font-semibold text-slate-900 font-serif italic tracking-wider">
												Built :{' '}
											</h4>
											<h4 className="text-xl text-slate-800 font-serif tracking-wider ml-2">
												{item.year}
											</h4>
										</div>
									</div>
									<div className="flex px-4 py-4">
										<button
											className="flex  place-content-center place-items-center gap-2 bg-[#234DD4] hover:bg-[#43C370] px-4 rounded-xl py-2"
											onClick={(e) => {
												addToFavourite(item);
											}}
										>
											<h5 className="text-xl font-semibold tracking-widest font-serif ">
												Add to Favourite
											</h5>
										</button>
										<button
											className="ml-auto"
											onClick={() => {
												(() => setActiveItem(item))();
												handleShowDetail();
											}}
										>
											<img src="/images/eye.png" alt="" />
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div id="contact" className="w-full">
				<div
					className="w-full h-[110vh] bg-cover flex place-content-center place-items-center"
					style={{ backgroundImage: 'url(/images/background.jpg)' }}
				>
					<div className="">
						<center>
							<h1 className="text-white font-bold text-4xl font-serif tracking-wider">
								CONTACT WITH US
							</h1>
						</center>
						<center>
							<div className="w-20 my-16 h-1 bg-white" />
						</center>
						<div className="flex place-content-center">
							<form className="lg:w-[50vw] md:w-[60vw] sm:w-[75vw] mt-12">
								<div className="flex place-content-center gap-[4%]">
									<input
										type="text"
										className="w-[43%] bg-transparent border-[#666666] active:border-[#666666] border-2 px-5 py-2 placeholder:text-xl text-[#666666] placeholder:text-[#666666] text-xl "
										name="name"
										placeholder="Name*"
										onChange={(e) =>
											setName(e.target.value)
										}
									/>
									<input
										type="email"
										className="w-[43%] bg-transparent border-[#666666] active:border-[#666666] border-2 px-5 py-2 placeholder:text-xl text-[#666666] placeholder:text-[#666666] text-xl"
										name="email"
										placeholder="Email*"
										required
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>
								<div className="mt-6 flex place-content-center gap-[4%]">
									<input
										type="text"
										className="w-[43%] bg-transparent border-[#666666] active:border-[#666666] border-2 px-5 py-2 placeholder:text-xl text-[#666666] placeholder:text-[#666666] text-xl"
										name="subject"
										placeholder="Subject*"
										required
										onChange={(e) =>
											setSubject(e.target.value)
										}
									/>
									<input
										type="email"
										className="w-[43%] bg-transparent border-[#666666] active:border-[#666666] border-2 px-5 py-2 placeholder:text-xl text-[#666666] placeholder:text-[#666666] text-xl"
										name="website"
										placeholder="Website*"
										onChange={(e) =>
											setWebsite(e.target.value)
										}
									/>
								</div>
								<textarea
									className="mt-6 mx-[5%] w-[90%] h-[8vw] bg-transparent border-[#666666] active:border-[#666666] border-2 px-5 py-2 placeholder:text-xl text-[#666666] placeholder:text-[#666666] text-xl"
									name="message"
									placeholder="Message*"
									required
									onChange={(e) => setMessage(e.target.value)}
								></textarea>
								<div className="flex place-content-center mt-6">
									<button
										className="bg-transparent text-lg font-semibold hover:bg-[#C7AD88] px-4 py-2 border-[#C7AD88] border-2  text-white"
										onClick={handleSendMessage}
									>
										Send Message
									</button>
								</div>
							</form>
						</div>
						<div className="flex place-content-center lg:gap-32 md:gap-20 sm:gap-4 mt-20 mx-4">
							<div className="flex lg:gap-4">
								<img
									src="/images/location.png"
									alt=""
									className="lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8"
								/>
								<div className="grid">
									<h3 className="lg:text-xl md:text-lg sm:text-md font-semibold tracking-wider text-white font-serif italic">
										OUR LOCATION
									</h3>
									<h5 className="lg:text-lg md:text-md sm:text-sm text-red-200">
										Lajpat Nagar, New Delhi
									</h5>
								</div>
							</div>
							<div className="flex gap-4">
								<img
									src="/images/phone.png"
									alt=""
									className="lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8"
								/>
								<div className="grid">
									<h3 className="lg:text-xl md:text-lg sm:text-md font-semibold tracking-wider text-white font-serif italic">
										OUR PHONE
									</h3>
									<h5 className="lg:text-lg md:text-md sm:text-sm text-red-200">
										+91 6204293537
									</h5>
								</div>
							</div>
							<div className="flex gap-4">
								<img
									src="/images/location.png"
									alt=""
									className="lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8"
								/>
								<div className="grid">
									<h3 className="lg:text-xl md:text-lg sm:text-md font-semibold tracking-wider text-white font-serif italic">
										OUR MAIL
									</h3>
									<h5 className="lg:text-lg md:text-md sm:text-sm text-red-200">
										redheshyamjha469@gmail.com
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default RestOfBody;
