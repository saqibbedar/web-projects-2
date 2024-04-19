// dynamic data holder
let arr = [
    {listItem : 1},
    {listItem : 2},
    {listItem : 3},
    {listItem : 4},
    {listItem : 5},
    ];

// insert dynamic data
function listItems(){
    let clutter = "";
    arr.forEach(item =>{

    clutter+= `
    <div class="list" draggable="true">
        <span>icon</span>
        <p>List item ${item.listItem}</p>
    </div>
    `
    document.querySelector(".left").innerHTML = clutter;
})
}
listItems();

// selectors
let rightBox = document.querySelector(".right");
let leftBox = document.querySelector(".left");
let lists = document.querySelectorAll(".list");

// main function for drag and drop
function main(){
    lists.forEach(list =>{
        list.addEventListener("dragstart", (e)=>{
            let selectedElement = e.target;
    
            // add lists to right box
            rightBox.addEventListener("dragover", (e)=>{
                e.preventDefault();
            })
    
            rightBox.addEventListener("drop", (e)=>{
                rightBox.appendChild(selectedElement);
                selectedElement = null;
            })
    
            // add elements to left box
            leftBox.addEventListener("dragover", (e)=>{
                e.preventDefault();
            })
    
            leftBox.addEventListener("drop", (e)=>{
                leftBox.appendChild(selectedElement);
                selectedElement = null;
            })
        })
    })
}
main();