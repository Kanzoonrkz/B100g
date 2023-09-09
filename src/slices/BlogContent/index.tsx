import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogContent`.
 */
export type BlogContentProps = SliceComponentProps<Content.BlogContentSlice>;

/**
 * Component for "BlogContent" Slices.
 */
const BlogContent = ({ slice }: BlogContentProps): JSX.Element => {
	return (
			<section
				data-slice-type={slice.slice_type}
				data-slice-variation={slice.variation}
			>
				{slice.items.map((item: any) => (
					<PrismicRichText field={item.text}/>
				))}
			</section>
	);
};

export default BlogContent;
