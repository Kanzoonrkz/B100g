import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Navigation from "./navigation";

const fira_code = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="text-xs md:text-base">
			<body className={fira_code.className + ' bg-black text-white'}>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
