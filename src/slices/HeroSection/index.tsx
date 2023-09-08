import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeroSection`.
 */
export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>;

/**
 * Component for "HeroSection" Slices.
 */
const HeroSection = ({ slice }: HeroSectionProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="bg-black"
		>
			<div className="grid gap-6 text-center py-36 place-items-center">
				<h1 className="text-5xl font-bold">{slice.primary.hero_title}</h1>
				<p>{slice.primary.description}</p>
				{slice.variation === "ctaButton" && (
					<button className="px-3 py-1 text-black bg-white rounded">
						<PrismicNextLink field={slice.primary.button_link}>
							{slice.primary.button_label}
						</PrismicNextLink>
					</button>
				)}
			</div>
		</section>
	);
};

export default HeroSection;
