'use client';
import React, { useState } from 'react';
import Link from 'next/link';

function Navbar({ handleShow }) {
	const [activeLink, setActiveLink] = useState('home');
	const [active, setActive] = useState(false);
	function logoutClick() {
		localStorage.removeItem('jwt');
		window.location.reload();
	}
	return (
		<section className="w-full h-24 flex place-content-center place-items-center bg-glass backdrop-blur-glass ">
			<div className="xl:w-[75vw] lg:w-[80vw] md:w-[90vw] xs:w-[96vw] flex ">
				<Link
					href="#home"
					className="mr-auto xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl xs:text-2xl pb-2  font-bold bg-gradient-to-br from-yellow-300 via-red-500 to-purple-600 text-transparent bg-clip-text "
				>
					Real-Estate
				</Link>
				<div className="flex gap-[1vw] lg:text-2xl md:text-xl sm:text-lg xs:text-lg font-serif tracking-widest font-semibold ">
					<Link
						href="#home"
						className={`lg:py-2 lg:px-2 md:py-1 md:px-2 sm:py-[2px] sm:px-2 xs:py-[1px] xs:px-2 flex place-items-center gap-1 rounded-lg bg-[#323031] hover:bg-gradient-to-br ${
							activeLink === 'home'
								? 'bg-gradient-to-br'
								: 'bg-[#323031]'
						} from-slate-600 via-red-500 to-cyan-600 text-cyan-200`}
						onClick={() => setActiveLink('home')}
					>
						Home
					</Link>
					<Link
						href="#property"
						className={`py-2 px-2 flex place-items-center gap-1 rounded-lg bg-[#323031] hover:bg-gradient-to-br ${
							activeLink === 'property'
								? 'bg-gradient-to-br'
								: 'bg-[#323031]'
						} from-slate-600 via-red-500 to-cyan-600 text-cyan-200`}
						onClick={() => setActiveLink('property')}
					>
						Property
					</Link>
					<Link
						href="#rental"
						className={`py-2 px-2 flex place-items-center gap-1 rounded-lg bg-[#323031] hover:bg-gradient-to-br ${
							activeLink === 'rental'
								? 'bg-gradient-to-br'
								: 'bg-[#323031]'
						} from-slate-600 via-red-500 to-cyan-600 text-cyan-200`}
						onClick={() => setActiveLink('rental')}
					>
						Rental
					</Link>
					<Link
						href="#contact"
						className={`py-2 px-2 flex place-items-center gap-1 rounded-lg bg-[#323031] hover:bg-gradient-to-br ${
							activeLink === 'contact'
								? 'bg-gradient-to-br'
								: 'bg-[#323031]'
						} from-slate-600 via-red-500 to-cyan-600 text-cyan-200`}
						onClick={() => setActiveLink('contact')}
					>
						Contact
					</Link>
				</div>
				<div className="ml-auto flex gap-[1vw]">
					<button
						className={` rounded-full border-4 border-[#BEC7CC] flex place-items-center gap-1 bg-[#323031] hover:bg-gradient-to-br from-slate-600 via-red-500 to-cyan-600 font-serif tracking-widest font-semibold  ${
							active ? 'bg-gradient-to-br' : 'bg-[#323031]'
						} `}
						onClick={() => {
							handleShow();
							setActive(!active);
						}}
					>
						<img
							src="/images/favourite.png"
							alt=""
							className="lg:w-[1.5vw] lg:h-[1.5vw] md:w-[2vw] md:h-[2vw] sm:w-[2.5vw] sm:h-[2.5vw] lg:m-2 md:my-1 md:mx-2  sm:mx-2"
						/>
					</button>
					<button
						className={`py-2 px-2 lg:text-2xl md:text-xl sm:text-lg xs:text-lg flex place-items-center gap-1 rounded-lg bg-[#323031] hover:bg-gradient-to-br from-slate-600 via-red-500 to-cyan-600 font-serif tracking-widest text-cyan-200 font-semibold`}
						onClick={logoutClick}
					>
						{' '}
						Logout
					</button>
				</div>
			</div>
		</section>
	);
}

export default Navbar;
