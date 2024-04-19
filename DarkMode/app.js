// selectors
const toggleTheme = document.querySelector(".toggle-theme");

// state
const theme = localStorage.getItem("theme");

// on mount
theme && document.body.classList.add("darkMode");

// handlers
handleThemeToggle = ()=>{
    document.body.classList.toggle("darkMode");
    if(document.body.classList.contains("darkMode")){
        localStorage.setItem("theme", "darkMode");
    }
    else{
        localStorage.removeItem("theme");
    }
}

// events
toggleTheme.addEventListener("click", handleThemeToggle);