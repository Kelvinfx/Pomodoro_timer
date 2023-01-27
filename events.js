import {
  buttonPlay,
   buttonPause,
   buttonStop,
   buttonSet,
   buttonSounOn,
   buttonSounOff,
} from "./elements.js"



export default function ({controls, timer, sound}) {

buttonPlay.addEventListener('click', function(){

  controls.play()
  timer.countDown()
  sound.PressButton()

})

buttonPause.addEventListener('click', function(){ 
  controls.pause()
  timer.hold()
  sound.PressButton()
  
})  

buttonStop.addEventListener('click', function(){
  controls.reset()
  timer.reset()
  sound.PressButton() 
})

buttonSounOn.addEventListener('click', function(){
  buttonSounOn.classList.add('hide')
  buttonSounOff.classList.remove('hide')
  sound.bgAudio.pause()
})

buttonSounOff.addEventListener('click', function(){
  buttonSounOff.classList.add('hide')
  buttonSounOn.classList.remove('hide')
  sound.bgAudio.play()
})

buttonSet.addEventListener('click', function(){
  let newMinutes = controls.getMinutes()

  if(!newMinutes){
    timer.reset ()
    return 
  }

  timer.updateDisplay(newMinutes, 0 )
  timer.updateMinutes(newMinutes)
  
})


}