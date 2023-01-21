
var audio = new Audio('/happyNewYear/image/index.mp3');
audio.play();
audio.loop = true;

var fut = new Date("jan 22, 2023 00:00:00").getTime()
let x = setInterval(function stime() {
    var now = new Date().getTime()
    var D = fut - now
    var days = Math.floor(D / (1000 * 60 * 60 * 24))
    var hours = Math.floor(D / (1000 * 60 * 60))
    var minutes = Math.floor(D / (1000 * 60))
    var seconds = Math.floor(D / (1000))
    hours %= 24
    minutes %= 60
    seconds %= 60
    document.getElementById("days").innerText = days
    document.getElementById("hours").innerText = hours
    document.getElementById("minutes").innerText = minutes
    document.getElementById("seconds").innerText = seconds

    if (D < 0) {
        clearInterval(x);
        window.location.href = "intro.html"
    }
}, 0.1);

var images = [
    'kn_1.jpg', 'kn_1_1.jpg', 'kn_2.jpg', 'kn_3.jpg', 'kn_14.jpg', 'kn_5.jpg', 'kn_6.jpg', 'kn_7.jpg', 'kn_8.jpg', 'kn_9.jpg',
    'kn_10.jpg', 'kn_11.jpg', 'kn_12.jpg', 'kn_13.jpg', 'kn_13_1.jpg', 'kn_14.jpg', 'kn_15.jpg', 'kn_16.jpg', 'kn_17.jpg', 'kn_18.jpg',
    'kn_19.jpg', 'kn_20.jpg', 'kn_21.jpg', 'kn_22.jpg', 'kn_23.jpg', 'kn_24.jpg', 'kn_23_1.jpg', 'kn_24_1.jpg', 'kn_25.jpg', 'kn_26.jpg', 'kn_27.jpg',
    'kn_28.jpg', 'kn_29.jpg', 'kn_30.jpg', 'kn_31.jpg', 'kn_32.jpg', 'kn_33.jpg', 'kn_34.jpg', 'kn_35.jpg', 'kn_36.jpg',
    'kn_37.jpg', 'kn_38.jpg', 'kn_39.jpg', 'kn_40.jpg', 'kn_41.jpg', 'kn_42.jpg'
];
let set_1 = document.querySelectorAll('.set-radom');
for (let i = 0; i < set_1.length; i++) {
    let val_image = Math.floor(Math.random() * images.length);
    document.getElementById("set-1-" + i).style.backgroundImage = 'url(image/' + images[val_image] + ')';
}
var timer = {
    interval: null,
    seconds: 20,

    start: function () {
        var self = this;

        this.interval = setInterval(function () {
            self.seconds--;

            if (self.seconds == 0) {
                for (let i = 0; i < set_1.length; i++) {
                    let val_image = Math.floor(Math.random() * images.length);
                    console.log(val_image);
                    document.getElementById("set-1-" + i).style.backgroundImage = 'url(image/' + images[val_image] + ')';
                }
                self.seconds = 20;
            }
        }, 1000);
    },

    stop: function () {
        window.clearInterval(this.interval)
    }
}

timer.start();