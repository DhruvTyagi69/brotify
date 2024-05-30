console.log("Welcome to brotify");
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('playing');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs =[
    {songName:"Gulabi Aankhein",filePath:"brotify/1.mp3",coverpath:"cover.png"},
    {songName:"Pal Pal Dil Ke Pass",filePath:"brotify/2.mp3",coverpath:"cover2.png"},
    {songName:"Neele Neele Ambar Par",filePath:"brotify/3.mp3",coverpath:"cover3.png"},
    {songName:"Zindagi Ek Safar Hai Suhana",filePath:"brotify/4.mp3",coverpath:"cover4.png"},
    {songName:"Meri Bheegi Bheegi Si",filePath:"brotify/5.mp3",coverpath:"cover5.png"},
    {songName:"Tere Bina Zindagi Se",filePath:"brotify/6.mp3",coverpath:"cover6.png"},
    {songName:"Kya Hua Tera Vada",filePath:"brotify/7.mp3",coverpath:"cover7.png"},
    {songName:"Likhe Jo Khat Tujhe",filePath:"brotify/8.mp3",coverpath:"cover8.png"}
] 
 songitems.forEach((element,i)=>{
      element.getElementsByTagName("img")[0].src=songs[i].coverpath;
      element.getElementsByClassName("songName")[0].innertext=songs[i].songName;
 })
// audioElement.play();
//Handle play/pause click
masterPlay.addEventListener('click',()=>
{
    if(audioElement.paused||audioElement.currentTime<=0){
      audioElement.play();
      masterPlay.classList.remove('<svg xmlns="http://www.w3.org/2000/svg" class="icon"id = "masterPlay"viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>');
      masterPlay.classList.add('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>');
      gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-solid fa-pause')
        masterPlay.classList.add("fa-solid fa-play");
        gif.style.opacity = 0;
    }
})
//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = (myprogressbar.value*audioElement.duration)/100;
})
//const makeallplays=()=>{
  //   Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    //    element.classList.remove("fa-regular fa-circle-pause");
      //  element.classList.add('fa-regular fa-circle-play')
    // })
//}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeallplays();
        e.target.classList.remove("fa-regular fa-circle-play");
        e.target.classList.add("fa-regular fa-circle-pause");
        audioElement.src = "brotify/1.mp3";
        audioElement.play();
    })
})

