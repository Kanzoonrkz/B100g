import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import React from "react";

const queryMarketingPage = (slug: string) => {
	const client = createClient();
	return client.getByUID("marketing_page", slug);
};

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const page = await queryMarketingPage(params.slug);

	return {
		title: page.data.meta_title,
		description: page.data.meta_description,
		Images: prismic.asImageSrc(page.data.meta_image),
		openGraph: {
			title: page.data.meta_title,
			description: page.data.meta_description,
			Images: prismic.asImageSrc(page.data.meta_image),
		},
	};
}

export default async function MarketingPage({
	params,
}: {
	params: { slug: string };
}) {
	const page = await queryMarketingPage(params.slug);

	return (
		<main>
			<SliceZone slices={page.data.slices} components={components} />
		</main>
	);
}
