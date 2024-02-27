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
		<div className="sticky top-0 z-10 bg-light">
			<nav className="relative flex items-center justify-center py-4 ccontainer md:justify-between">
				<Link className="text-3xl font-marcellus" href={"/"}>
					B100g
				</Link>
				<MobileNavToggle nav={nav} />
				<ul className="items-center hidden gap-16 md:flex">
					{nav.data.nav_group.map((link: any) => (
						<li key={link.id}>
							<PrismicNextLink className="p-2" field={link.nav_link}>
								{link.nav_label}
							</PrismicNextLink>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}
