import React from "react";
import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

const queryBlogPage = (uid: string) => {
	const client = createClient();
	return client.getByUID("blogs", uid, {
		fetchLinks: ["writer.name", "writer.image", "writer.company"],
	});
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
			images: prismic.asImageSrc(page.data.meta_image),
		},
	};
}

export default async function BlogPage({
	params,
}: {
	params: { slug: string };
}) {
	const page: any = await queryBlogPage(params.slug);

	return (
		<main className="grid gap-8 pb-24">
			<PrismicNextImage
				className="object-cover w-full h-40 max-w-6xl mx-auto lg:h-80"
				field={page.data.meta_image}
				width={1080}
			/>
			<h1 className="max-w-xl px-6 mx-auto text-3xl font-bold text-center md:max-w-6xl md:text-5xl text-balance">
				{page.data.title}
			</h1>
			<div className="flex w-full max-w-xl px-6 py-2 mx-auto text-start border-y">
				<div className="flex items-center gap-2 py-1">
					<PrismicNextImage
						className="object-cover rounded-full aspect-square"
						height={35}
						width={35}
						field={page.data.writer.data.image}
					/>
					<aside className="grid text-sm text-gray-400">
						<span>{page.data.writer.data.name}</span>
						<span>from {page.data.writer.data.company}</span>
					</aside>
				</div>
			</div>
			<article className="grid max-w-xl gap-10 px-6 mx-auto prose text-white prose-invert prose-a:no-underline">
				<SliceZone slices={page.data.slices} components={components} />
			</article>
		</main>
	);
}
