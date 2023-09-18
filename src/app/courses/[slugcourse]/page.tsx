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
	return <SliceZone slices={page.data.slices} components={components} />
}