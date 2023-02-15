class Sounds {
    constructor() {
      this.sounds = {
        dealing: new Audio("dealing.mp3"),
        shuffling: new Audio("shuffling.mp3"),
        hit: new Audio("hit.mp3"),
        stand: new Audio("stand.mp3"),
        stay: new Audio("stay.mp3"),
        boo: new Audio("boo.mp3"),
        bell: new Audio("bell.mp3"),
        tick: new Audio("tick.mp3"),
        cheer: new Audio("cheer.mp3")
      };
    }
  
    playSound(soundName) {
      const sound = this.sounds[soundName];
      if (sound) {
        sound.play();
      }
    }
  }
  