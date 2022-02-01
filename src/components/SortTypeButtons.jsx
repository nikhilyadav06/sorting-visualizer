import ChangeSortTypeButton from './ChangeSortTypeButton'

function SortTypeButtons({ sortType, setSortType }) {
    return <div className='sortTypeButtonsDiv'>
        <ChangeSortTypeButton type='Bubble Sort' value='bubbleSort' sortType={sortType} setSortType={setSortType} />
        <ChangeSortTypeButton type='Selection Sort' value='selectionSort' sortType={sortType} setSortType={setSortType} />
        <ChangeSortTypeButton type='Insertion Sort' value='insertionSort' sortType={sortType} setSortType={setSortType} />
    </div>
}

export default SortTypeButtons
