playBtn = document.getElementById('play')
musicContainer = document.getElementById('music-container')
title = document.getElementById('title')
audio = document.getElementById('audio')
cover = document.getElementById('cover')
progress = document.getElementById('progress')
progressContainer = document.getElementById('progress-container')
nextBtn = document.getElementById('next')
prevBtn = document.getElementById('prev')

//song titles
songs = ['hey', 'summer', 'ukelele']

//keep track of selected song
let songIndex = 1

loadSong(songs[songIndex])

function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

function playSong() {
    musicContainer.classList.add('play')
    audio.play()
    playBtn.querySelector('i.fa-solid').classList.remove('fa-play')
    playBtn.querySelector('i.fa-solid').classList.add('fa-pause')
}

function pauseSong() {
    musicContainer.classList.remove('play')
    audio.pause()
    playBtn.querySelector('i.fa-solid').classList.add('fa-play')
    playBtn.querySelector('i.fa-solid').classList.remove('fa-pause')
}

audio.play()
function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`

    if (progressPercent == 100) {
        if (songIndex == 2) {
            songIndex = 0
        } else {
            songIndex += 1
        }
    }
}

function setProgress(e) {
    width = this.clientWidth
    clickX = e.offsetX
    duration = audio.duration
    audio.currentTime = (clickX / width) * duration
}

playBtn.addEventListener('click', () => {
    isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

nextBtn.addEventListener('click', () => {
    if (songIndex == 2) {
        songIndex = 0
    } else {
        songIndex += 1
    }
})

prevBtn.addEventListener('click', () => {
    if (!(songIndex == 0)) {
        songIndex -= 1
    } else {
        songIndex = 2
    }
})
