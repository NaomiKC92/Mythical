class Wizard {
  constructor(obj) {
    this.name = obj.name;
    console.log(obj.name, obj.bearded)
    this.bearded = this.checkBearded(obj);
    this.isRested = true;
    this.counter = 0;
}
checkBearded(obj) {
  if (obj.bearded === undefined) { 
    return true;
  } else {
    return false;
  }
}
incantation(power) {
  return power.toUpperCase();
}

cast(spell) {
  this.counter++;
  if (this.counter > 2) {
    this.isRested = false;
  }
  return spell.toUpperCase()
}

}



module.exports = Wizard