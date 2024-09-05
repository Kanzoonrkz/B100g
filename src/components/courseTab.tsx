"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { CourseLessonSliceSliceDefaultPrimary } from "../../prismicio-types";

export default function CourseTab({
	data,
	overview,
}: {
	data: CourseLessonSliceSliceDefaultPrimary[];
	overview: RichTextField;
}) {
	const searchParams = useSearchParams();
	const progressParams = "progress";
	const [courseNow, setCourseNow] = useState(
		Number(searchParams.get(progressParams))
	);

	const updateProgress = (key: any, value: any) => {
		window.scrollTo({ top: 300, behavior: "smooth" });

		const params = new URLSearchParams(searchParams.toString());
		params.set(key, value);
		setCourseNow(value);
		window.history.pushState(null, "", `?${params.toString()}`);
	};

	return (
		<TabGroup
			selectedIndex={courseNow}
			defaultIndex={Number(searchParams.get(progressParams))}
			onChange={(index: number) => {
				updateProgress(progressParams, index);
			}}
		>
			<div className="relative grid w-full max-w-6xl grid-cols-3 px-6 mx-auto">
				<TabList>
					<div className="sticky flex flex-col gap-2 p-2 rounded-lg top-24 bg-dark text-light">
						<Tab
							key={"overview"}
							className={({ selected }) =>
								`text-start rounded p-1 hover:bg-white hover:bg-opacity-10 ${selected && "bg-light bg-opacity-20 font-semibold"
								}`
							}
						>
							Overview
						</Tab>
						{data.map((lesson) => (
							<Tab
								key={lesson.section_title}
								className={({ selected }) =>
									`text-start rounded p-1 hover:bg-white hover:bg-opacity-10 ${selected && "bg-light bg-opacity-20 font-semibold"
									}`
								}
							>
								{lesson.section_title}
							</Tab>
						))}
					</div>
				</TabList>
				<TabPanels className={"col-span-2"}>
					<article className="grid w-full max-w-2xl col-span-2 gap-5 px-6 mx-auto prose prose-invert prose-a:no-underline prose-h2:text-inherit prose-h3:text-inherit prose-h4:text-inherit prose-strong:text-inherit prose-img:max-h-28 prose-img:mx-auto prose-ul:my-0 prose-ol:my-0 text-dark prose-p:mt-0 prose-headings:mt-0 prose-link:text-inherit">
						<TabPanel>
							<PrismicRichText field={overview} />
						</TabPanel>
						{data.map((lesson) => (
							<TabPanel key={lesson.section_title}>
								<h2>{lesson.section_title}</h2>
								<PrismicRichText field={lesson.article} />
							</TabPanel>
						))}
					</article>
				</TabPanels>
			</div>
			<div className="flex justify-between w-full px-6 py-6 mx-auto container-big md:px-4">
				<button
					onClick={() => {
						updateProgress(progressParams, 0);
					}}
					hidden={courseNow !== 1}
				>
					{courseNow === 1 && "< Overview"}
				</button>
				<button
					onClick={() => {
						updateProgress(progressParams, courseNow - 1);
					}}
				>
					{courseNow > 1 && "< " + data[courseNow - 2].section_title}
				</button>
				<button
					onClick={() => {
						updateProgress(progressParams, courseNow + 1);
					}}
				>
					{courseNow < data.length && data[courseNow].section_title + " >"}
				</button>
			</div>
		</TabGroup>
	);
}
