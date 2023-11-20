import { HashtagIcon, LinkIcon } from "@heroicons/react/24/solid";
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
			className="prose text-white bg-black prose-invert prose-a:no-underline"
		>
			{slice.primary.section_title && <h2>{slice.primary.section_title}</h2>}
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
