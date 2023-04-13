import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext(false);
const isBrowser = typeof window !== "undefined";

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    // 다크모드 토글한값이 setDarkMode에 들어옴
    setDarkMode(!darkMode);
    // updateDarkMode로 HTML 요소의 클래스와 로컬 스토리지 값을 업데이트
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDark = () => {
      if (isBrowser) {
        return (
          localStorage.theme === "dark" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        );
      } else {
        return false;
      }
    };
    const darkModeEnabled = isDark();
    updateDarkMode(darkModeEnabled);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode) {
  if (isBrowser) {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }
}

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
