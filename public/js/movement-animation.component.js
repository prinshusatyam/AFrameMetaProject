AFRAME.registerComponent('change-animation-on-keypress', {
    schema: {
        triggerKeyCode: {default: 32} // spacebar
      },
    
      init: function() {
        var that = this;
        this.isWalking = false;
        this.playerModelIdle = document.querySelector('#player-model');
        document.body.onkeyup = function(e){
          if(e.keyCode == that.data.triggerKeyCode){
            that.shoot();
          }
        } 
      },
    shoot: function () {
        console.log("hii");
        this.playerModelIdle.removeAttribute('gltf-model','animation-mixer');
        console.log("Unshoot!");
        this.playerModelIdle.setAttribute('gltf-model', '#player-model-walking');
    }
  });