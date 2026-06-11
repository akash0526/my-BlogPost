import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<meta
					name="description"
					content="Akash Adhikari — Full-Stack Developer, IT Specialist & Digital Strategist based in Doha, Qatar."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>
					Akash Adhikari — Full-Stack Developer | IT Specialist | Digital
					Strategist
				</title>
			</head>
			<body>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
