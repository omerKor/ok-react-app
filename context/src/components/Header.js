import { useTheme } from "../context/ThemeContext";

function Header() {
    const { theme, setTheme } = useTheme();
    return (
        <div>
            HEADER AREA

            <br />

            Active Theme: {theme}

            <br />

            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme</button>

        </div>
    )
}

export default Header