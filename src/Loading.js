import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
    return (
        <div className='spinner'>
            <ClipLoader color="#1E90FF" size="80px" />
        </div>
    )
}
export default Loading;