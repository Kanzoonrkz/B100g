import React from "react";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

const queryCoursePage = (uid: string) => {
	const client = createClient();
	return client.getByUID("course", uid);
};
export default async function CoursePage({ params }: { params: any }) {
	const page = await queryCoursePage(params.slugcourse);
	return <SliceZone slices={page.data.slices} components={components} />;
}

// .prose-h2\:first\:mt-0:first-child :is(:where(h2):not(:where([class~="not-prose"],[class~="not-prose"] *))) {

// .prose-h2\:mt-0 :is(:where(h2):not(:where([class~="not-prose"],[class~="not-prose"] *))) {