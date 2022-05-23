const Item = ({prompt,response}) => {
    return(
        <li>
            <ul className="sublist">
                <li className="sublist-item">
                    <span className="item-title">Prompt:</span>
                    <span>{prompt}</span>
                </li>
                <li className="sublist-item">
                    <span className="item-title">Response:</span>
                    <span>{response}</span>
                </li>
            </ul>
        </li>
    )
}
export default Item;