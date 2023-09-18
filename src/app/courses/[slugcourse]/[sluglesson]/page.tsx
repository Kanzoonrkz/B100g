import React from "react";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

const queryLessonPage = (uid: string) => {
	const client = createClient();
	return client.getByUID("lesson", uid);
};
export default async function LessonPage({ params }: { params: any }) {
	const page = await queryLessonPage(params.sluglesson);
	return (
		<>
			<section>
				<h1>{page.data.title}</h1>
			</section>
			<SliceZone slices={page.data.slices} components={components} />
		</>
	);
}
