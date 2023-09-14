import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import React from "react";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";

const queryMainCoursesPage = () => {
	const client = createClient();
	return client.getByUID("marketing_page", "courses");
};

const queryAllCourses = () => {
	const client = createClient();
	return client.getAllByType("course", { limit: 9 });
};

export async function generateMetadata() {
	const page = await queryMainCoursesPage();

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

export default async function Blogs() {
	const page = await queryMainCoursesPage();
	const courses = await queryAllCourses();

	return (
		<main>
			<SliceZone slices={page.data.slices} components={components} />
			<ul className="grid max-w-6xl grid-cols-2 gap-6 px-6 py-2 mx-auto md:grid-cols-3">
				{courses.map((course: any) => (
					<li
						key={course.id}
						className="grid w-full gap-2 p-3 text-black bg-white place-content-start rounded-xl"
					>
						<Link href={`/blogs/${course.uid}`}>
							<PrismicNextImage
								className="object-cover rounded-lg aspect-video"
								field={course.data.meta_image}
							></PrismicNextImage>
						</Link>
						<Link href={`/courses/${course.uid}`} className="font-bold">
							{course.data.title}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
