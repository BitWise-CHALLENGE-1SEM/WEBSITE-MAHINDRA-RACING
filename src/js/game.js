const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const audio = document.querySelector("#audio");
const audioJump = document.querySelector("#audio-jump");
const soundtrack = document.querySelector("#soundtrack")

addEventListener('keydown', function(event){
    const newDirect = event.keyCode;
    if(newDirect == 87){
        up = true
        mario.classList.add("up")
        mario.classList.remove("removeup")
        mario.classList.remove("down")
        mario.classList.remove("removedown")

    }
    if(newDirect == 83){
        down = true
        mario.classList.add("down")
        mario.classList.remove("removedown")
        mario.classList.remove("up")
        mario.classList.remove("removeup")
    }
})
addEventListener('keyup', function(event){
    const newDirect = event.keyCode
    if(newDirect == 87){
        up = false
        mario.classList.add("removeup")
        
        
    }
    if(newDirect == 83){
        down = false
        mario.classList.add("removedown")
        
    
    }
})





const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px' , '' );
    const cloudsPosition = clouds.offsetLeft;

    soundtrack.play()
/*Um if para ganhar o boost + audio ao acertar o ATACK MODE */
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 90){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        /*clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;*/

        mario.src = './img/game-over.png'
        mario.style.width = '77px'
        mario.style.marginLeft = '40px'

        document.getElementById("game-over").style.display = "block";

        audio.play()
        soundtrack.pause()

        clearInterval(loop);

    }  else{

        document.getElementById("game-over").style.display = "none";
        
    }
    /*OUTRO if para MORRER apos acertar algum carro */
}, 10);






