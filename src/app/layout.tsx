import "./globals.css";
import type { Metadata } from "next";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
	title: "B100g",
	description: "100/100 Blog",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="text-dark bg-light font-montserrat">
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}
