function Bar({ size, status }) {
    return (
        <div className={`bar ${status}`} style={{height: `${size}px`}}></div>
    )
}

export default Bar
