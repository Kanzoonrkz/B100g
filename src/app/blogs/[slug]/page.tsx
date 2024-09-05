import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const queryBlogPage = (uid: string) => {
	const client = createClient();
	return client.getByUID("blog", uid, {
		fetchLinks: ["writer.name", "writer.image", "writer.company"],
	});
};

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const page = await queryBlogPage(params.slug);

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

export default async function BlogPage({
	params,
}: {
	params: { slug: string };
}) {
	const page: any = await queryBlogPage(params.slug);

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
			<div className="flex items-center w-full max-w-2xl gap-2 px-6 py-3 mx-auto border-gray-300 text-start border-y">
				<PrismicNextImage
					className="object-cover rounded-full aspect-square"
					height={35}
					width={35}
					field={page.data.writer.data.image}
				/>
				<div className="grid text-sm text-gray-500">
					<span>{page.data.writer.data.name}</span>
					<span>from {page.data.writer.data.company}</span>
				</div>
				<div className="grid ml-auto text-sm text-right text-gray-500">
					<span>Published on</span>
					<span>{page.data.generated_date}</span>
				</div>
			</div>
			<article className="max-w-xl px-6 mx-auto prose md:text-lg text-dark prose-headings:text-inherit prose-headings:mt-0 prose-strong:text-inherit prose-invert prose-a:no-underline prose-img:max-h-28 prose-img:mx-auto prose-ul:my-0 prose-ol:my-0 prose-p:mt-0 prose-link:text-inherit">
				<PrismicRichText field={page.data.article} />
			</article>
		</main>
	);
}
