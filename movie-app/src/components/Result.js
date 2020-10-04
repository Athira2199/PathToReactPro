import React from 'react'

const Result = ({result,openPopup}) =>{
    return(
        <div className="result" id={result.imdbID} onClick={()=>openPopup(result.imdbID)} >
            <img src={result.Poster} />
            <h3>{result.Title}</h3>
        </div>
    )
}

export default Result