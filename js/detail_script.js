function f() {
    var videoImg = sessionStorage.getItem('videoImg')
    var videoName = sessionStorage.getItem('videoName')
    var videoNameDetail = sessionStorage.getItem('videoNameDetail')

    var videoImgs= document.getElementById('videoImg')
    var videoNames= document.getElementById('videoName')
    var videoNameDetails= document.getElementById('videoNameDetail')
    
    videoImgs.src = videoImg;
    videoNames.innerHTML =videoName;
    videoNameDetails.innerHTML = videoNameDetail;

    console.log(Img+Name+Detail)
}f();