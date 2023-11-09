import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Navigation from "./navigation";
import Footer from "./footer";

export const dynamic = "force-dynamic";

const fira_code = Fira_Code({ subsets: ["latin"] });

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
		<html lang="en" className="text-sm md:text-base">
			<body className={fira_code.className + " bg-black text-white"}>
					<Navigation />
					{children}
					<Footer/>
			</body>
		</html>
	);
}
