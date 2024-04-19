let userImg = document.querySelector("#user-img");
let inputImgFile = document.querySelector("#upload-img");

inputImgFile.onchange = function(){
    userImg.src = URL.createObjectURL(inputImgFile.files[0])
}