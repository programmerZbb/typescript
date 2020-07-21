class Dog {
    constructor (name: string) {
        // this.name = name
    }
    protected name: string = '11'
    public run() {
        console.log(111)
    }
}
// const dog = new Dog('2')
// dog.name

class Husky extends Dog {
    constructor (name: string, public color: string) {
        super(name)
        // this.name = name
        this.color = color
    }
    // name: string
    // public color: string
    public fn () {
        super.run()
    }
    static test: string = '222'
}
const hus = new Husky('wowo', 'red')
// console.log(hus.run(), '----测试')

abstract class Animal {
    constructor (name: string) {
        this.name = name
    }
    public name: string
    abstract eat(food: string): void
    // public test: () => void
}
console.log(Animal)
class Cat extends Animal {
    constructor (name: string) {
        super(name)
    }
    public eat(food: string) {

    }
}

class A {
    state = 1
    // private state2 = 2
    // protected state3 = 3
}
interface IAclass extends A {

}
class N implements IAclass {
    state = 1
    state3 = 2
    // private state2 = 2
}
