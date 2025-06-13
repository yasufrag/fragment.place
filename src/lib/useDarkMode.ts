import { useEffect, useState } from "react"

type Theme = "light" | "dark"

export default function useDarkMode(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    // 初期テーマを localStorage または OS 設定から取得
    const stored = localStorage.getItem("theme") as Theme | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = stored ?? (prefersDark ? "dark" : "light")
    setTheme(initialTheme)
  }, [])

  useEffect(() => {
    const root = window.document.documentElement

    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"))
  }

  return [theme, toggleTheme]
}