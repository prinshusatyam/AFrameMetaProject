AFRAME.registerComponent('player-info', {
  // notice that color and name are both listed in the schema; NAF will only keep
  // properties declared in the schema in sync.
  schema: {
    name: { type: 'string', default: 'user-' + Math.round(Math.random() * 10000) },
  },

  init: function () {

    this.ownedByLocalUser = this.el.id === 'player';
    if (this.ownedByLocalUser) {
      // populate the html overlay with the correct name on init
      this.nametagInput = document.getElementById('username-overlay');
      this.nametagInput.value = this.data.name;
      
    }
  },

  // here as an example, not used in current demo. Could build a user list, expanding on this.
  listUsers: function () {
    console.log(
      'userlist',
      [...document.querySelectorAll('[player-info]')].map((el) => el.components['player-info'].data.name)
    );
  },
  update: function () {
    this.listUsers();
  }
});