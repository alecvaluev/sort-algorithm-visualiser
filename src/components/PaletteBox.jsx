import React from 'react';

const BOX_SIZE = '20px';

export default function PaletteBox({color}){
    return (
        <div style={{backgroundColor: color,
                    width: BOX_SIZE, 
                    height: BOX_SIZE,
                    marginRight: '5px'}} 
                    ></div>
    )
}