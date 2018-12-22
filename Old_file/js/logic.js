const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

var countDown = new Date('Oct 29, 2019 18:00:00').getTime();
function countdown() {

    var now = new Date().getTime(),
        distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    // do something later when date is reached
    if (distance < 0) {
        clearInterval(distance);
        document.getElementById("head").innerText = "Mazel Tov"
        document.getElementById('days').innerText = "0",
        document.getElementById('hours').innerText = "0",
        document.getElementById('minutes').innerText = "0",
        document.getElementById('seconds').innerText = "0";
        
    }
    setInterval(countdown, second)
}
countdown();

window.onload = function () {

    function changeImage() {   
        var images = [
            "./images/photo1.jpg",
            "./images/photo2.jpg",
            "./images/photo3.jpg"
        ]
        var i = Math.floor((Math.random() * 3));
        $("#photo-container").css("backgroundImage", 'url("' + images[i] + '")');
    }
    window.setInterval(changeImage, 5000);
}
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.fixed-top').css({'background':'transparent','color':'white'});

    } else{
        $('.fixed-top').css({'background':'rgba(255,255,255,0.9)','color':'black'});
    }
});