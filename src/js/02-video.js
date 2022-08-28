import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const SAVED_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(savedTime, 1000));
player.on('ended', clearLocalStorage);

function savedTime (e)
  {localStorage.setItem(SAVED_KEY, e.seconds);};

function clearLocalStorage ()
  {localStorage.removeItem(SAVED_KEY);};

onFinishedTime()

function onFinishedTime() {
    if (localStorage.getItem(SAVED_KEY)) {
      player.setCurrentTime(localStorage.getItem(SAVED_KEY));
    }
}

