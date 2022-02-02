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

const mergeSort = (array, setArray, setSorting, setSorted) => {
    let time = 1
    const sort = (startIndex, endIndex) => {
        let lengthOfSubArray = endIndex - startIndex + 1
        
        if (lengthOfSubArray == 1) {
            return
        }

        let midIndex = (Math.floor((lengthOfSubArray) / 2)) + startIndex

        let leftArray, rightArray

        if (lengthOfSubArray == 2) {
            leftArray = array.slice(startIndex, startIndex + 1)
            rightArray = array.slice(endIndex, endIndex + 1)
        } else if (lengthOfSubArray == 3) {
            sort(startIndex, startIndex)
            sort(startIndex + 1, endIndex)

            leftArray = array.slice(startIndex, startIndex + 1)
            rightArray = array.slice(startIndex + 1, endIndex + 1)
        } else {
            sort(startIndex, midIndex - 1)
            sort(midIndex, endIndex)

            leftArray = array.slice(startIndex, midIndex)
            rightArray = array.slice(midIndex, endIndex + 1)
        }

        let i = 0
        let j = 0
        let k = startIndex

        while ((i < leftArray.length) && (j < rightArray.length)) {
            if (leftArray[i].value < rightArray[j].value) {
                array[k] = {
                    ...leftArray[i],
                    status: 'sorted'
                }
                i += 1
                function setter(array, ind) {
                    setTimeout(() => {
                        setArray([...array])
                    }, 20 * ind)
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
            } else {
                array[k] = {
                    ...rightArray[j],
                    status: 'sorted'
                }
                j += 1
                function setter(array, ind) {
                    setTimeout(() => {
                        setArray([...array])
                    }, 20 * ind)
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
            k += 1
        }

        while (i < leftArray.length) {
            array[k] = {
                ...leftArray[i],
                status: 'sorted'
            }
            i += 1
            k += 1
            function setter(array, ind) {
                setTimeout(() => {
                    setArray([...array])
                }, 20 * ind)
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
        while (j < rightArray.length) {
            array[k] = {
                ...rightArray[j],
                status: 'sorted'
            }
            j += 1
            k += 1
            function setter(array, ind) {
                setTimeout(() => {
                    setArray([...array])
                }, 20 * ind)
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
    sort(0, array.length - 1)

    function setter(ind) {
        setTimeout(() => {
            setSorting(false)
            setSorted(true)
        }, 20 * ind)
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
        
        case 'mergeSort':
            mergeSort(array, setArray, setSorting, setSorted)
            break
        
        default:
            break
    }
}

export default handleClick
