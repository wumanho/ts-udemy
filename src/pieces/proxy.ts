export {}

// Proxy 代理
type Proxy<T> = {
    get: () => T
    set: (val: T) => void
}
type Proxify<T> = {
    [P in keyof T]: Proxy<T>
}

function proxify<T extends object>(obj: T): Proxify<T> {
    let result: any = {}
    for (let key in obj) {
        type KeyType = typeof key
        result[key] = {
            get() {
                return obj[key]
            },
            set(val: T[KeyType]) {
                obj[key] = val
            }
        }
    }
    return result
}

interface Props {
    name: string,
    age: number
}

let props: Props = {
    age: 0,
    name: "wu"
}

let proxy = proxify<Props>(props)
console.log(proxy)
