import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MotivationalSlice`.
 */
export type MotivationalSliceProps =
  SliceComponentProps<Content.MotivationalSliceSlice>;

/**
 * Component for "MotivationalSlice" Slices.
 */
const MotivationalSlice = ({ slice }: MotivationalSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="justify-center py-20 bg-dark text-light"
    >
      <h1 className="text-4xl text-center container-small font-marcellus">
					Embrace the future, start now!
				</h1>
    </section>
  );
};

export default MotivationalSlice;
