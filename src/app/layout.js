import "./globals.css"

export const metadata = {
	title: "Emojipapers - Dynamic Emoji Wallpaper",
	description: "A simple dynamic fullscreen website changeable background as period time based from collection of familiar, friendly, and modern emoji from Microsoft.",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
			<link rel="manifest" href="/site.webmanifest"/>
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
			<meta name="msapplication-TileColor" content="#da532c"/>
			<meta name="theme-color" content="#ffffff"/>
			<body>{children}</body>
		</html>
	)
}
