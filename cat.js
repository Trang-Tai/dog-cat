function Cat(name) {
    this.name = name;
}

Cat.prototype.sayHi = function() {
    console.log('tao la', this.name);
}

module.exports = Cat;