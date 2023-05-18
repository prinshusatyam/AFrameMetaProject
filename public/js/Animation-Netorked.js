AFRAME.registerComponent('player-info', {

  init: function () {
    this.avatar = document.querySelectorAll('.avatar');
    console.log(this.avatar);
    this.character = this.el.querySelectorAll('.human-avatar');
    console.log(this.character);
    this.ownedByLocalUser = this.el.id === 'player-networked';
    this.listUsers();
    console.log(this.avatar[1]);
  },
  tick: function(){
  },
  // here as an example, not used in current demo. Could build a user list, expanding on this.
  listUsers: function () {
    console.log(
      'userlist',
      [...document.querySelectorAll('[player-info]')].map((el) => el.object3D)
    );
  },
});