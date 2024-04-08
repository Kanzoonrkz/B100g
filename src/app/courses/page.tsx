import { createClient } from "@/prismicio";
import { components } from "@/slices";
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";
import Link from "next/link";

const queryMainCoursesPage = () => {
	const client = createClient();
	return client.getByUID("marketing_page", "courses");
};

const queryAllCourses = () => {
	const client = createClient();
	return client.getAllByType("course", {
		limit: 9,
		fetchLinks: ["writer.name", "writer.image"],
	});
};

export async function generateMetadata() {
	const page = await queryMainCoursesPage();

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

export default async function Blogs() {
	const page = await queryMainCoursesPage();
	const courses = await queryAllCourses();

	return (
		<main>
			<SliceZone slices={page.data.slices} components={components} />
			<ul className="grid max-w-xl grid-cols-1 gap-6 px-6 py-2 mx-auto md:max-w-6xl lg:grid-cols-3 md:grid-cols-2">
				{courses.map((course: any) => (
					<li key={course.id} className="grid w-full gap-1 place-content-start">
						<Link href={`/courses/${course.uid}`}>
							<PrismicNextImage
								className="object-cover aspect-video"
								width={640}
								field={course.data.meta_image}
							></PrismicNextImage>
						</Link>
						<div className="flex items-center gap-2 py-1">
							<PrismicNextImage
								className="object-cover rounded-full aspect-square"
								height={30}
								width={30}
								field={course.data.writer.data.image}
							/>
							<span className="text-sm text-gray-500">
								{course.data.writer.data.name}
							</span>
							<span className="ml-auto text-sm text-gray-500">
								{course.data.generated_date}
							</span>
						</div>
						<Link
							href={`/courses/${course.uid}`}
							className="text-lg line-clamp-2 text-pretty"
						>
							{course.data.title}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
