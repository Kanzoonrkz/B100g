import React from "react";
import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

const queryBlogPage = (uid: string) => {
	const client = createClient();
	return client.getByUID("blogs", uid);
};

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const page = await queryBlogPage(params.slug);

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

export default async function BlogPage({
	params,
}: {
	params: { slug: string };
}) {
	const page = await queryBlogPage(params.slug);

	return (
		<div className="py-6">
			<h1 className="py-6 text-5xl font-bold text-center">{page.data.title}</h1>
			<PrismicNextImage
				className="object-cover max-w-6xl mx-auto h-80"
				field={page.data.meta_image}
			></PrismicNextImage>
		</div>
	);
}
