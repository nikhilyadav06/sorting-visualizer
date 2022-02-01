const generateArray = (size, minValue, maxValue) => {
    const array = []

    for (let i = 0; i < size; i++) {
        const item = {
            value: Math.floor(Math.random() * (maxValue - minValue)) + minValue,
            status: 'unsorted'
        }
        array.push(item)
    }

    return array
}

export default generateArray
