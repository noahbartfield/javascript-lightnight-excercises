function addThem (num1, num2) {
    const added = num1 + num2
    // console.log(added)
    return(added)
}

// addThem(3, 4)

// addThem(5, 12)

// const calculate = (num1, num2, func) => console.log(num1 + num2 + func)

// calculate(25, 4, addThem(2, 3))

const multFunction = (num1, num2) => console.log(num1 * num2)
multFunction(7, 43)

const calculate = (num1, num2, func) => {
    func(num1, num2)
}

calculate(17, 17, multFunction)