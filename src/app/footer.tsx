import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link";

const queryFooterNavigation = () => {
	const client = createClient();
	return client.getSingle("categorized_navigation");
};

export default async function Footer() {
	const footerData = await queryFooterNavigation();

	console.log(footerData.data.social_group);

	return (
		<footer className="grid items-start w-full max-w-6xl gap-10 px-6 pt-16 pb-8 mx-auto justify-stretch md:grid-cols-2 md:justify-between">
			<div>
				<span className="text-5xl font-bold">B100g</span>
				<div className="flex gap-2 pt-1">
					By
					<Image
						src={"/kanzoon-logo.svg"}
						alt="Kanzoon Logo"
						width={115}
						height={25}
					/>
				</div>
			</div>
			<div className="flex flex-col items-start justify-between w-full gap-10 md:flex-row">
				<div className="grid">
					<b className="pb-3">{footerData.data.page_label}</b>
					<ul className="grid gap-2">
						{footerData.data.page_group.map((nav: any) => (
							<li key={nav.link.id}>
								<PrismicNextLink
									href={nav.link.type === "homepage" ? "/" : nav.link.uid}
								>
									{nav.label}
								</PrismicNextLink>
							</li>
						))}
					</ul>
				</div>
				<div className="grid">
					<b className="pb-3">{footerData.data.content_label}</b>
					<ul className="grid gap-2">
						{footerData.data.content_group.map((nav: any) => (
							<li key={nav.link.id}>
								<PrismicNextLink href={nav.link.uid}>
									{nav.label}
								</PrismicNextLink>
							</li>
						))}
					</ul>
				</div>
				<div className="grid">
					<b className="pb-3">{footerData.data.social_label}</b>
					<ul className="grid gap-2">
						{footerData.data.social_group.map((nav: any) => (
							<li key={nav.link.id}>
								<PrismicNextLink href={nav.link.url} target={nav.link.target}>
									{nav.label}
								</PrismicNextLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
}
