//Exercise: level 1

function outerfunction() {
    let count = 0
    function innerfunction() {
        count += 2
        return count
    }
    return innerfunction()
}
console.log(outerfunction())

//Exercise : level 2

function outerfunction1() {
    let num = 5
    function plusone() {
        num++
        return num
    }
    function minusone() {
        num--
        return num
    }
    function multiplyby10() {
        num *= 10
        return num
    }
    return {
        plusone: plusone(),
        minusone: minusone(),
        multiplyby10: multiplyby10()

    }
}
console.log(outerfunction1().minusone)
console.log(outerfunction1().plusone)
console.log(outerfunction1().multiplyby10)

//EXercise: level 3

//we've done this before try it by urself