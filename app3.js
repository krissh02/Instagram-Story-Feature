let arr = [
    {"dp": "https://i.ndtvimg.com/i/2017-03/shah-rukh-khan_640x480_61488969837.jpg?ver-20231203.06", 
    "name": "Shahrukh Khan",
    "story":"https://media.gettyimages.com/id/1460810436/photo/mumbai-india-shah-rukh-khan-attends-the-pathaan-film-success-bash-on-january-30-2023-in.jpg?s=612x612&w=gi&k=20&c=UK-szGykkwp2k1sNX_y3q4PRYDx5vzPt3sHeIOU6D5Q="},

    {"dp": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHsVgWpQ4Lw2sEcZ-BJuugYiUK5VNPUafp09Soy71B174_l_c6", 
    "story":"https://images1.zeebiz.com/images/ZB-EN/900x1600/2023/6/10/1686391335720_Snapinsta.app12160075248438457023074117174658584768199506n1080.jpg"},

    {"dp": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-4YbvE-R4dDvsyWHMCfRCfq1lA1PMs6kPweGsPGkPtgebbR0h", 
    "story":"https://im.rediff.com/movies/2014/jan/10hrithik-roshan15.jpg"},

    {"dp": "https://cdn.siasat.com/wp-content/uploads/2023/06/Virat-Kohli-1.jpg", 
    "story":"https://cdn.siasat.com/wp-content/uploads/2023/06/Virat-Kohli-1.jpg"},
];

let clutter = "";
let storiyan = document.querySelector("#storiyan");
let fullScreen = document.querySelector("#full-screen")
arr.forEach((val,idx)=>{
    clutter += `<div class="story">
    <img id = ${idx} src="${val.dp}" alt="">
</div>`;
})
storiyan.innerHTML = clutter;

storiyan.addEventListener("click",(dets)=>{
    // console.log(arr[dets.target.id].story)
    fullScreen.style.display = "block";
    fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(()=>{
        fullScreen.style.display = "none";
    },2000)
    
})