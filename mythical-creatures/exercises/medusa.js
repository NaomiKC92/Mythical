class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];

  }

  stare(victim) {
    // console.log(victim)
    this.statues.push(victim);
    victim.stoned = true;
    if (this.statues.length > 3) {
      // console.log(this.statues[1])
      this.statues[0].stoned = false;
      this.statues.pop();
    }
  }
}



module.exports = Medusa;