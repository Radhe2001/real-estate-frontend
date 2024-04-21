'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './components/Navbar';
import RestOfBody from './components/RestOfBody';
import Favourite from './components/Favourite';

export default function Home() {
	const router = useRouter();
	const [showFavourite, setShowFavourite] = useState(false);
	const [count, setCount] = useState(0);
	let arr = [
		'/images/img1.jpg',
		'/images/img2.jpg',
		'/images/img3.jpg',
		'/images/img4.jpg',
		'/images/img5.jpg',
	];

	useEffect(() => {
		let timeoutId = setTimeout(() => {
			if (count === 4) setCount(0);
			else setCount(count + 1);
		}, 3000);

		return () => clearTimeout(timeoutId);
	}, [count]);

	useEffect(() => {
		let jwt = localStorage.getItem('jwt');
		if (jwt === null) router.push('/login');
	}, []);

	const handleShow = () => setShowFavourite(!showFavourite);

	return (
		<main className="">
			<section className="relative  w-full h-[100vh] ">
				<img
					className="object-cover h-full w-full fixed"
					src={arr[count]}
					alt="image not found"
				/>
				<div className=" inset-0 absolute w-full h-[100vh] bg-[#0e07145d]">
					<div className="fixed w-full top-0 z-20">
						<Navbar handleShow={handleShow} />
					</div>
					<div className="relative w-full  z-10 ">
						<div
							className={`absolute ${
								showFavourite ? '' : 'hidden'
							}`}
						>
							<div className=" fixed top-20 w-full h-full flex place-content-center place-items-center z-50 ">
								<Favourite
									handleShow={handleShow}
									showFavourite={showFavourite}
								/>
							</div>
						</div>
						<RestOfBody />
					</div>
				</div>
			</section>
		</main>
	);
}
