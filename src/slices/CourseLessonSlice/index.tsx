import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CourseLessonSlice`.
 */
export type CourseLessonSliceProps =
	SliceComponentProps<Content.CourseLessonSliceSlice>;

/**
 * Component for "CourseLessonSlice" Slices.
 */
const CourseLessonSlice = ({ slice }: CourseLessonSliceProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="max-w-xl px-6 mx-auto better-prose"
		>
			<h2>{slice.primary.section_title}</h2>
			<PrismicRichText field={slice.primary.article} />
		</section>
	);
};

export default CourseLessonSlice;
