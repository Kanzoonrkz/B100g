import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Button from "@/components/button";

const queryHomepage = () => {
	const client = createClient();
	return client.getSingle("homepage");
};

export async function generateMetadata() {
	const page = await queryHomepage();

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

export default async function Home() {
	const page = await queryHomepage();

	return (
		<main>
			<section className="h-[500px] flex items-center">
				<div className="container-small">
					<h1 className="font-marcellus text-7xl">The AI Content Hub</h1>
					<p className="max-w-2xl text-3xl font-light">
						Experience our entirely AI-generated cutting-edge blogs and courses
					</p>
					<div className="flex gap-4 mt-6">
						<Button.Primary>Explore Blogs</Button.Primary>
						<Button.Secondary>Explore Courses</Button.Secondary>
					</div>
				</div>
			</section>

			<section className="justify-center py-20 bg-dark text-light">
				<h1 className="text-4xl text-center container-small font-marcellus">
					Embrace the future, start now!
				</h1>
			</section>
			
			<SliceZone slices={page.data.slices} components={components} />
		</main>
	);
}
