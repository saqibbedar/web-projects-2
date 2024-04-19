let arr = [
    {title: "Hello world", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam numquam architecto eius inventore repellat. Enim, officiis, in eligendi natus iste est corrupti nisi impedit quas aspernatur, vel nulla a omnis!", cart: "Add to cart 🚀", img:"portfolio.png"},
    {title: "Hello world", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam numquam architecto eius inventore repellat. Enim, officiis, in eligendi natus iste est corrupti nisi impedit quas aspernatur, vel nulla a omnis!", cart: "Add to cart 🚀", img:"256066558-b8027c65-49c6-411a-aa8b-7a6e988ca661.png"},
    {title: "Hello world", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam numquam architecto eius inventore repellat. Enim, officiis, in eligendi natus iste est corrupti nisi impedit quas aspernatur, vel nulla a omnis!", cart: "Add to cart 🚀", img:"plug.png"},
    {title: "Hello world", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam numquam architecto eius inventore repellat. Enim, officiis, in eligendi natus iste est corrupti nisi impedit quas aspernatur, vel nulla a omnis!", cart: "Add to cart 🚀", img:"hudu.png"},
    {title: "Hello world", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam numquam architecto eius inventore repellat. Enim, officiis, in eligendi natus iste est corrupti nisi impedit quas aspernatur, vel nulla a omnis!", cart: "Add to cart 🚀", img:"ixperience.png"},
]

let cart = [];

function addToCartCards(){
    let clutter = "";
    arr.forEach((obj, index) =>{
        clutter += `
        <div class="card">
                    <div class="img-handler">
                        <img src="${obj.img}" alt="img">
                    </div>
                    <div class="card-text">
                        <h1>${obj.title}</h1>
                        <p>${obj.des}</p>
                        <p data-index="${index}" class="add-cart-opt">${obj.cart}</p>
                    </div>
                </div>
        `
        document.querySelector(".cards").innerHTML = clutter;
    })
}

function addToCart(){

    // adding clicked itmes to cart array
    document.querySelector(".cards").addEventListener("click", (dets)=>{
        if(dets.target.classList.contains("add-cart-opt")){
            cart.push(arr[dets.target.dataset.index]);
        }
    })

    // open the cart when cart is clicked
    document.querySelector(".open-cart-icon").addEventListener("click", ()=>{
        document.querySelector(".cart").classList.add("active-cart");
        // close cart
        document.querySelector(".close").addEventListener("click", function(){
            document.querySelector(".cart").classList.remove("active-cart");
        })

        // setting clutter to hold data
        let clutter = ""; 

        // extrating data from cart array to insert into html using forEach()
        cart.forEach((product)=>{ 
            clutter += `
            <div class="cart-content">
            <div class="cart-img-handler">
            <img src="${product.img}" alt="">
            </div>
            <div class="cart-text">
                    <h1>${product.title}</h1>
                    <p>${product.des}</p>
                    <div class="view-delete-items">
                        <p class="view-item">View item</p>
                        <p class="remove-item">Delete item</p>
                    </div>
                </div>
            </div>
            </div>
            `;

            // insert html to main element
            document.querySelector(".main-cart").innerHTML = clutter;

            // document.querySelector(".main-cart").addEventListener("click", function(dets){
            //     if(dets.target.classList.contains("remove-item")){
            //         console.log("hello")
            //         // cart.pop(arr[dets.target.dataset.index]);
            //     }
            // })
        })

    })
}

addToCartCards();
addToCart();