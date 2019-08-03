// Book 3 chapter 1: more factory functions



const metals = [
    { metal: "Sterling Silver", price: 12.42 },
    { metal: "14K Gold", price: 736.4 },
    { metal: "24K Gold", price: 1258.9 },
    { metal: "Platinum", price: 795.45 },
    { metal: "Palladium", price: 1241.0 }
]
const diamonds = [
    { carets: 0.5, price: 405 },
    { carets: 0.75, price: 782 },
    { carets: 1, price: 1470 },
    { carets: 1.5, price: 1997 },
    { carets: 2, price: 3638 }
]
const ringStyles = [
    { style: "Classic", price: 500 },
    { style: "Modern", price: 710 },
    { style: "Vintage", price: 965 }
]

//=========================================================================================================================================
const createCustomRing = (style, carets, metal) => {
    return {
        toString () {
            `You ordered a ${this.style} ring made of ${this.metal} with ${this.carets}. The total cost will be ${this.price}`
        },
        style: style.style,
        carets: carets.carets,
        metal: metal.metal,
        price: metal.price + style.price + carets.price
    }
}


const newRingOrder = createCustomRing(ringStyles[1], diamonds[2], metals[2])
console.log(newRingOrder)

// render to dom
const jewleryContainer = document.querySelector("#jewlery")
const rendertoDom = (HTMLstring) => {
    jewleryContainer.innerHTML += HTMLstring
  }


rendertoDom(newRingOrder)

