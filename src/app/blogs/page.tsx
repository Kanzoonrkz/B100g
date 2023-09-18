import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import React from "react";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";

const queryMainBlogsPage = () => {
	const client = createClient();
	return client.getByUID("marketing_page", "blogs");
};

const queryAllBlogs = () => {
	const client = createClient();
	return client.getAllByType("blogs", { limit: 9 });
};

export async function generateMetadata() {
	const page = await queryMainBlogsPage();

	return {
		title: page.data.meta_title,
		description: page.data.meta_description,
		Images: prismic.asImageSrc(page.data.meta_image),
		openGraph: {
			title: page.data.meta_title,
			description: page.data.meta_description,
			images: prismic.asImageSrc(page.data.meta_image),
		},
	};
}

export default async function Blogs() {
	const page = await queryMainBlogsPage();
	const blogs = await queryAllBlogs();

	return (
		<main>
			<SliceZone slices={page.data.slices} components={components} />
			<ul className="grid max-w-6xl grid-cols-2 gap-6 px-6 py-2 mx-auto md:grid-cols-3">
				{blogs.map((blog: any) => (
					<li
						key={blog.id}
						className="grid w-full gap-2 p-3 text-black bg-white place-content-start rounded-xl"
					>
						<Link href={`/blogs/${blog.uid}`}>
							<PrismicNextImage
								className="object-cover rounded-lg aspect-video"
								field={blog.data.meta_image}
							></PrismicNextImage>
						</Link>
						<Link href={`/blogs/${blog.uid}`} className="font-bold">
							{blog.data.title}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
