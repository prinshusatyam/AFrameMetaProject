AFRAME.registerComponent('constrain-look-controls', {
    init: function() {
      this.rig =document.querySelector('#rig');
    },
    tick: function(){
        var xRot = this.rig.getAttribute("rotation").x;
        
        if(xRot!=0){
            this.rig.setAttribute("rotation",{x:0, y:this.rig.getAttribute("rotation").y, z:this.rig.getAttribute("rotation").z});
        }
    }
  });