AFRAME.registerComponent('change-animation-on-keypress', {
    schema: {
        moveforwardCode: {default: 87}, // w
        moveleftCode: {default: 65}, //a
        movebackwardCode: {default: 83},
        moverightCode: {default: 68}
      },
    
      init: function() {
        var that = this;
        this.isWalking = false;
        this.playerModelIdle = document.querySelector('.head');
        document.body.onkeydown = function(e){
          if(e.keyCode == that.data.moveforwardCode){
            this.isWalking = true;
            that.forwardMovement();
          }
          else if(e.keyCode == that.data.moveleftCode){
            this.isWalking = true;
            that.leftMovement();
          }
          else if(e.keyCode == that.data.movebackwardCode){
            this.isWalking = true;
            that.backwardMovement();
          }
          else if(e.keyCode == that.data.moverightCode){
            this.isWalking = true;
            that.rightMovement();
          }
        }
        document.body.onkeyup = function(e){
          if(e.keyCode == that.data.moveforwardCode || that.data.moveleftCode || that.data.movebackwardCode || that.data.moverightCode){
            this.isWalking = false;
            that.Standing();
          }
        }
      },
        forwardMovement: function () {
            this.playerModelIdle.setAttribute('gltf-model','assets/WAlking.glb');
        },
        leftMovement: function () {
            this.playerModelIdle.setAttribute('gltf-model','assets//WalkStrafeLeft.glb');
        },
        backwardMovement: function () {
            this.playerModelIdle.setAttribute('gltf-model','assets/WalkBackward.glb');
        },
        rightMovement: function () {
          this.playerModelIdle.setAttribute('gltf-model','assets/WalkStrafeRight.glb');
        },
        Standing: function () {
          this.playerModelIdle.setAttribute('gltf-model','assets/remy@idle.glb');
        }
  });