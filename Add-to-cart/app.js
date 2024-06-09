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
    });
    document.querySelector(".cards").innerHTML = clutter;
}

let cartItemCount = 0;

function addToCart(){
    // adding clicked items to cart array
    document.querySelector(".cards").addEventListener("click", (dets)=>{
    cartItemCount++;
    document.documentElement.style.setProperty('--cart-item-count', `'${cartItemCount}'`);

        if(dets.target.classList.contains("add-cart-opt")){
            cart.push(arr[dets.target.dataset.index]);
            console.log(cart);
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

        // extracting data from cart array to insert into html using forEach()
        cart.forEach((product, index)=>{ 
            clutter += `
            <div class="cart-content" id="${index}">
                <div class="cart-img-handler">
                    <img src="${product.img}" alt="">
                </div>
                <div class="cart-text">
                    <h1>${product.title}</h1>
                    <p>${product.des}</p>
                    <div class="view-delete-items">
                        <p class="view-item">View item</p>
                        <p data-index="${index}" class="remove-item">Delete item</p>
                    </div>
                </div>
            </div>
            `;
        });

        // insert HTML into main element
        document.querySelector(".main-cart").innerHTML = clutter;

        // adding event listener to remove items from the cart
        document.querySelectorAll(".remove-item").forEach(item => {
            item.addEventListener("click", (dets)=>{
                cartItemCount--;
                document.documentElement.style.setProperty('--cart-item-count', `'${cartItemCount}'`);
                let indexToRemove = dets.target.dataset.index;
                cart.splice(indexToRemove, 1);
                console.log(cart);
                // re-render the cart
                document.querySelector(".open-cart-icon").click();
            });
        });
    })
}

addToCartCards();
addToCart();
