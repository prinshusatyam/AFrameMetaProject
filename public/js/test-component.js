
const animationNames = {
  forward: 'Walking',
  backward: 'WalkingBack',
  left: 'WalkStrafeLeft',
  right: 'walk_StrafeRight',
};

updateAnimationMixer = () => {

  const data = {}
  data.clip = 'none'
  Object.entries(animationNames).forEach((name) => {

    const el = document.getElementById(name[0])
    
    if (el.checked) {
      data.clip = name[1]
    }
  })

  

  const target = document.getElementById('trex1')
  target.setAttribute('animation-mixer', data)
}

document.addEventListener('DOMContentLoaded', () => {

  const inputs = document.querySelectorAll('input, select')

  inputs.forEach((input) => {
    input.addEventListener('change', updateAnimationMixer)
    input.addEventListener('click', updateAnimationMixer)
  })

  updateAnimationMixer()
})
