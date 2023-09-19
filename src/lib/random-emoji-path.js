import { emojis } from "@/util/emojis"

function getRandomEmojiPath() {
    const categories = Object.keys(emojis)
    const randomCategory = categories[Math.floor(Math.random() * categories.length)]
    const randomEmoji = emojis[randomCategory][Math.floor(Math.random() * emojis[randomCategory].length)]
    return `https://raw.githubusercontent.com/rasvanjaya21/emojipapers/master/Emojis/${randomCategory}/${randomEmoji}.png`
}

export { getRandomEmojiPath }