import React from "react";
import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";


export default async function BlogPage({
	params,
}: {
	params: { slug: string };
}) {

	return (
		<main className="grid gap-10 py-24 pt-12">
			NETNOT
		</main>
	);
}
