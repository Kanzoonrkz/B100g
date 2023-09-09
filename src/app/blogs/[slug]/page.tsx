import React from "react";
import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

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

	console.log(page);

	return (
		<div className="py-6">
			<h1 className="py-6 text-5xl font-bold text-center">{page.data.title}</h1>
			<PrismicNextImage
				className="object-cover max-w-6xl mx-auto h-80"
				field={page.data.meta_image}
			></PrismicNextImage>
			<article className="max-w-4xl mx-auto prose text-white prose-invert">
				<SliceZone slices={page.data.slices} components={components} />
			</article>
		</div>
	);
}
