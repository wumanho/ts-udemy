// interface Speakable {
//     name: string,
//
//     speak(): void
// }
//
// interface Person {
//     readonly id: string;
//     name: string,
//
//     [key: string]: any
// }
//
// const p1: Person = {
//     id: '5',
//     name: "wumanho",
// }
//
// interface Discount {
//     (price: number): number
// }
//
// const discount: Discount = (price: number): number => {
//     return price * 0.8
// }

interface Type {
    (name: string): void
    age:number
}

interface Type2 {
    a: string
    logA: () => void
}

// const t2: Type2 = {
//
// }
