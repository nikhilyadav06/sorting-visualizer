import './App.css'
import { useEffect, useState } from 'react'
import generateArray from './arrayFunctions/GenerateArray' 
import handleClick from './arrayFunctions/SortingFunctions'
import Board from './components/Board'
import SortButton from './components/SortButton'
import GenerateArrayButton from './components/GenerateArrayButton'
import SortTypeButtons from './components/SortTypeButtons'

function App() {
    const [array, setArray] = useState([])
    const [sortType, setSortType] = useState('bubbleSort')
    // const [sorting, setSorting] = useState(false)

    useEffect(() => {
        const newArray = generateArray(100, 100, 400)
        setArray(newArray)
    }, [])

    const onClick = () => {
        // setSorting(true)
        handleClick(array, setArray, sortType)
    }

    const generateArrayButtonClick = () => {
        const newArray = generateArray(100, 100, 400)
        setArray(newArray)
    }

    return (
        <div className='app'>
            <h1>SORTING VISUALIZER</h1>
            <SortTypeButtons sortType={sortType} setSortType={setSortType} />
            <Board array={array} />
            <div className='generateSortButtonsDiv'>
                <GenerateArrayButton onClick={generateArrayButtonClick} />
                <SortButton onClick={onClick} />
            </div>
        </div>
    )
}

export default App
