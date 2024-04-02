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
	return client.getAllByType("blog", {
		limit: 9,
		fetchLinks: ["writer.name", "writer.image"],
	});
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
			<ul className="grid max-w-xl grid-cols-1 gap-6 px-6 py-2 mx-auto md:max-w-6xl lg:grid-cols-3 md:grid-cols-2">
				{blogs.map((blog: any) => (
					<li key={blog.id} className="grid w-full gap-1 place-content-start">
						<Link href={`/blogs/${blog.uid}`}>
							<PrismicNextImage
								className="object-cover aspect-video"
								width={640}
								field={blog.data.meta_image}
							></PrismicNextImage>
						</Link>
						<div className="flex items-center gap-2 py-1">
							<PrismicNextImage
								className="object-cover rounded-full aspect-square"
								height={30}
								width={30}
								field={blog.data.writer.data.image}
							/>
							<span className="text-sm text-gray-500">
								{blog.data.writer.data.name}
							</span>
							<span className="ml-auto text-sm text-gray-500">
								{blog.data.generated_date}
							</span>
						</div>
						<Link
							href={`/blogs/${blog.uid}`}
							className="text-lg line-clamp-2 text-pretty"
						>
							{blog.data.title}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
