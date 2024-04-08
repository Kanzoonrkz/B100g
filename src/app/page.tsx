// "use client";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

const queryHomepage = () => {
	const client = createClient();
	return client.getSingle("homepage");
};

export async function generateMetadata() {
	const page = await queryHomepage();

	return {
		title: page.data.meta_title,
		description: page.data.meta_description,
		openGraph: {
			title: page.data.meta_title,
			description: page.data.meta_description,
			images: prismic.asImageSrc(page.data.meta_image),
		},
	};
}

export default async function Home() {
	const page = await queryHomepage();

	return (
		<main>
			<SliceZone slices={page.data.slices} components={components} />
		</main>
	);
}
