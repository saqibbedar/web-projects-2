let arr = [
    {heading : "Hello, world!", subHeading: "lorem ipsum dollar emit...", price : "20", img : "https://blog-frontend.envato.com/cdn-cgi/image/width=2560,quality=75,format=auto/uploads/sites/2/2022/04/E-commerce-App-JPG-File-scaled.jpg"},
    {heading : "Hello, world!", subHeading: "lorem ipsum dollar emit...", price : "20", img : "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/ecommerce%20marketing.jpg?width=893&height=600&name=ecommerce%20marketing.jpg"},
    {heading : "Hello, world!", subHeading: "lorem ipsum dollar emit...", price : "20", img : "https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2022/08/Image_-_E-Commerce_Website_.jpeg.jpg"}
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
    })
    input.addEventListener("blur", ()=>{
        overlay.classList.remove("active-overlay");
        suggestion.classList.remove("active-search-suggestion");
    })
    input.addEventListener("input", ()=>{
        let clutter = "";
        suggestion.classList.add("active-search-suggestion");
        const filterArray = arr.filter(obj => obj.heading.toLocaleLowerCase().startsWith(input.value));
        filterArray.forEach(obj =>{
            clutter += `<p>${obj.heading}</p>`
        })
        suggestion.innerHTML = clutter;
    })
}

Card();
handleSearch();