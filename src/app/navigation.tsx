import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";

const queryNavigation = () => {
	const client = createClient();
	return client.getSingle("navigation");
};

export default async function Navigation() {
	const nav = await queryNavigation();

	return (
		<nav className="sticky top-0 flex items-center justify-between max-w-6xl px-6 py-2 mx-auto">
			<PrismicNextLink
				className="text-4xl font-bold"
				field={nav.data.home_navigation}
			>
				B100g
			</PrismicNextLink>
			<ul className="flex items-center gap-6">
				<li>
					<PrismicNextLink field={nav.data.home_navigation}>
						Home
					</PrismicNextLink>
				</li>
				{nav.data.nav_group.map((link: any) => (
					<li>
						<PrismicNextLink href={`/${link.nav_link.uid}`}>
							{link.nav_label}
						</PrismicNextLink>
					</li>
				))}
				<li>
					<PrismicNextLink
						field={nav.data.button_link}
						className="px-3 py-1 text-black bg-white rounded"
					>
						{nav.data.button_label}
					</PrismicNextLink>
				</li>
			</ul>
		</nav>
	);
}
