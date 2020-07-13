// 原始类型
let str: string = '1111'
let bool: boolean = false
let bool1: Boolean = new Boolean('1')
// console.log(bool1 ? '111' : '2222')

// let arr: (number | string)[] = [1, '2']
let arr: Array<number | string> = [1, 2, 3]

// 元祖
let tuple: [number, string] = [1, '2']
tuple.push(1, 2, 4)
console.log(tuple)
// tuple[2]

// 函数
let add = (x: number, y: number): number => x + y

let compute: (x: number, y: number) => number

// 对象
let obj: object

let test = '111'
// test = 1

// never
let a: () => never = () => {
    throw new Error('111')
}
// 枚举
const enum Month {
    Jan = 1,
    Feb,
    Jun
}
let test2 = [Month.Feb, Month.Jun]
console.log(test2)

// 枚举类型
enum E {
    a,
    b
}
enum F {
    a = 1,
    b = 2
}
enum G {
    a = 'test1',
    b = 'test2'
}

let e1: E = 5
let e2: F = 5
let e3: G = G.a
let e4: G.a = G.a

// interface
interface Iprops {
    name: string;
    age: number;
}
const fn = (arg: Iprops) => {
    console.log(arg)
}
const result = {
    name: 'zzz',
    age: 11,
    gender: 'female'
}
fn(result)

// 任意属性
interface IArray {
    0: string;
    1: string;
}
const arr1: IArray = ['aaa', 'bb']
const arr2: IArray = {
    0: '111',
    1: '222',
    // 4: "11"
}