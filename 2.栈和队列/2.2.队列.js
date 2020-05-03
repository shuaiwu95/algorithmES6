/* 2.2.1.队列 */

// 基础理论：
// “队列” 是遵循 “先进先出” 原则的一项有序数列
// 现实中我们最常见的队列就是 “排队”

// 下面是对队列的基础使用方式：

class Queue {
    constructor() {
        this.items = []
    }

    /**
     * @description 责向队列添加新元素(末尾)
     *
     * @param {any} element
     * @memberof Queue
     */
    enqueue(element) {
        this.items.push(element)
    }

    /**
     * @description 责从队列移除项
     *
     * @returns
     * @memberof Queue
     */
    dequeue() {
        return this.items.shift()
    }

    /**
     * @description 队列最前面的项
     *
     * @returns
     * @memberof Queue
     */
    front() {
        return this.items[0]
    }

    /**
     * @description 队列是否为空
     *
     * @returns
     * @memberof Queue
     */
    isEmpty() {
        return this.items.length === 0
    }

    /**
     * @description 队列的length
     *
     * @returns {Number}
     * @memberof Queue
     */
    size() {
        return this.items.length
    }

    /**
     * @description 把队列的元素都输出到控制台
     *
     * @memberof Stack
     */
    print() {
        console.log(this.items.toString())
    }
}

// 使用Queue类
const queue = new Queue()
queue.enqueue("xiaoli")
queue.enqueue("laowang")
queue.print() // xiaoli,laowang

/* 2.2.2.优先队列 */

// 应用场景：
// 比如说，乘坐高铁，军人、普通乘客、商务座的检票顺序就不同。

// 实现方式：
// 1. 设置优先级，在正确的位置添加元素。
// 2. 用入列操作添加元素，然后优先级移除他们

// 以下例子我们将使用 在 正确位置 添加元素方式 实现一个 优先队列的操作

// 这个类表示要添加到队列的元素（它可以是任意类型）及其在队列中的优先级
class QueueElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority
    }
}

// 这是优先队列的主体类
class PriorityQueue {
    constructor() {
        this.items = []
    }

    /**
    * @description 责向队列添加新元素(末尾)
    *
    * @param {any} element 元素
    * @param {Number} priority 优先级
    * @memberof PriorityQueue
    */
    enqueue(element, priority) {
        const queueElement = new QueueElement(element, priority)
        if (this.isEmpty()) { // 如果队列为空，可直接添加元素
            this.items.push(queueElement)
        } else {
            let added = false
            for (let i = 0; i < this.items.length; i++) {
                // 比较该元素与其他元素的优先级
                if (queueElement.priority < this.items[i].priority) {
                    // 当找到一个比要添加的元素的priority值更大（优先级更低）的项时，就把新元素插入到它之前
                    this.items.splice(i, 0, queueElement)
                    added = true
                    break
                }
            }
            if (!added) { // 如果要添加元素的priority值大于任何已有的元素，把它添加到队列的末尾就行了
                this.items.push(queueElement);
            }
        }
    }

    /**
     * @description 责从队列移除项
     *
     * @returns
     * @memberof PriorityQueue
     */
    dequeue() {
        return this.items.shift()
    }

    /**
     * @description 队列最前面的项
     *
     * @returns
     * @memberof PriorityQueue
     */
    front() {
        return this.items[0]
    }

    /**
     * @description 队列是否为空
     *
     * @returns
     * @memberof PriorityQueue
     */
    isEmpty() {
        return this.items.length === 0
    }

    /**
     * @description 队列的length
     *
     * @returns {Number}
     * @memberof PriorityQueue
     */
    size() {
        return this.items.length
    }

    /**
     * @description 把队列的元素都输出到控制台
     *
     * @memberof PriorityQueue
     */
    print() {
        console.log(this.items)
    }
}

const priorityQueue = new PriorityQueue()
priorityQueue.enqueue("aaaa", 10)
priorityQueue.enqueue("bbbb", 11)
priorityQueue.enqueue("cccc", 8)
priorityQueue.enqueue("dddd", 12)
priorityQueue.print()
// 运行结果如下：
/*
[
  QueueElement { element: 'cccc', priority: 8 },
  QueueElement { element: 'aaaa', priority: 10 },
  QueueElement { element: 'bbbb', priority: 11 },
  QueueElement { element: 'dddd', priority: 12 }
]
*/

// 总结一下“优先队列”：
// 简单来说，就是当我们按照顺序入队列时，如果在当前队列里，找到权重比新加元素小的数据，那就可以让新增元素“插队”到该元素前面
// 这样，队列里的元素在入队的时候就会按照权重来排序，在出队的时候，就可以按照权重从大到小和入队顺序来展示了！
// 出队顺序为 权重优先，其次为先入先出原则

/* 2.2.3.循环队列 */
// 下面我将要用一个经典的案例 —— 小游戏 “击鼓传花”，来讲解“队列”中的 “循环队列”
// 游戏规则：
/*
    在这个游戏中，孩子们围成一个圆圈，把花尽快地传递给旁边的人。某一时刻传花停止，
    这个时候花在谁手里，谁就退出圆圈结束游戏。重复这个过程，直到只剩一个孩子（胜者）
*/
// 模拟程序：
/* 
 * nameList 参与游戏者的名单
 * num 规定迭代的次数
 */
const hotPotato = (nameList, num) => {
    const queue = new Queue() // 队列对象
    for (let i = 0; i < nameList.length; i ++){
        queue.enqueue(nameList[i]) // 将参与者的名字加入队列中
    }
    let eliminated = '' // 当前轮次被淘汰的人
    while (queue.size() > 1){ // 如果未被淘汰的人数多余1人，那么继续游戏
        for (let i = 0; i < num; i ++){
            queue.enqueue(queue.dequeue()) // 在规定迭代次数内，持续对数列进行出队入队操作（处于安全期的人）
        }
        eliminated = queue.dequeue() // 规定迭代次数完成后，获取到了当前被淘汰的人
        console.log(eliminated + '在本轮游戏被淘汰！');
    }
    return queue.dequeue() // 最后只剩下一个人的时候，这个人就是胜者
}

const names = ['李二狗', '王二狗', '张三', '刘二蛋', '赵铁蛋']
const winner = hotPotato(names, 10)
console.log('胜利者：' + winner)

// 运行结果如下：
/*
    李二狗在本轮游戏被淘汰！
    刘二蛋在本轮游戏被淘汰！
    王二狗在本轮游戏被淘汰！
    张三在本轮游戏被淘汰！
    胜利者：赵铁蛋
*/