"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		label: "Unicorn",
		handle: "GM: Aki",
	},
	{
		label: "Badger",
		handle: "GM: Marcus",
	},
	{
		label: "Taurus",
		handle: "GM: Hector",
	},
	{
		label: "Orca",
		handle: "GM: Yahiko",
	},
	{
		label: "Phoenix",
		handle: "GM: Louis",
	},
	{
		label: "Astronaut",
		handle: "GM: Paul & Daniel",
	},
];

export default function Guild() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-24 sm:grid-cols-3 lg:gap-16 mt-24">
					{socials.map((s) => (
						<Card key={s.label}>
							<div
								// target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.label}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.handle}
									</span>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
