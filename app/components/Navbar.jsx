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
			<div className="w-[75vw] flex ">
				<Link
					href="#home"
					className="mr-auto text-4xl pb-2  font-bold bg-gradient-to-br from-yellow-300 via-red-500 to-purple-600 text-transparent bg-clip-text "
				>
					Real-Estate
				</Link>
				<div className="flex gap-[1vw] text-2xl font-serif tracking-widest font-semibold ">
					<Link
						href="#home"
						className={`py-2 px-2 flex place-items-center gap-1 rounded-lg bg-[#323031] hover:bg-gradient-to-br ${
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
							className="w-[1.5vw] h-[1.5vw] m-2"
						/>
					</button>
					<button
						className={`py-2 px-2 text-2xl flex place-items-center gap-1 rounded-lg bg-[#323031] hover:bg-gradient-to-br from-slate-600 via-red-500 to-cyan-600 font-serif tracking-widest text-cyan-200 font-semibold`}
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
