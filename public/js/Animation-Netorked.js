window.ntExample = {
  randomColor: () => {
    return '#' + new THREE.Color(Math.random(), Math.random(), Math.random()).getHexString();
  }
};

AFRAME.registerComponent('player-info', {
  // notice that color and name are both listed in the schema; NAF will only keep
  // properties declared in the schema in sync.
  schema: {
    name: { type: 'string', default: 'user-' + Math.round(Math.random() * 10000) },
    clip: { type: 'string', default:  "Ramy_Walking" },
    color: {
      type: 'color', // btw: color is just a string under the hood in A-Frame
      default: window.ntExample.randomColor()
    }
  },

  init: function () {
    this.head = this.el.querySelector('.head');
    this.nametag = this.el.querySelector('.nametag');
    this.character = this.el.querySelector('.human-avatar');
    this.ownedByLocalUser = this.el.id === 'local-avatar';

    if (this.ownedByLocalUser) {
      // populate the html overlay with the correct name on init
      this.nametagInput = document.getElementById('username-overlay');
      this.nametagInput.value = this.data.name;

      // add the initial color to the html overlay color picker button
      document.querySelector('button').style.backgroundColor = this.data.color;
      document.querySelector('button').style.color = this.data.color;
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
    if (this.nametag) this.nametag.setAttribute('value', this.data.name);
    // console.log(this.character);
    // this.character.setAttribute('animation-mixer','clip','Ramy_Walking')
    // console.log(this.character);
    if (this.character) {
      
      console.log(this.character.getAttribute('animation-mixer'));
      this.character.setAttribute('animation-mixer', {clip: this.data.clip, crossFadeDuration: 1});
      console.log(this.character);
    }
  }
});