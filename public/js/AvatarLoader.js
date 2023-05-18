const DisplayplayerModel = document.getElementById('avatar-canvas');
const RemyplayerModel = document.getElementById('player-model');
const RexplayerModel = document.getElementById('test-model');
const nextAvatarButton = document.getElementById('next-avatar-button');

let currentModel = DisplayplayerModel;
nextAvatarButton.addEventListener('click', () => {
    console.log("hii");
    currentModel.setAttribute('gltf-model','assets/TRex.glb');
    currentModel.setAttribute('scale', {x:0.1, y:0.1, z:0.1});
});