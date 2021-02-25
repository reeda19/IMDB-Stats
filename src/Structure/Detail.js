import React from 'react';

const Detail = ( { name, data, indices }) => {
    indices.forEach(curr => {
        data = data[curr]
      })
    return (
        <>{
            <li>{name}: {data!=="" ? data : "Unavailable"}</li>

            }</>
    );
}

export default Detail;
