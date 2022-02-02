const bubbleSort = (array, setArray, setSorting, setSorted) => {
    let time = 1
    for(let i = array.length - 1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if (array[j].value > array[j + 1].value) {
                let temp = array[j + 1]
                array[j + 1] = array[j]
                array[j] = temp
            }

            function setter(array, ind) {
                setTimeout(() => {
                    setArray([...array])
                }, 5 * ind)
            }
            const newArray = []
            array.forEach((item) => {
                const newItem = {
                    ...item
                }
                newArray.push(newItem)
            })
            setter(newArray, time)
            time += 1
        }

        array[i].status = 'sorted'
        function setter(array, ind) {
            setTimeout(() => {
                setArray([...array])
            }, 5 * ind)
        }
        const newArray = []
        array.forEach((item) => {
            const newItem = {
                ...item
            }
            newArray.push(newItem)
        })
        setter(newArray, time)
        time += 1
    }
    array[0].status = 'sorted'
    function setter(array, ind) {
        setTimeout(() => {
            setArray([...array])
            setSorting(false)
            setSorted(true)
        }, 5 * ind)
    }
    const newArray = []
    array.forEach((item) => {
        const newItem = {
            ...item
        }
        newArray.push(newItem)
    })
    setter(newArray, time)
    time += 1
}

const selectionSort = (array, setArray, setSorting, setSorted) => {
    let time = 1
    for(let i = 0; i < array.length; i++) {
        let minInd = i
        for(let j = i + 1; j < array.length; j++) {
            if (array[minInd].value > array[j].value) {
                minInd = j
            }
        }

        let temp = array[minInd]
        array[minInd] = array[i]
        array[i] = temp

        array[i].status = 'sorted'
        function setter(array, ind) {
            setTimeout(() => {
            setArray([...array])
            }, 100 * ind)
        }
        const newArray = []
        array.forEach((item) => {
            const newItem = {
                ...item
            }
            newArray.push(newItem)
        })
        setter(newArray, time)
        time += 1
    }
    function setter(ind) {
        setTimeout(() => {
            setSorting(false)
            setSorted(true)
        }, 100 * ind)
    }
    setter(time)
    time += 1
}

const insertionSort = (array, setArray, setSorting, setSorted) => {
    let time = 1
    for(let i = 1; i < array.length; i++) {
        let key = array[i]
        let j = i - 1

        array[i].status = 'sorted'
        array[j].status = 'sorted'
        function setter(array, ind) {
            setTimeout(() => {
                setArray([...array])
            }, 5 * ind)
        }
        const newArray = []
        array.forEach((item) => {
            const newItem = {
                ...item
            }
            newArray.push(newItem)
        })
        setter(newArray, time)
        time += 1

        while (j >= 0 && key.value < array[j].value) {
            array[j + 1] = array[j]
            array[j] = key
            j -= 1

            function setter(array, ind) {
                setTimeout(() => {
                    setArray([...array])
                }, 5 * ind)
            }
            const newArray = []
            array.forEach((item) => {
                const newItem = {
                    ...item
                }
                newArray.push(newItem)
            })
            setter(newArray, time)
            time += 1
        }
    }
    function setter(ind) {
        setTimeout(() => {
            setSorting(false)
            setSorted(true)
        }, 5 * ind)
    }
    setter(time)
    time += 1
}

const handleClick = (array, setArray, sortType, setSorting, setSorted) => {
    switch (sortType) {
        case 'bubbleSort':
            bubbleSort(array, setArray, setSorting, setSorted)
            break

        case 'selectionSort':
            selectionSort(array, setArray, setSorting, setSorted)
            break

        case 'insertionSort':
            insertionSort(array, setArray, setSorting, setSorted)
            break
        
        default:
            break
    }
}

export default handleClick
