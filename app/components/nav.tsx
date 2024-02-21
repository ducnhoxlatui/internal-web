"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import profile from '@/public/images/profile.png'
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const router = useRouter();

	const handleSignOut = async () => {
		const data = await signOut({ redirect: false, callbackUrl: "/foo" })
		router.push(data.url)
	};

	const toggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen);
	};

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${isIntersecting
					? "bg-zinc-900/0 border-transparent"
					: "bg-zinc-900/500  border-zinc-800 "
					}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8 items-center">
						<Link
							href="/timeline"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Timeline
						</Link>
						<Link
							href="/guild"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Guilds
						</Link>
						<Link
							href="/members"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Members
						</Link>
						<Link
							href="/blog"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Blog
						</Link>
						<div
							className="relative group cursor-pointer"
							onClick={toggleDropdown}
						>
							<svg
								className="w-8 h-8 text-zinc-400 hover:text-zinc-100"
								fill="none"
								height="24"
								stroke-width="1.5"
								viewBox="0 0 24 24"
								width="24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round" />
								<path
									d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round" />
								<path
									d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round" />
							</svg>
							 {/* {isDropdownOpen && (  */}
							{/* //	<div className="w-28 absolute right-0 mt-2 bg-white rounded-md shadow-md"> */}
							{/* //		Add your sign-out section here */}
							{/* //		<button onClick={handleSignOut} className="block px-4 py-2 text-zinc-400 hover:text-zinc-100"> */}
							{/* //			Sign Out */}
							{/* //		</button> */}
							{/* //		Add more dropdown items as needed */}
							{/* //	</div> */}
							{/* //)} */}
						</div>
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						{/* <ArrowLeft className="w-6 h-6 " /> */}
						LOOKER
					</Link>
				</div>
			</div>
		</header>
	);
};
