import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import MobileNavToggle from "./mobileNavToggle";

const queryNavigation = () => {
	const client = createClient();
	return client.getSingle("navigation");
};

export default async function Navigation() {
	const nav = await queryNavigation();

	return (
		<div className="sticky top-0 z-50 px-6 py-4 bg-black">
			<nav className="relative flex items-center justify-center max-w-6xl mx-auto md:justify-between">
				<PrismicNextLink
					className="text-4xl font-bold"
					field={nav.data.home_navigation}
				>
					B100g
				</PrismicNextLink>
				<MobileNavToggle nav={nav} />
				<ul className="items-center hidden gap-6 md:flex">
					<li key={"home"}>
						<PrismicNextLink field={nav.data.home_navigation}>
							Home
						</PrismicNextLink>
					</li>
					{nav.data.nav_group.map((link: any) => (
						<li key={link.id}>
							<PrismicNextLink href={`/${link.nav_link.uid}`}>
								{link.nav_label}
							</PrismicNextLink>
						</li>
					))}
					<li>
						<PrismicNextLink
							key={"button"}
							field={nav.data.button_link}
							className="px-3 py-1 text-black bg-white rounded"
						>
							{nav.data.button_label}
						</PrismicNextLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}
