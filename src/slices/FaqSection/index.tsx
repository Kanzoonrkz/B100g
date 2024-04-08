"use client";
import FaqDisclosure from "@/components/faqDisclosure";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FaqSection`.
 */
export type FaqSectionProps = SliceComponentProps<Content.FaqSectionSlice>;

/**
 * Component for "FaqSection" Slices.
 */
const FaqSection = ({ slice }: FaqSectionProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="px-6 py-6 mx-auto container-small md:px-4"
		>
			<div className="border-black divide-y divide-black border-y">
				{slice.items.map((faq) => (
					<FaqDisclosure data={faq} key={faq.question} />
				))}
			</div>
		</section>
	);
};

export default FaqSection;
