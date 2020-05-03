/* 1.2.1.添加和删除元素 */

// 假如，我们有数组 0-5
let numbersArray = [0, 1, 2, 3, 4, 5]

// 用比较笨的方式为数组最后一位插入 6
numbersArray[numbersArray.length] = 6 // [0, 1, 2, 3, 4, 5, 6]

// 通过 push 方法插入 7，8
numbersArray.push(7,8) // [0, 1, 2, 3, 4, 5, 6, 7, 8]

// 现在我们有个新需求，需要在数组的首位插入一个数字 -1
// 我们需要做的是，将数组的首位向后移动一位腾出位置，其它元素依次向后移一位
// 我们可以从最后一位（数组长度）开始循环，将前一位赋值给当前循环到的位置，最后将 -1 赋值到 [0] 上
// 程序可以如下编写：
for (let i = numbersArray.length; i >= 0; i --) {
    numbersArray[i] = numbersArray[i - 1]
}
numbersArray[0] = -1 // [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8]

// 当然，js 为我们提供了 unshift 方法，在数组首位插入元素
numbersArray.unshift(-3, -2) // [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8]

// 下面我们学习数组的删除操作
// pop方法可以删除数组靠后的元素

numbersArray.pop() // [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

// 下面我们用代码来模拟删除数组的第一个元素
for (let i = 0; i < numbersArray.length - 1; i ++) {
    numbersArray[i] = numbersArray[i + 1]
} // [ -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

// 还可以用 js 提供的 shift 方法来删除第一个元素
numbersArray.shift() // [-1, 0, 1, 2, 3, 4, 5, 6, 7]

// 删除指定位置上的元素
let testArr = ['a', 'b', 'c', 'd', 'e']
testArr.splice(1, 2) // 从下标1开始删除2个元素 ['a', 'd', 'e']

// 我们想把 bb,cc 放到原来删除的元素上
testArr.splice(1, 0, 'bb', 'cc') // [ 'a', 'bb', 'cc', 'd', 'e' ]

