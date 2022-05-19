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
