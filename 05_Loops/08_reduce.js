const numArr = [1, 2, 3]

const val1 = numArr.reduce((accumalator, currentValue) => accumalator + currentValue, 0)

console.log(val1);

const initVal = 1

const val2 = numArr.reduce( (acc, curr) => {
    console.log(`Accumalator: ${acc} & Current Value: ${curr}`);
    return acc + curr
}, initVal)

console.log(val2);

const productsPurchasedDetails = [
    {
        pName: "Vaseline",
        pPrice: 250,
        pQty: 3
    },
    {
        pName: "Pen",
        pPrice: 20,
        pQty: 4
    },
    {
        pName: "Jackets",
        pPrice: 1599,
        pQty: 7
    },
    {
        pName: "Hands-free",
        pPrice: 350,
        pQty: 5
    },
]

const totalPrice = productsPurchasedDetails.reduce( (acc, curr) => {
    console.log(`Item: ${curr.pName} \t Price: ${curr.pPrice} \t Quantity: ${curr.pQty}`);
    const total = acc + curr.pPrice * curr.pQty
    return total
}, 0)

console.log("Total Price: ", totalPrice);