const video = document.querySelector('.video-container')
const button = document.querySelector('.switch')

class Player {
    constructor(video, button) {
        this.video = video
        this.button = button
    }

    toggleVideo() {
        if (this.video.classList.contains('played')) {
            this.video.pause()
            this.button.textContent = 'Play'
            this.video.classList.remove('played')
        } else {
           this.video.play()
            this.button.textContent = 'Pause'
            this.video.classList.add('played')
        }
    }
}

const player = new Player(video, button)
const trigger = () => player.toggleVideo()
button.addEventListener('click', trigger)