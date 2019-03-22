function area(l, h) {
    const area = l * h
    if (area > 20)
        console.log(`Valor acima do permitido: ${area}m².`)
    else return area
}

console.log(area(2, 2))
console.log(area(2)) //NaN
console.log(area(2, 3, 1, 3, 4)) //6
console.log(area(5, 5)) //25