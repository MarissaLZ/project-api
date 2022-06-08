const Item = ({prompt,response}) => {
    return(
        <li>
            <ul className="sublist">
                <li className="sublist-item">
                    <span className="item-title">Prompt:</span>
                    <span className="item-text">{prompt}</span>
                </li>
                <li className="sublist-item">
                    <span className="item-title">Response:</span>
                    <span className="item-text">{response}</span>
                </li>
            </ul>
        </li>
    )
}
export default Item;