// 可选
// type MyPartial<T> = {
//     [F in keyof T]?: T[F]
// }
//
// interface A {
//     name: string
//     age: number
//     boo: boolean
// }
//
// type Par = MyPartial<A>
//
// interface Company {
//     id: string,
//     age: number
// }
//
// interface AB {
//     name: string
//     age: number
//     boo: boolean
//     company: Company
// }
//
// // 递归可选
// type MyDeepPartial<T> = {
//     [F in keyof T]?: T[F] extends object ? MyDeepPartial<T[F]> : T[F]
// }
//
// type Par1 = MyDeepPartial<AB>
//
// const ppp: Par1 = {}

// function mapObject<K extends string | number, T, U>(obj: Record<K, T>, map: (x: T) => U) {
//     let result:any = {}
//     for (let key in obj) {
//         result[key] = map(obj[key])
//     }
//     return result
// }
//
// let obj = {
//     count1: 1,
//     count2: 2,
//     3: 3
// }
// let map = (x: number) => {
//     return x * 2 + ''
// }
// //<索引类型，值类型，返回值类型>
// let newObj = mapObject<string | number, number, string>(obj, map)

// type Keys = keyof any


