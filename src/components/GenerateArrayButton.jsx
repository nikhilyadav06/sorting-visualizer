function GenerateArrayButton({ onClick }) {
    return (
        <div className='generateArrayButtonDiv'>
            <button className='generateArrayButton' onClick={onClick}>
                Reset Array
            </button>
        </div>
    )
}

export default GenerateArrayButton
