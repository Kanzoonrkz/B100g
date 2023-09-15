"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React from "react";
import {
	LessonDocument,
	LessonGroupDocument,
} from "../../../../prismicio-types";
import Link from "next/link";

interface Props {
	list: any;
	link: string;
}

export default function CourseLessonList(props: Props) {
	return (
		<div className="sticky grid gap-2 text-xl border border-white rounded top-24">
				<Link href={`${props.link}`}>
					<div className="p-2">Course Menu</div>
				</Link>
			{props.list.map(
				(parent_lesson: {
					lesson: LessonDocument | LessonGroupDocument | any;
				}) => (
					<div key={parent_lesson.lesson.id}>
						{parent_lesson.lesson.type === "lesson" ? (
							<Link href={`${props.link}/${parent_lesson.lesson.uid}`}>
								<div className="p-2">{parent_lesson.lesson.data.title}</div>
							</Link>
						) : (
							<Disclosure>
								{({ open }) => (
									<>
										<Disclosure.Button
											className={`flex gap-3 items-center p-2`}
										>
											<span>{parent_lesson.lesson.data.title}</span>
											<ChevronDownIcon
												className={`${
													open ? "rotate-180 transform" : ""
												} h-5 w-5 text-white`}
											/>
										</Disclosure.Button>
										<Disclosure.Panel className="grid gap-2 bg-neutral-900">
											{parent_lesson.lesson.data.lesson_list.map(
												(child_lesson: { lesson: LessonDocument }) => (
													<Link
														key={child_lesson.lesson.id}
														href={`${props.link}/${child_lesson.lesson.uid}`}
													>
														<div className="p-2 pl-6">
															{child_lesson.lesson.data.title}
														</div>
													</Link>
												)
											)}
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						)}
					</div>
				)
			)}
		</div>
	);
}
