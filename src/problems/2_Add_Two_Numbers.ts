//You are given two non-empty linked lists representing two non-negative integers. 
//The digits are stored in reverse order, and each of their nodes contains a single digit. 
//Add the two numbers and return the sum as a linked list.
//You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//Input: l1 = [2,4,3], l2 = [5,6,4]
//564
//564465
//Output: [7,0,8]
//Explanation: 342 + 465 = 807.

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
function recurse(ln: ListNode | null, numbersStr: string): string {
    if (ln === null) {
        return numbersStr
    }
    numbersStr += ln.val.toString()
    numbersStr = recurse(ln.next, numbersStr)
    return numbersStr
}
function invert(str: string): number {
    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str);
        str = str + str.substring(i, i + 1)
    }
    str = str.substring(str.length / 2, str.length)
    return parseInt(str)
}
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    console.log(l1);
    console.log(l2);
    let result: string | number = invert(recurse(l1, "")) + invert(recurse(l2, ""))
    result = result.toString()
    for (let i = result.length - 1; i >= 0; i--) {
        result = result + result.substring(i, i + 1)
    }
    result = result.substring(result.length / 2, result.length)
    let head = new ListNode(parseInt(result.substring(0, 1)), null)
    let currln = head
    for (let i = 1; i < result.length; i++) {
        currln.next = new ListNode(parseInt(result.substring(i, i + 1)), null)
        currln = currln.next
    }
    return head
}

export default addTwoNumbers
