"use client";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import React from "react";
import {
	LessonDocument,
	LessonGroupDocument,
} from "../../../../prismicio-types";
import Link from "next/link";

interface Props {
	list: any;
}

export default function CourseLessonList(props: Props) {
	return (
		<div className="grid gap-2 border border-white rounded w-fit">
			{props.list.map(
				(parent_lesson: {
					lesson: LessonDocument | LessonGroupDocument | any;
				}) => (
					<div key={parent_lesson.lesson.id}>
						{parent_lesson.lesson.type === "lesson" ? (
							<div>{parent_lesson.lesson.data.title}</div>
						) : (
							<Disclosure>
								{({ open }) => (
									<>
										<Disclosure.Button className={`flex gap-3 items-center`}>
											<span>{parent_lesson.lesson.data.title}</span>
											<ChevronUpIcon
												className={`${
													open ? "rotate-180 transform" : ""
												} h-5 w-5 text-purple-500`}
											/>
										</Disclosure.Button>
                    <div className="grid gap-2 bg-neutral-800">

										{parent_lesson.lesson.data.lesson_list.map(
                      (child_lesson: { lesson: LessonDocument }) => (
                        <Disclosure.Panel key={child_lesson.lesson.id}>
													{child_lesson.lesson.data.title}
												</Disclosure.Panel>
											)
                      )}
                      </div>
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
