// function createArray<T>(length: number, value: T): Array<T> {
//     const result: T[] = []
//     for (let i = 0; i < length; i++) {
//         result.push(value)
//     }
//     return result
// }
//
// let my = createArray<string>(3, "hi")
// console.log(my)

// interface Calculate {
//     <T>(a: T, b: T): T
// }
//
// const cal: Calculate = <T extends number>(a: T, b: T): T => {
//     return a + b
// }
//
// console.log(cal(12, 15))

// function effect<T>(
//     fn: () => T,
// ) {
//     console.log(fn())
// }
//
//
// effect<number>(() => {
//     return 123
// })

// function swap<A, B>(tuple: [A, B]): [B, A] {
//     return [tuple[1], tuple[0]]
// }
//
// console.log(swap([5, 6]))

// interface T2<T> {
//     arg: T
// }

// function log<T extends Logger>(msg: T) {
//     console.log(msg.toFixed())
// }
//
// interface Logger {
//     toFixed: () => number
// }
//
// const loggers: Logger = {
//     toFixed() {
//         return 5
//     }
// }
//
// log(loggers)

// export type DebuggerEvent = {
//     effect: string
// } & DebuggerEventExtraInfo
//
// export type DebuggerEventExtraInfo = {
//     target: object
//     type: object | number
//     key: any
//     newValue?: any
//     oldValue?: any
//     oldTarget?: Map<any, any> | Set<any>
// }
//
//
// const debugTest:DebuggerEvent = {
//     effect:'w',
//     target: {},
//     type: 123,
//     key: 123,
//     newValue: 123,
//     oldValue: 123,
//     oldTarget: new Set<number>()
// }
//
// type Cart<T> = {list:T[]} | T[]
//
// const cart:Cart<number> = { list:[1,2,3]}

// type Func<T extends any[], R> = (...a: T) => R
//
// export default function compose(): <R>(a: R) => R
//
// export default function compose<A, T extends any[], R>(
//     f1: (a: A) => R,
//     f2: Func<T, A>
// ): Func<T, R>
//
// export default function compose(...func: Function[]) {
//     if (func.length === 0) {
//         return <T>(arg: T): T => arg
//     }
// }
//
//
// function add1(str) {
//     return str + '1'
// }
//
// function add2(str) {
//     return str + '2'
// }
//
// compose<string, any[], string>(add1, add2)("hi")

type Func = (a: number, n: number) => void

let m: Func

function f1(a: number) {
    console.log(a)
}

m = f1

// m(1)

// type GetPerson = () => { name: string, age: number }
// let getP: GetPerson
//
// function g() {
//     return {name: 'wumanho', age: 18}
// }
//
// function g2() {
//     return {name: "wumanho", age: 10, gender: 0}
// }
//
// function g3() {
//     return {name: "wumanho"}
// }
//
// getP = g2
//
// console.log(getP())


// class Animal {
// }
//
// class Dog extends Animal {
//     public name: string = "Dog"
// }
//
// class BlackDog extends Dog {
//     public age: number = 19
// }
//
// class WhiteDog extends Dog {
//     public home: string = "gz"
// }
//
// let animal: Animal
// let dog: Dog
// let blackDog: BlackDog
// let whiteDog: WhiteDog
//
// type CallBack = (dog: Dog) => Dog
//
// function test(callBack: CallBack): void {
// }
//
// type ChildToChild = (blackDog: BlackDog) => BlackDog
// let childToChild: ChildToChild
// test(childToChild)
//
// type ParentToChild = (animal: Animal) => BlackDog
// let ParentToChild: ParentToChild
// test(ParentToChild)

interface Bird {
    wing: number
}

interface Dog {
    leg: number
}

function getNumber(x: Bird | Dog) {
    if ("wing" in x){
        console.log(x)
    }else{
        console.log(x)
    }
}

let b:Bird = {
    wing:3
}
getNumber(b)

