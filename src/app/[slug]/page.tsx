import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import React from "react";

// export async function generateStaticParams() {
// 	const client = createClient();
// 	const pages = await client.getAllByType("marketing_page");

// 	console.log('pages',pages);

// 	return pages.map((page) => {
// 		return { uid: page.uid };
// 	});
// }

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
		openGraph: {
			title: page.data.meta_title,
			description: page.data.meta_description,
			Image: prismic.asImageSrc(page.data.meta_image),
		},
	};
}

export default async function MarketingPage({
	params,
}: {
	params: { slug: string };
}) {
	const page = await queryMarketingPage(params.slug);
	console.log(page);

	return <SliceZone slices={page.data.slices} components={components} />;
}
