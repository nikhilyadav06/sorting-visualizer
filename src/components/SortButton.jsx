function SortButton({ onClick }) {
    return (
        <div className='sortButtonDiv'>
            <button className='sortButton' onClick={onClick}>
                Sort
            </button>
        </div>
    )
}

export default SortButton
