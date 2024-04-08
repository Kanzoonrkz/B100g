"use client";

export default function Error({ error }: { error: Error }) {
	return (
		<div className="">
			{error.message === "No documents were returned"
				? "The page you're attempting to access cannot be found. Please double-check the URL or reach out to our support team for further assistance."
				: error.message}
		</div>
	);
}
