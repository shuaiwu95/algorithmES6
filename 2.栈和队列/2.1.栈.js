/* 栈 */

// 基础理论：
// “栈” 是一种遵循 “后进先出” 原则的有序数列
// “栈顶”：新添加的元素都靠近栈顶，另一端为 “栈底”
// 使用场景：用在编程语言的编译器和内存中保存变量、方法调用等。
// 下面是一个对于“栈”的基础使用：

class Stack {
    constructor() {
        this.items = []
    }

    /**
     *
     * @description 添加新元素到栈顶，也就是栈的末尾
     * @param {any} element
     * @memberof Stack
     */
    push(element) {
        this.items.push(element)
    }

    /**
     *
     * @description 移除栈里的元素
     * @memberof Stack
     */
    pop() {
        return this.items.pop()
    }

    /**
     * @description 栈里最后添加的元素
     *
     * @returns {any}
     * @memberof Stack
     */
    peek() {
        return this.items[this.items.length - 1]
    }

    /**
     * @description 如果栈为空的话将返回true，否则就返回false
     *
     * @returns {Boolean}
     * @memberof Stack
     */
    isEmpty() {
        return this.items.length === 0
    }

    /**
     * @description 栈的length
     *
     * @returns {Number}
     * @memberof Stack
     */
    size() {
        return this.items.length
    }

    /**
     * @description clear方法用来移除栈里所有的元素
     *
     * @memberof Stack
     */
    clear() {
        this.items = []
    }

    /**
     * @description 把栈里的元素都输出到控制台
     *
     * @memberof Stack
     */
    print() {
        console.log(this.items.toString())
    }
}

// 我们来使用这个栈类
const stack = new Stack()
console.log(stack.isEmpty()) // true
stack.push(5) // 往栈中添加元素
stack.push(6)
stack.push(4)
console.log(stack.peek()) // 往栈中添加的最后一个元素为4
console.log(stack.size()) // 栈的长度为 3
console.log(stack.isEmpty()) // false 该栈不为空
stack.print() // 5,6,4

/* 案例二：十进制到二进制的转换 */
// 我们大学计算机课程开始老师都会为我们讲解二进制的转换方式
// 该十进制数字和2整除（二进制是满二进一），直到结果是0为止
// 例如 10 ===> 1010

const stack2 = new Stack()
let decNumber = 10
let rem = '' // 余数
let numStr = '' // 结果输出字符串
while (decNumber > 0) {
    rem = Math.floor(decNumber % 2) // 取余
    stack2.push(rem) // 余数入栈
    decNumber = Math.floor(decNumber / 2) // 取整
}
while (!stack2.isEmpty()) {
    numStr += stack2.pop().toString() // 出栈取值
}
console.log(numStr) // 1010

