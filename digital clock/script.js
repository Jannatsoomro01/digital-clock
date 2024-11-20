function showtime(){

    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();

    document.getElementById("clock"). textContent =  `${h} : ${m} : ${s}`
}

setInterval(showtime,1000);
showtime();