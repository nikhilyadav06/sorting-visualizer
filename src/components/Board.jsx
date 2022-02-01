import Bar from './Bar'

function Board({ array }) {
    return (
        <div className='board'>
            {array.map((item, index) => (
                <Bar key={index} size={item.value} status={item.status} />
            ))}
        </div>
    )
}

export default Board
