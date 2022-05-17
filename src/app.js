var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var s1 = Symbol("key");
var s2 = Symbol("key");
function attr(val) {
}
// function addNameEat(constructor: Function,) {
//     constructor.prototype.name = "wumanho"
//     constructor.prototype.eat = () => {
//         console.log("eat")
//     }
// }
//
// @addNameEat
// class Person {
//     name!: string;
//     eat!: Function;
//
//     constructor() {
//     }
// }
//
// const p1: Person = new Person()
// console.log(p1.name)
function upperCase(target, key) {
    var value = target[key];
    var getter = function () { return value; };
    var setter = function (newVal) {
        value = newVal.toUpperCase();
    };
    // 初始化时把原本的值删掉
    if (delete target[key]) {
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
var Person = /** @class */ (function () {
    function Person() {
        this.name = "hello";
    }
    __decorate([
        upperCase
    ], Person.prototype, "name");
    return Person;
}());
var p = new Person();
console.log(p.name);
