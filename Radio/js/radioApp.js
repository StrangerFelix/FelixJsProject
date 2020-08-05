//PoPuP Fun
function popup(text)
{
    alert(text);
};

// Player Class
class Player{
    constructor(){
        var container = document.getElementById('container');
        if(screen.width<500){
            container.style.width = screen.width + 'px';
        }
    }
}
// BTNs Class
class AudioPlayer
{
    constructor()
    {
        
        this.audioFile = document.getElementById('audioFile');
        this.audioTitle = document.getElementById('radioOneTitle');
        this.playBtn = document.querySelector('.play');
        this.nextAudio = document.getElementById('next');
        this.backAudio = document.getElementById('back');
        this.isPlayed ;
        this.songName = [];
        this.songName[0] = 'The Weeknd - The Zone';
        this.songName[1] = 'The Weeknd - Coming Down';
        this.songName[2] = 'The Weeknd - House Of Ballons';
        this.songSource = [];
        this.songSource[0] = 'Audio/theZone.mp3';
        this.songSource[1] = 'Audio/comingDown.mp3';
        this.songSource[2] = 'Audio/houseOfBallons.mp3';
        this.server = 0;
        this.playBtn.addEventListener('click', ()=>{
            this.playerBtns();
        });
        this.backAudio.addEventListener('click', ()=>{
            if(this.server > 0)
            {
                -- this.server;
            }else
            {
                this.server = 2;
            }
            this.setResourse();
        });
        this.nextAudio.addEventListener('click', ()=>{
            if(this.server < this.songSource.length-1)
            {
                ++this.server;
            }else
            {
                this.server = 0;
            }
            this.setResourse();
        });
        this.setResourse();
    }
    playerBtns()
    {
        if(this.isPlayed == false)
        {
            this.audioFile.play();
            this.isPlayed = true;
            this.playBtn.src = 'IMG/pause.png';
        }else if(this.isPlayed == true)
        {
            this.audioFile.pause();                
            this.playBtn.src = 'IMG/play-button.png';
            this.isPlayed = false;

        }
    }
    setResourse()
    {
        
        this.audioFile.src = this.songSource[this.server];
        this.audioTitle.innerHTML = this.songName[this.server];
        this.playerBtns();
        this.isPlayed = false;
    }
}
class Volume
{
    constructor()
    {
        this.volumeInput = document.getElementById('rangeVolume');
        this.timeInput = document.getElementById('rangeSong');
        this.timeInput.playbackRate = 1;
        this.audioFile = document.getElementById('audioFile');
        this.audioFile.volume = 50 / 100;
        this.volumeInput.addEventListener('change', ()=>{
            this.audioFile.volume = this.volumeInput.value / 100;
        })
        this.timeInput.addEventListener('change', ()=>{
            this.audioFile.playbackRate = this.timeInput.value / 100;
        })
    }

}

//OnLoad Funs
window.onload = ()=>{
    new Player();
    new AudioPlayer();
    new Volume();
}