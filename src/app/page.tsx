// "use client";
import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Button from "@/components/button";
// import { Disclosure } from "@headlessui/react";

const queryHomepage = () => {
	const client = createClient();
	return client.getSingle("homepage");
};

export async function generateMetadata() {
	const page = await queryHomepage();

	return {
		// title: "Test",
		// description: "Test",
		// openGraph: {
		// 	title: "Test",
		// 	description: "Test",
		// },
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
			{/* <section className="h-[500px] flex items-center">
				<div className="container-small">
					<h1 className="text-5xl font-marcellus">The AI Content Hub</h1>
					<p className="max-w-lg text-2xl font-light">
						Experience our entirely AI-generated cutting-edge blogs and courses
					</p>
					<div className="flex gap-4 mt-6">
						<Button.Primary>Explore Blogs</Button.Primary>
						<Button.Secondary>Explore Courses</Button.Secondary>
					</div>
				</div>
			</section>

			<section className="h-[500px] flex items-center">
				<div className="container-small">
					<h1 className="text-5xl font-marcellus">What is B100g?</h1>
					<p className="max-w-lg text-2xl font-light">
						B100g is a platform that serve written content such as blogs and
						courses.
					</p>
				</div>
			</section>

			<section className="h-[300px] flex items-center">
				<div className="container-small">
					<h1 className="text-5xl font-marcellus">Frequently Asked Question</h1>
				</div>
			</section>

			<section className="h-[300px] flex items-center">
				<div className="container-small">
					<h1 className="text-5xl text-center font-marcellus">Blogs</h1>
					<p className="mt-3 text-2xl font-light text-center">
						A short dense information for your hectic world
					</p>
				</div>
			</section>

			<section className="justify-center py-20 bg-dark text-light">
				<h1 className="text-4xl text-center container-small font-marcellus">
					Embrace the future, start now!
				</h1>
			</section>

			<section className="px-6 py-6 mx-auto md:px-4">
				<div className="mx-auto container-small">
					<div className="bg-gradient-to-br from-[#FFE3C3] to-[#C9D8FF] via-[#D8FFDA] py-10 px-20 rounded-2xl">
						<h2 className="text-3xl text-center font-marcellus">
							Got more questions?
						</h2>
						<p className="text-lg font-light text-center">
							Kindly read our FAQ for more information related to B100g. If you
							have further request and questions, consider contact me
							personally.
						</p>
						<div className="flex justify-center gap-4 mt-4">
							<Button.Primary className="w-full">FAQ</Button.Primary>
							<Button.Secondary className="w-full">Contact</Button.Secondary>
						</div>
					</div>
				</div>
			</section>

			<section className="px-6 py-6 mx-auto md:px-4">
				<div className="mx-auto container-small">
					<div className="bg-gradient-to-br from-[#FFE3C3] to-[#C9D8FF] via-[#D8FFDA] py-10 px-20 rounded-2xl">
						<h2 className="text-3xl text-center font-marcellus">
							Got more questions?
						</h2>
						<p className="text-lg font-light text-center">
							Kindly read our FAQ for more information related to B100g. If you
							have further request and questions, consider contact me
							personally.
						</p>
						<div className="flex justify-center gap-4 mt-4">
							<Button.Primary className="w-1/2">FAQ</Button.Primary>
						</div>
					</div>
				</div>
			</section> */}

			{/* <section className="px-6 py-6 mx-auto md:px-4">
				<div className="mx-auto container-small">
					<div className="border-black divide-y divide-black border-y">
						<Disclosure>
							{({ open }) => (
								<div className="px-4">
									<Disclosure.Button className="flex justify-between w-full gap-4 py-2 text-lg font-marcellus">
										<span>Is team pricing available?</span>
										<span className={open ? "rotate-90 transform" : ""}>V</span>
									</Disclosure.Button>
									<Disclosure.Panel className="text-gray-500">
										Yes! You can purchase a license that you can share with your
										entire team.
									</Disclosure.Panel>
								</div>
							)}
						</Disclosure>
						<Disclosure>
							{({ open }) => (
								<div className="px-4">
									<Disclosure.Button className="flex justify-between w-full gap-4 py-2 text-lg font-marcellus">
										<span>Is team pricing available?</span>
										<span className={open ? "rotate-90 transform" : ""}>V</span>
									</Disclosure.Button>
									<Disclosure.Panel className="text-gray-500">
										Yes! You can purchase a license that you can share with your
										entire team.
									</Disclosure.Panel>
								</div>
							)}
						</Disclosure>
					</div>
				</div>
			</section> */}

			<SliceZone slices={page.data.slices} components={components} />
		</main>
	);
}
