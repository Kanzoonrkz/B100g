import { LinkIcon } from "@heroicons/react/24/solid";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `BlogContentSection`.
 */
export type BlogContentSectionProps =
	SliceComponentProps<Content.BlogContentSectionSlice>;

/**
 * Component for "BlogContentSection" Slices.
 */
const BlogContentSection = ({
	slice,
}: BlogContentSectionProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="bg-black prose text-white prose-invert prose-a:no-underline first:prose-h2:mt-0 first:prose-p:mt-0"
		>
			{slice.primary.section_title && (
				<h2>
					<Link
						id={slice.primary.section_title.toString()}
						href={`#${slice.primary.section_title}`}
						className="flex items-center gap-3 w-fit group"
					>
						{slice.primary.section_title}
						<LinkIcon className="hidden w-6 h-6 group-hover:block group-focus:block" />
					</Link>
				</h2>
			)}
			{slice.items.map((item: any) => (
				<>
					<PrismicNextImage
						field={item.image}
						className="object-contain mx-auto max-h-60"
					/>
					<PrismicRichText field={item.text} key={item.id} />
				</>
			))}
		</section>
	);
};

export default BlogContentSection;
