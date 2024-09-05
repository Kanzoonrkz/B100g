import CourseTab from "@/components/courseTab";
import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { CourseLessonSliceSliceDefaultPrimary } from "../../../../prismicio-types";

const queryCoursePage = (uid: string) => {
	const client = createClient();
	return client.getByUID("course", uid);
};

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const page = await queryCoursePage(params.slug);

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

export default async function CoursePage({
	params,
}: {
	params: { slug: string };
}) {
	const page = await queryCoursePage(params.slug);
	const courseLessonList: CourseLessonSliceSliceDefaultPrimary[] =
		page.data.slices.map((slice: any) => {
			return slice.primary;
		});
	return (
		<main className="grid gap-8 pb-24">
			<PrismicNextImage
				className="object-cover w-full h-40 max-w-6xl mx-auto lg:h-80"
				field={page.data.meta_image}
				width={1080}
			/>
			<h1 className="max-w-xl px-6 mx-auto text-3xl text-center md:max-w-6xl md:text-5xl text-balance font-marcellus">
				{page.data.title}
			</h1>

			<CourseTab data={courseLessonList} overview={page.data.overview} />
		</main>
	);
}
