"use client";
import loadingAnimation from "@/lottie-animation/loading.json";
import Lottie from "react-lottie";

export default function Loading() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: loadingAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div className="relative z-50">
			<div className="fixed inset-0 top-0 left-0 grid h-screen bg-light place-content-center ">
				<Lottie
					options={defaultOptions}
					height={100}
					width={100}
					isStopped={false}
					isPaused={false}
					speed={100}
				/>
			</div>
		</div>
	);
}
