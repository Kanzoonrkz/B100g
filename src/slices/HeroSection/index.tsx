import Button from "@/components/button";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeroText`.
 */
export type HeroTextProps = SliceComponentProps<Content.HeroTextSlice>;

/**
 * Component for "HeroText" Slices.
 */
const HeroText = ({ slice }: HeroTextProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className={`${slice.variation === "default" ? "py-32" : "py-20"}`}
		>
			<div
				className={`${
					slice.variation === "centered" && "text-center"
				} container-small`}
			>
				<h1
					className={`${
						slice.variation !== "centered" && "max-w-xl"
					} text-6xl font-marcellus`}
				>
					{slice.primary.title}
				</h1>
				{slice.variation !== "titleOnly" && (
					<p
						className={`text-2xl font-light pt-2 ${
							slice.variation !== "centered" && "max-w-lg"
						}`}
					>
						{slice.primary.subtitle}
					</p>
				)}
				{slice.variation === "default" && (
					<div className="flex gap-4 mt-6">
						<Button.Primary link={slice.primary.primary_button_link}>
							{slice.primary.primary_buton_label}
						</Button.Primary>
						<Button.Secondary link={slice.primary.secondary_button_link}>
							{slice.primary.secondary_button_label}
						</Button.Secondary>
					</div>
				)}
			</div>
		</section>
	);
};

export default HeroText;
