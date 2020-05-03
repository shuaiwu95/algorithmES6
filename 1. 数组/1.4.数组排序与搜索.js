/* 数组合并 */
const arrayData1 = [0, 1, 2]
const arrayData2 = [3, 4, 5, 6]
const arrayData3 = [7, 8]
arrayData1.concat(arrayData2, arrayData3)
// 运行结果: [0, 1, 2, 3, 4, 5, 6, 7, 8]

/* 数组迭代函数 */
// 假如我们有一个数组， [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// 我们想要获得 数据中为偶数

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const evenNumbers = numbers.filter(item => {
    return item % 2 == 0
})
// evenNumbers 的运行结果为 [2,  4,  6, 8, 10, 12, 14]

/* 搜索和排序 */
const numbers2 = [2, 5, 8, 6, 3, 7]
// 数组倒序
numbers2.reverse()
// 运行结果 [ 7, 3, 6, 8, 5, 2 ]

// 从小到大排序
numbers2.sort()
// 从小到大排序也可以这样写
numbers2.sort((a, b) => {
    return a - b
})
// 更清晰明了的写法
numbers2.sort((a, b) => {
    if (a < b) {
        return -1
    }
    if (a > b) {
        return 1
    }
    return 0
})
// 运行结果 [ 2, 3, 5, 6, 7, 8 ]

// 自定义排序
const person = [
    {
        'name': 'xiaoming',
        'age': 10
    }, {
        'name': 'xiaohong',
        'age': 5
    }, {
        'name': 'laowang',
        'age': 38
    }
]
// 根据人的年龄进行排序
person.sort((a, b) => {
    return a.age - b.age
})
// 运行结果
/*
[
  { name: 'xiaohong', age: 5 },
  { name: 'xiaoming', age: 10 },
  { name: 'laowang', age: 38 }
]
*/

// 根据名字首字母进行排序
person.sort((a, b) => {
    // 必须忽略字母大小写，否则程序会按照 ASCII 码进行排序
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1
    }
    return 0;
})

// 输出结果
/*
[
  { name: 'laowang', age: 38 },
  { name: 'xiaohong', age: 5 },
  { name: 'xiaoming', age: 10 }
]
*/

// 为了兼容性，我建议用 localCompare 来判断，这样可以对有特殊音节符号的字符串进行排序了，可以兼容各种语种
// localCompare 方法提供的比较字符串的方法，考虑了默认的本地排序规则
// 把 < 和 > 运算符应用到字符串时，它们只用字符的 Unicode 编码比较字符串，而不考虑当地的排序规则。
// 以这种方法生成的顺序不一定是正确的。例如，在西班牙语中，其中字符 “ch” 通常作为出现在字母 “c” 和 “d” 之间的字符来排序
const person2 =  ['Maève', 'Maeve']
person2.sort((a, b) => {
    return a.localeCompare(b)
})
// 输出结果 [ 'Maeve', 'Maève' ]

/* 搜索 */
// 搜索有两个方法：indexOf方法返回与参数匹配的第一个元素的索引，lastIndexOf返回与参数匹配的最后一个元素的索引。
const searchNumbers = [5, 5, 5, 6, 8, 2, 3, 1]
searchNumbers.indexOf(5) 
// 输出结果 0
searchNumbers.lastIndexOf(5)
// 输出结果 2

/* 将数组转为字符串 */
// toString和join
searchNumbers.toString()
// 输出结果 5,5,5,6,8,2,3,1
searchNumbers.join('-')
// 输出结果 5-5-5-6-8-2-3-1

/* 总结 */

// 以上我所阐述的数组知识，将会是以下更为复杂的算法知识的基础，牢牢掌握了这些知识，以后才会得心应手







