import Player from '@vimeo/player';
const player = new Player('vimeo-player');

const onPlay = function (data) {
  const currentTime = data.seconds;
//   console.log(currentTime);
  localStorage.setItem("videoplayer-current-time", currentTime);



};

player.on('timeupdate', onPlay);
const savedTime = localStorage.getItem("videoplayer-current-time");
console.log(savedTime);

player.setCurrentTime(savedTime).then(function(seconds) {

   
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
           
            break;

        default:
           
            break;
    }
});