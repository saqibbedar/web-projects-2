let arr = [
    {songTitle: "Ye Jo Halka Halka", artistName: "NFAK", coverImg: "https://images.genius.com/2865831b5aac4db5f8a3a628f79464a2.682x682x1.jpg", songUrl: "https://audiofoc.bajao.pk/bajaostrm/320/46173.mp3?m=0&mp3=.mp3&startTime=1725287798&endTime=1725303998&token=vBGmD_kqcS5y-8vPG7-bH_XqSl4CceY5fUrZTXX78gA="},
    {songTitle: "Kali Kali Zulfon", artistName: "NFAK", coverImg: "https://images.genius.com/2865831b5aac4db5f8a3a628f79464a2.682x682x1.jpg", songUrl: "https://audiofoc.bajao.pk/bajaostrm/320/46170.mp3?m=0&mp3=.mp3&startTime=1725287958&endTime=1725304158&token=hrbr5D1ipfI6rqkuPY2WVmb22UdTx2Tdu7jyQJC06ig="},
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