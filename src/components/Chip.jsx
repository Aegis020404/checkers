import React from 'react';
import cl from "../app.module.scss";

const Chip = ({value, chance, x, y, cells}) => {
    return (
        <div className={`${cl.cell} ${~~((x + y) % 2) ? cl.color1 : cl.color2}`}>
            {value !== null ? <div
                className={`${cl.chip} ${value === 2 ? cl.black : cl.white} 
                                            ${chance ? cl.chance : ''}`}
                onClick={() => {
                    if (cells[y][x].chance) {
                        console.log(y, x)

                    }


                }}
            ></div> : ''}
        </div>
    );
};

export default Chip;