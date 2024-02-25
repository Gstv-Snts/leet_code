import twoSum from "../problems/1_Two_Sum"
describe("Two Sum", () => {
    test("Example 1", () => {
        const nums: number[] = [2, 7, 11, 15]
        const expected: number[] = [0,1]
        expect(twoSum(nums, 9).toString()).toEqual(expected.toString())
    })
    test("Example 2", () => {
        const nums: number[] = [3,2,4]
        expect(twoSum(nums, 6).toString()).toBe([1, 2].toString())
    })
    test("Example 3", () => {
        const nums: number[] = [3,3]
        expect(twoSum(nums, 6).toString()).toBe([0, 1].toString())
    })
})
