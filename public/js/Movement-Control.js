const animationNames = {
  forward: 'Walking',
  backward: 'WalkingBack',
  left: 'WalkStrafeLeft',
  right: 'walk_StrafeRight',
};

const pressedKeys = {
  w: false,
  a: false,
  s: false,
  d: false,
};

updateAnimationMixer = () => {
  const data = { clip: 'Armature|TRex_Idle' };

  if (pressedKeys.w) {
    data.clip = animationNames.forward;
  } else if (pressedKeys.s) {
    data.clip = animationNames.backward;
  } else if (pressedKeys.a) {
    data.clip = animationNames.left;
  } else if (pressedKeys.d) {
    data.clip = animationNames.right;
  }

  const target = document.getElementById('player-networked');
  target.setAttribute('animation-mixer',{clip: data.clip});
};

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key in pressedKeys) {
      pressedKeys[key] = true;
      updateAnimationMixer();
    }
  });

  document.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase();
    if (key in pressedKeys) {
      pressedKeys[key] = false;
      updateAnimationMixer();
    }
  });
});
