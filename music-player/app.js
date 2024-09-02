let arr = [
    {songTitle: "Ye Jo Halka Halka", artistName: "NFAK", coverImg: "https://images.genius.com/2865831b5aac4db5f8a3a628f79464a2.682x682x1.jpg", songUrl: "https://audiofoc.bajao.pk/bajaostrm/320/46173.mp3?m=0&mp3=.mp3&startTime=1725287798&endTime=1725303998&token=vBGmD_kqcS5y-8vPG7-bH_XqSl4CceY5fUrZTXX78gA="},
    {songTitle: "Kali Kali Zulfon", artistName: "NFAK", coverImg: "https://images.genius.com/2865831b5aac4db5f8a3a628f79464a2.682x682x1.jpg", songUrl: "https://audiofoc.bajao.pk/bajaostrm/320/46170.mp3?m=0&mp3=.mp3&startTime=1725287958&endTime=1725304158&token=hrbr5D1ipfI6rqkuPY2WVmb22UdTx2Tdu7jyQJC06ig="},
    {songTitle: "Gham Hai Yah Kushi", artistName: "NFAK", coverImg: "https://audio.bajao.pk/bajaostrm/320/46131.mp3?m=1722089123440&mp3=.mp3&startTime=1725288473&endTime=1725304673&token=9RtoFyhP1sNGD8JEJqn8NnEch5uC0ShKldPUzkw7uxQ="},
    {songTitle: "Tumhay Dillagi Bhool", artistName: "NFAK", coverImg: "https://audiofoc.bajao.pk/bajaostrm/320/45823.mp3?m=0&mp3=.mp3&startTime=1725288523&endTime=1725304723&token=pVBNUFHBbKQXvF0ddifSerNtlemuxBVlRqD6FYbng1c="},
    {songTitle: "Aisa Banna Sanwarna Mubarak", artistName: "NFAK", coverImg: "https://audio.bajao.pk/bajaostrm/320/45820.mp3?m=1722407344130&mp3=.mp3&startTime=1725288559&endTime=1725304759&token=8ngvi60gq0QH9p_wrsnYuPo6TS6USBQyO-kAPtITHD4="},
    {songTitle: "Hai Kahan Ka Irada", artistName: "NFAK", coverImg: "https://audiofoc.bajao.pk/bajaostrm/320/45807.mp3?m=0&mp3=.mp3&startTime=1725288596&endTime=1725304796&token=4vOWl42W3wXGciljFvgKtat9GBRIMxKAcMo1vEQ3HUQ="},
    {songTitle: "Tere Qurban Pyare Mohammad", artistName: "NFAK", coverImg: "https://audiofoc.bajao.pk/bajaostrm/320/45878.mp3?m=0&mp3=.mp3&startTime=1725288673&endTime=1725304873&token=uavwlfe4F1bHe7eJ_ZLJp6nk8Hn9stqwO8jn1mBj3dQ="},
    {songTitle: "Saanson Ki Mala", artistName: "NFAK", coverImg: "https://audiofoc.bajao.pk/bajaostrm/320/45887.mp3?m=0&mp3=.mp3&startTime=1725288715&endTime=1725304915&token=mn3c-l01mtoYvHSW-T-6kQYOr4LQ7VqjVO8S3uK3iTQ="},
    {songTitle: "Jitne Bhi Zakhm Hain", artistName: "NFAK", coverImg: "https://audiofoc.bajao.pk/bajaostrm/320/45822.mp3?m=0&mp3=.mp3&startTime=1725288771&endTime=1725304971&token=Qkb_3Iu-29-iRQutcvdyWn6d-V8xrto6f9FTP-90ahM="},
    {songTitle: "In Ke Dar Pe Pohchne Tu Paye", artistName: "NFAK", coverImg: "https://audiofoc.bajao.pk/bajaostrm/320/45808.mp3?m=0&mp3=.mp3&startTime=1725288802&endTime=1725305002&token=XpSRhAUgin39NRdCYRerQ7Rn1l9FiA7vjX7bJsjSiWo="},
];

// selectors
let dynamicDataHandler = document.querySelector(".dynamic-data-handler");
let play = document.querySelector(".play");
let forward = document.querySelector(".forward");
let backward = document.querySelector(".backward");

let audio = new Audio();
let playingSong = 0;
let isPlay = false;

function main(){
    let clutter = "";

    arr.forEach((song, index)=>{
        clutter += `
        <div class="song-list" id=${index}>
                        <div class="img-song-name">
                            <div class="img-handler">
                                <img src=${song.coverImg} alt="">
                            </div>
                            <h2>${song.songTitle}</h2>
                        </div>
                        <div class="artist-name">
                        <h4>${song.artistName}</h4>
                        </div>
                    </div>
        `;
    });

    dynamicDataHandler.innerHTML = clutter;
    audio.src = arr[playingSong].songUrl;
    console.log(audio.src)
    document.querySelector(".left").style.backgroundImage = `url(${arr[playingSong].coverImg})`;
}
main(); 

dynamicDataHandler.addEventListener("click", (dets)=>{
    playingSong = dets.target.id;
    play.innerHTML = `<svg height="100%" viewBox="0 0 36 36" width="100%"><path d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z" id="ytp-id-117"></path></svg>`;
    isPlay = true;
    main();
    audio.play(); 
})

play.addEventListener("click", ()=>{
    if(isPlay != true){
        play.innerHTML = `<svg height="100%" viewBox="0 0 36 36" width="100%"><path d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z" id="ytp-id-117"></path></svg>`;
        main();
        audio.play();  
        isPlay = true;
    }else{
        play.innerHTML = `<svg height="100%" viewBox="0 0 36 36" width="100%"><path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" id="ytp-id-41"></path></svg>`
        main();
        audio.pause();
        isPlay = false;
    }

}) 

forward.addEventListener("click", ()=>{
    if(playingSong < arr.length - 1){
        playingSong++;
        main();
        audio.play();
    }
    else{
        // forward.style.display = "none"
    }
})

backward.addEventListener("click", ()=>{
    if(playingSong > 0){
        playingSong++;
        main();
        audio.play();
    }
    else{
        forward.style.display = "none"
    }
})