const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() =>{
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = mario.offsetTop;
    
    
    if (pipePosition < 205 && pipePosition > 120 &&  marioPosition > 200) {
      
      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosition}px`
      mario.style.animation = 'none';
      mario.style.top = `${marioPosition}px`

      mario.src = './game/game-over.png'
      mario.style.width = '50px'
      mario.style.marginleft = '50px'
      
      clearInterval(loop);
    }  

   
    

}, 10)

document.addEventListener('keydown', jump);
