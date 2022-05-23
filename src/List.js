import React from 'react';
import Item from './Item'

const List = ({outputList}) => {
    return (
        <ul className="list">
            {outputList.map((item) => { 
                return(
                    <Item key={item.id} prompt={item.prompt} response={item.aiResponse}/>
                )
            })}
        </ul>
    )
}

export default List;