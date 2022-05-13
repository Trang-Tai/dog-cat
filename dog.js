function Dog(name) {
    this.name = name;
}

Dog.prototype.sayHi = function() {
    console.log('hello, i am ', this.name);
}

module.exports = Dog;
