document.addEventListener("DOMContentLoaded", () => {
    const themeSwitcher = document.getElementById("theme-switcher");
  
    if (!themeSwitcher) return;
  
    function applyDarkTheme() {
      const darkThemeLink = document.createElement("link");
      darkThemeLink.id = "dark-theme-style";
      darkThemeLink.rel = "stylesheet";
      // darkThemeLink.href = "https://cdn.jsdelivr.net/gh/elchinhuseynli/rai-partners/dark-theme.min.css";
      darkThemeLink.href = "http://127.0.0.1:5500/dark-theme.css";
      document.head.appendChild(darkThemeLink);
    }
  
    function removeDarkTheme() {
      const darkThemeLink = document.getElementById("dark-theme-style");
      if (darkThemeLink) {
        document.head.removeChild(darkThemeLink);
      }
    }
  
    themeSwitcher.addEventListener("change", () => {
      const darkThemeLink = document.getElementById("dark-theme-style");
      if (themeSwitcher.checked) {
        applyDarkTheme();
        localStorage.setItem("theme", "dark");
      } else {
        removeDarkTheme();
        localStorage.setItem("theme", "light");
      }
    });
  
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      applyDarkTheme();
      themeSwitcher.checked = true;
    } else {
      removeDarkTheme();
      themeSwitcher.checked = false;
    }
  });
  