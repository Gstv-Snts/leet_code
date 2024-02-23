function sumArray(n: number[]):number {
    var curr: number = 0
    for (let index = 1; index < n.length; index++) {
        curr += n[index]
    }
    return curr
}
export default sumArray
