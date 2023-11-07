import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";

const queryFooterNavigation = () => {
	const client = createClient();
	return client.getSingle("categorized_navigation", {
		fetchLinks: [
			"navigation_group.group_label",
			"navigation_group.navigations",
		],
	});
};

export default async function Footer() {
	const { data } = await queryFooterNavigation();

	return (
		<footer className="grid items-start w-full max-w-6xl gap-10 px-6 py-10 mx-auto md:py-16 md:grid-cols-2 md:justify-between">
			<div className="order-last mx-auto md:order-first md:mx-0">
				<span className="text-[48px] font-bold leading-tight">B100g</span>
				<span className="flex gap-2 text-[16px] leading-tight">
					By
					<Image
						src={"/kanzoon-logo.svg"}
						alt="Kanzoon Logo"
						width={115}
						height={25}
					/>
				</span>
			</div>
			<div className="flex flex-col items-start justify-between w-full gap-10 md:flex-row">
				{data.nav_group.map((group: any) => (
					<div className="grid">
						<b className="pb-3">{group.items.data.group_label}</b>
						<ul className="grid gap-2">
							{group.items.data.navigations.map((nav: any) => (
								<li key={nav.internal_link.id || nav.external_link.id}>
									<PrismicNextLink
										href={
											nav.internal_link.type === "homepage"
												? "/"
												: nav.internal_link.uid || nav.external_link.url
										}
										target={nav.external_link.target}
									>
										{nav.label}
									</PrismicNextLink>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</footer>
	);
}
