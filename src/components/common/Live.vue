<template>
    <div class="liveWindows">
        <video id="videoElement" controls crossorigin>
        </video>
    </div>
</template>

<script>
    import '../../assets/js/plyr.js'
    import '../../assets/js/flv.min.js'
    import svg from '../../assets/svg/plyr.svg'
    (function(d, p){
        var a = new XMLHttpRequest(),
            b = d.body;
        a.open("GET", p, true);
        a.send();
        a.onload = function(){
            var c = d.createElement("div");
            c.style.display = "none";
            c.innerHTML = a.responseText;
            b.insertBefore(c, b.childNodes[0]);
        }
    })(document, svg);

    export default {
        data() {
            return {
            }
        },
        mounted() {
            console.log('直播视频组件加载完成')
            var controls = ["<div class='plyr__controls'>",
                "<button type='button' id='LiveButton'>LIVE",
                "</button>",
                "<button type='button' data-plyr='play'>",
                "<svg><use xlink:href='#plyr-play'></use></svg>",
                "<span class='plyr__sr-only'>Play</span>",
                "</button>",
                "<button type='button' data-plyr='pause'>",
                "<svg><use xlink:href='#plyr-pause'></use></svg>",
                "<span class='plyr__sr-only'>Pause</span>",
                "</button>",
                "<button type='button' data-plyr='mute'>",
                "<svg class='icon--muted'><use xlink:href='#plyr-muted'></use></svg>",
                "<svg><use xlink:href='#plyr-volume'></use></svg>",
                "<span class='plyr__sr-only'>Toggle Mute</span>",
                "</button>",
                "<span class='plyr__volume'>",
                "<label for='volume{id}' class='plyr__sr-only'>Volume</label>",
                "<input id='volume{id}' class='plyr__volume--input' type='range' min='0' max='10' value='5' data-plyr='volume'>",
                "<progress class='plyr__volume--display' max='10' value='0' role='presentation'></progress>",
                "</span>",
                "<button type='button' data-plyr='captions'>",
                "<svg class='icon--captions-on'><use xlink:href='#plyr-captions-on'></use></svg>",
                "<svg><use xlink:href='#plyr-captions-off'></use></svg>",
                "<span class='plyr__sr-only'>Toggle Captions</span>",
                "</button>",
                "<button type='button' data-plyr='fullscreen' style='position: absolute; right: 15px;'>",
                "<svg class='icon--exit-fullscreen'><use xlink:href='#plyr-exit-fullscreen'></use></svg>",
                "<svg><use xlink:href='#plyr-enter-fullscreen'></use></svg>",
                "<span class='plyr__sr-only'>Toggle Fullscreen</span>",
                "</button>",
                "</div>"].join("");
            var players = plyr.setup(document.querySelector("#videoElement"),{
                clickToPlay: false,

                html: controls
            })[0];

            if (flvjs.isSupported()) {
                var videoElement = document.getElementById('videoElement');
                var flvPlayer = flvjs.createPlayer({
                    type: 'flv',
                    url: 'http://10.1.65.78:8080/live/livestream.flv'
                });
                flvPlayer.attachMediaElement(videoElement);
                console.log('liveWindow--------自动播放')
                flvPlayer.load();
                flvPlayer.play();
            }

            players.on('pause', function(event) {
                console.log('liveWindow--------click 暂停')
                flvPlayer.unload();
                flvPlayer.pause()
            });

            players.on('play', function(event) {
                console.log('liveWindow--------播放')
                flvPlayer.load();
                flvPlayer.play();
            });
        }
    }
</script>

<style>
    @import "../../assets/css/plyr.css";

    .liveWindows {
        width: 100%;
        height: 100%;
    }

    .plyr--video .plyr__controls button.tab-focus:focus, .plyr--video .plyr__controls button:hover {
        background: rgb(76,175,80);
        color: #fff;
    }

    .plyr__progress--played, .plyr__volume--display {
        z-index: 1;
        color: rgb(76,175,80);
        background: 0 0;
        transition: none;
    }

    #LiveButton {
        height: 32px;
        margin-right: 5px;
        background: rgb(76,175,80);
    }
</style>