"use client"

import { getRandomEmojiPath } from "@/lib/random-emoji-path"
import { useEffect, useState } from "react"

export default function Home() {

	const [currentEmoji, setCurrentEmoji] = useState("https://raw.githubusercontent.com/rasvanjaya21/emojipapers/master/Emojis/Animals/Baby Chick.png")

	useEffect(() => {

		const intervalId = setInterval(() => {
			const nextEmojiPath = getRandomEmojiPath
			setCurrentEmoji(nextEmojiPath)
		}, 10000)

		return () => clearInterval(intervalId)

	}, [currentEmoji])

	return (
		<main className="grid h-screen place-items-center">
			<img src={currentEmoji} alt="Emojipapers" width="256" height="256" />
		</main>
	)
}
