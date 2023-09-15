"use client";
import React from "react";

export default function Error({ error }: { error: Error }) {
	return (
		<div>
			{error.message === "No documents were returned"
				? "The page you're attempting to access cannot be found. Please double-check the URL or reach out to our support team for further assistance."
				: error.message}
		</div>
	);
}
