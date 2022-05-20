// type A = string | number
// type B = string | boolean
//
// type C = A & B

// interface A {
//     name: string
//     is: boolean
// }
//
// interface B extends A {
//     age: number
// }
//
// const my: B = {
//     name: 'w',
//     age: 1,
//     is: true
// }

// interface DefaultProps {
//     name?: string
//     age?: number
// }
//
// let defaultProps: DefaultProps = {
//     name:"w",
//     age:19
// }
//
// type props = typeof defaultProps
//
// function add(a:any):number {
//     return a + 1
// }
//
// function mixin<T, U>(one: T, two: U) {
//     const result = <T & U>{}
//     for (const key in one) {
//         (result as T)[key] = one[key]
//     }
//     for (let twoKey in two) {
//         (result as U)[twoKey] = two[twoKey]
//     }
//     return result
// }
//
// const x = mixin({name: "wu"}, {age: 19})

// interface Fish {
//     name1: string
// }
//
// interface Water {
//     name2: string
// }
//
// interface Bird {
//     name3: string
// }
//
// interface Sky {
//     name4: string
// }
//
// type Condition<T> = T extends Fish ? Water : Sky
//
// const c: Condition<Fish> = {name2: "shui"}
//
// // 条件类型分发
// const c1: Condition<Fish | Bird> = {name4: 'sky'}
// // Diff
// type Diff<T, U> = T extends U ? never : T
// type R = Diff<"a" | "b" | "c" | "d" | "e", "a" | "b" | "c">
// // Filter
// type Filter<T, U> = T extends U ? T : never
// type R2 = Filter<"a" | "b" | "c" | "d" | "e", "a" | "b" | "c">

// type myNonNullable<T> = T extends null | undefined ? never : T
// type t1 = myNonNullable<"a" | null | undefined>

// 获取返回值类型
// type myReturnType<T> = T extends (...args: any[]) => infer R ? R : never
//
// function getUser() {
//     return {name: "wu", age: 18}
// }
//
// type getUserType = typeof getUser
// type R = myReturnType<getUserType>
// let u:R = {
//     name:"123",
//     age:1
// }

// type myConstructorParameters<T> = T extends new (...args: infer P) => any ? P : never
//
// class Person1 {
//     name: string
//
//     constructor(name: string) {
//         this.name = name
//     }
// }
//
// type P = myConstructorParameters<typeof Person1>

// type ElementOf<T> = T extends Array<infer E> ? E : never
// type tuple = [string, number]
// type TupleToUnion = ElementOf<tuple>

// type T1 = { name: String }
// type T2 = { age: number }
// type Param = { a: (x: T1) => void, b: (x: T2) => void }
// type ToIntersection<T> = T extends { a: (arg: infer R) => void, b: (arg: infer R) => void } ? R : never
// type T3 = ToIntersection<Param>
// const t3: T3 = {name: 'w', age: 1}

