import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import MobileNavToggle from "./mobileNavToggle";
import Link from "next/link";

const queryNavigation = () => {
	const client = createClient();
	return client.getSingle("navigation");
};

export default async function Navigation() {
	const nav = await queryNavigation();

	return (
		<div className="sticky top-0 z-10 px-6 py-4 bg-black">
			<nav className="relative flex items-center justify-center max-w-6xl mx-auto md:justify-between">
				<Link className="text-4xl font-bold" href={"/"}>
					B100g
				</Link>
				<MobileNavToggle nav={nav} />
				<ul className="items-center hidden gap-12 md:flex">
					{nav.data.nav_group.map((link: any) => (
						<li key={link.id}>
							<PrismicNextLink
								href={
									link.nav_link.type === "homepage" ? "/" : link.nav_link.uid
								}
							>
								{link.nav_label}
							</PrismicNextLink>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}
