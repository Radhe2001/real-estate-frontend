'use client';
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [toggle, setToggle] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:5000/user/register', {
				name: name,
				email: email,
				password: password,
			})
			.then((data) => {
				if (data.status === 200) alert('registered successfully');
				else alert('Failed to register');
			})
			.catch((err) => alert('some error occurred'));
	};
	return (
		<section className="">
			<form className="w-[20vw]" onSubmit={handleSubmit}>
				<div className="grid mb-6">
					<label
						className="mb-2 text-white text-xl tracking-wider font-serif font-semibold italic"
						htmlFor="name"
					>
						Name
					</label>
					<input
						className="border border-gray-300 text-2xl font-normal  font-serif tracking-wider rounded-lg px-4 py-2 focus:outline-none text-slate-800 shadow-lg shadow-[#152538]"
						type="text"
						name="name"
						id="name"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="grid mb-6">
					<label
						className="mb-2 text-white text-xl tracking-wider font-serif font-semibold italic"
						htmlFor="email"
					>
						Email
					</label>
					<input
						className="border border-gray-300 text-2xl font-normal font-serif tracking-wider rounded-lg px-4 py-2 focus:outline-none text-slate-800 shadow-lg shadow-[#152538]"
						type="email"
						name="email"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="grid mb-6">
					<label
						className="mb-2 text-white text-xl tracking-wider font-serif font-semibold italic"
						htmlFor="password"
					>
						Password
					</label>
					<div className="flex bg-white rounded-lg shadow-lg shadow-[#152538] ">
						<input
							className="border border-gray-300 text-2xl font-normal font-serif tracking-wider rounded-lg px-4 py-2 focus:outline-none border-none text-slate-800"
							type={`${toggle ? 'text' : 'password'}`}
							name="password"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<img
							className="ml-auto mr-2"
							src={`${
								toggle ? '/images/hide.png' : '/images/show.png'
							}`}
							alt=""
							onClick={() => setToggle(!toggle)}
						/>
					</div>
				</div>

				<div className="grid">
					<input
						className="bg-[#502779] hover:bg-[#3d0872] text-white py-2 text-xl font-serif font-bold tracking-widest italic rounded-lg shadow-xl shadow-[#152538]"
						type="submit"
						value={'Register'}
					/>
				</div>
			</form>
		</section>
	);
}

export default Register;
