let arr = [
    {songTitle: "Sabni khy Kharaendr aahy Allah...", artistName: "Bedar Buxal", coverImg: "./src/images/IMG-20201205-WA0029.jpg", songUrl: "./src/audio/baxshal.MP3"},
    {songTitle: "Mokhy b mehbob ghurayo...", artistName: "Bedar Buxal", coverImg: "./src/images/IMG-20201205-WA0026.jpg", songUrl: "./src/audio/bukhshal.MP3"},
    {songTitle: "Piyo Madiny nihar ton...", artistName: "Bedar Buxal", coverImg: "./src/images/IMG-20201205-WA0035.jpg", songUrl: "./src/audio/REC00014.MP3"},
    {songTitle: "Halo Madiny halon...", artistName: "Bedar Buxal", coverImg: "./src/images/FB_IMG_1593229684033.jpg", songUrl: "./src/audio/REC00025.MP3"},
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