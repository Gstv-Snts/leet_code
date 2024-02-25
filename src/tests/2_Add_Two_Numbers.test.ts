import addTwoNumbers from "../problems/2_Add_Two_Numbers";

describe("Add Two Numbers", () => {
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val === undefined ? 0 : val)
            this.next = (next === undefined ? null : next)
        }
    }
    test("Example 1", () => {
        const ln1 = new ListNode(2, new ListNode(4, new ListNode(3, null)))
        const ln2 = new ListNode(5, new ListNode(6, new ListNode(4, null)))
        const result: ListNode | null = addTwoNumbers(ln1, ln2)
        expect(result?.val).toEqual(7)
        expect(result?.next?.val).toEqual(0)
        expect(result?.next?.next?.val).toEqual(8)
    })
    test("Example 2", () => {
        const ln = new ListNode(0, null)
        expect(addTwoNumbers(ln, ln)).toEqual(new ListNode(0, null))
    })
    test("Example 3", () => {
        const ln1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null)))))))
        const ln2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null))))
        const result: ListNode | null = addTwoNumbers(ln1, ln2)
        let str = ""
        let curr: ListNode | null = result
        for (let i = 0; curr != null; i++) {
            str = str + curr.val.toString()
            curr = curr.next
        }
        expect(str).toBe("89990001")
    })
    test("Example 3", () => {
        const ln1str: number[] = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
        const ln1head: ListNode | null = new ListNode(ln1str[0], null)
        let ln1: ListNode | null = ln1head
        for (let i = 1; i < ln1str.length; i++) {
            ln1.next = new ListNode(ln1str[i], null)
            ln1 = ln1.next
        }
        const ln2str: number[] = [5, 6, 4]
        const ln2head: ListNode | null = new ListNode(ln1str[0], null)
        let ln2: ListNode | null = ln2head
        for (let i = 1; i < ln2str.length; i++) {
            ln2.next = new ListNode(ln2str[i], null)
            ln2 = ln2.next
        }
        const result: ListNode | null = addTwoNumbers(ln1head, ln2head)
        let str = ""
        let curr: ListNode | null = result
        for (let i = 0; curr != null; i++) {
            str = str + curr.val.toString()
            curr = curr.next
        }
        expect(str).toBe("6640000000000000000000000000001")
    })

})
