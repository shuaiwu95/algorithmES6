/* 1.1.1.创建 声明数组 */

// 声明一个数组
const daysOfWeek = new Array()

// 声明一个指定长度的数组
const daysOfWeek2 = new Array(7)

// 将元素作为参数传递给数组构造器
const daysOfWeek3 = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday')

// 使用元素的初始化数组
const daysOfWeek4 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday']

// 打印数组元素的长度
console.log('打印数组元素的长度', daysOfWeek4.length)

// 循环遍历数组里的元素
for (let i = 0; i < daysOfWeek4.length; i ++) {
    console.log(`打印数组元素${i}:`, daysOfWeek4[i])
}

/* 案例：求斐波那契数列 的前20个数字 */

let fibonacci = [] // 初始化数组
fibonacci[0] = 1
fibonacci[1] = 1 // 斐波那契数列 前2项均为1
for (let i = 2; i < 20; i ++) {
    // 根据 斐波那契数列 规则（F(1)=1，F(2)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 3，n ∈ N*））我们可以如下编写程序
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}