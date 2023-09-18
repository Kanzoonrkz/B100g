import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

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
