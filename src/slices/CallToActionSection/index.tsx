import Button from "@/components/button";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CallToActionSection`.
 */
export type CallToActionSectionProps =
	SliceComponentProps<Content.CallToActionSectionSlice>;

/**
 * Component for "CallToActionSection" Slices.
 */
const CallToActionSection = ({
	slice,
}: CallToActionSectionProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div className="px-6 py-6 mx-auto container-small md:px-4">
				<div className="bg-gradient-to-br from-[#FFE3C3] to-[#C9D8FF] via-[#D8FFDA] py-10 px-20 rounded-2xl">
					<h2 className="text-3xl text-center font-marcellus">
						{slice.primary.title}
					</h2>
					<p className="text-lg font-light text-center">
						{slice.primary.subtitle}
					</p>
					<div className="flex justify-center gap-4 mt-4 font-marcellus">
						<Button.Primary
							className="w-2/6"
							link={slice.primary.primary_button_link}
						>
							{slice.primary.primary_buton_label}
						</Button.Primary>
						{slice.variation === "default" && (
							<Button.Secondary
								className="w-2/6"
								link={slice.primary.secondary_button_link}
							>
								{slice.primary.secondary_button_label}
							</Button.Secondary>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CallToActionSection;
