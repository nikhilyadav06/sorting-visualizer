function ChangeSortTypeButton({ type, value, sortType, setSortType }) {
    return <div className='changeSortTypeButtonDiv'>
        <button className={`changeSortTypeButton ${sortType === value ? 'activeButton' : 'inactiveButton'}`} onClick={() => setSortType(value)}>{type}</button>
    </div>
}

export default ChangeSortTypeButton
