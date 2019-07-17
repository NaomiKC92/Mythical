class Unicorn {
  constructor(name, color, spark) {
    this.name = name;
    this.color = color || 'white';
  }
  isWhite() {
    if (this.color !== 'white') {
      return false;
    };
    }
    says(sparkly) {
      return `**;* ${sparkly} *;**`
  }
}

module.exports = Unicorn;
