const Item = ({prompt,response} ) => {
    return(
        <li>
            <ul className="response">
                <li className="response-items"><span className="response-items-title">Prompt:</span><span>{prompt}</span></li>
                <li className="response-items"><span className="response-items-title" >Response:</span> <span>{response}</span></li>
            </ul>
        </li>
        //or use <br>

    )
}
export default Item;