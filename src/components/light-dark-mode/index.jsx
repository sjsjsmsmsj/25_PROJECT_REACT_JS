import UseLocalStorage from "./useLocalStorage"

export default function LightDarkMode() {
    const [theme, setTheme] = UseLocalStorage('theme', 'dark');
    const handleToggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                <p>Hello world!</p>
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    )
}