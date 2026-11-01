"use client";

export default function ThemeToggle() {

    const toggleTheme = () => {
        const root = document.documentElement;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!reduceMotion) root.classList.add("theme-transition");
        const isDark = root.classList.toggle("dark");

        try {
            localStorage.setItem("theme", isDark ? "dark" : "light");
        } catch {}

        window.setTimeout(() => root.classList.remove("theme-transition"), 400);
    };

    return (
        <button
        onClick={toggleTheme}
        aria-label="Toggle dark theme"
        title="Toggle theme"
        className="group fixed bottom-6 right-6 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-white/80 backdrop-blur border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-colors duration-200 cursor-pointer">
            {/* Moon shows in light mode, sun in dark mode; both are rendered so there's no hydration mismatch */}
            <svg className="absolute w-5 h-5 transition-all duration-500 ease-out rotate-0 scale-100 opacity-100 dark:-rotate-90 dark:scale-50 dark:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
            <svg className="absolute w-5 h-5 transition-all duration-500 ease-out rotate-90 scale-50 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="12" cy="12" r="4" />
                <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
        </button>
    );
}
