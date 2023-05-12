AFRAME.registerComponent('player-info', {
    schema: {
      clip: { type: 'string', default:  "Ramy_Idle" },
    },

    init: function() {
      this.character = document.querySelector('.human-avatar');
      this.ownedByLocalUser = this.el.id === "local-avatar";
    },

    update: function(oldData) {
      if (this.character) {
        console.log(this.data.clip)
        if (oldData.clip !== this.data.clip) {
          this.character.setAttribute('animation-mixer', {clip: this.data.clip, crossFadeDuration: 1});
        }
      }
    }
  });