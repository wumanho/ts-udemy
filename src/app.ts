const s1 = Symbol("key")
const s2 = Symbol("key")


function attr(val: string): void
function attr(val: number): void
function attr(val: number | string) {
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

function upperCase(target: any, key: string) {
    let value = target[key]
    const getter = () => value
    const setter = (newVal: string) => {
        value = newVal.toUpperCase()
    }
    // 初始化时把原本的值删掉
    if (delete target[key]) {
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        })
    }
}

class Person {
    @upperCase
    name: string = "hello"

    constructor() {
    }
}

const p:Person = new Person()
console.log(p.name)





