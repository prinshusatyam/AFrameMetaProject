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
        document.body.onkeyup = function(e){
          if(e.keyCode == that.data.moveforwardCode){
            that.forwaedMovement();
          }
          else if(e.keyCode == that.data.moveleftCode){
            that.leftMovement();
          }
          else if(e.keyCode == that.data.movebackwardCode){
            that.backwardMovement();
          }
          else if(e.keyCode == that.data.moverightCode){
            that.rightMovement();
          }
        } 
      },
        forwaedMovement: function () {
            console.log("hii");
            console.log(this.playerModelIdle)
            console.log("Unshoot!");
            this.playerModelIdle.setAttribute('gltf-model','assets/WAlking.glb')
            console.log(this.playerModelIdle)
        },
        leftMovement: function () {
            console.log("hii");
            console.log(this.playerModelIdle)
            console.log("Unshoot!");
            this.playerModelIdle.setAttribute('gltf-model','assets//WalkStrafeLeft.glb')
            console.log(this.playerModelIdle)
        },
        backwardMovement: function () {
            console.log("hii");
            console.log(this.playerModelIdle)
            console.log("Unshoot!");
            this.playerModelIdle.setAttribute('gltf-model','assets/WalkBackward.glb')
            console.log(this.playerModelIdle)
        },
        rightMovement: function () {
          console.log("hii");
          console.log(this.playerModelIdle)
          console.log("Unshoot!");
          this.playerModelIdle.setAttribute('gltf-model','assets/WalkStrafeRight.glb')
          console.log(this.playerModelIdle)
        }
  });