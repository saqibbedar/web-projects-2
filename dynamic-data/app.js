let arr = [
    {heading : "Hello there!", subHeading: "Fantastic design is here...", price : "20", img : "Design .png"},
    {heading : "Hello there!", subHeading: "Fantastic design is here...", price : "20", img : "Design MS- Store.png"},
    {heading : "Hello there!", subHeading: "Fantastic design is here...", price : "20", img : "Screenshot 2022-08-10 085254.png"}
]

function Card(){
    let clutter = "";
    arr.forEach(obj => {
    clutter += `
    <div class="main">
    <div class="img-holder">
            <img src="${obj.img}" alt="img">
    </div>

    <div class="text-holder" >
        <h1>${obj.heading}</h1>
        <p>${obj.subHeading}</p>
        <p>Price: $${obj.price}</p>
    </div>
    </div>
    `
    document.querySelector(".card").innerHTML = clutter;
});
}

function handleSearch(){
    let overlay = document.querySelector(".overlay");
    let input = document.getElementById("text");
    let suggestion = document.querySelector(".search-suggestions");

    input.addEventListener("focus", ()=>{
        overlay.classList.add("active-overlay");
        suggestion.classList.add("active-search-suggestion");
    })
    input.addEventListener("blur", ()=>{
        overlay.classList.remove("active-overlay");
        suggestion.classList.remove("active-search-suggestion");
    })
    input.addEventListener("input", ()=>{
        let clutter = "";
        const filterArray = arr.filter(obj => obj.heading.toLocaleLowerCase().startsWith(input.value));
        filterArray.forEach(obj =>{
            clutter += `<p>${obj.heading}</p>`
        })
        suggestion.innerHTML = clutter;
    })
}

Card();
handleSearch();