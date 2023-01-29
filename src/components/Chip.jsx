import React from 'react';
import cl from "../app.module.scss";

const Chip = ({value, chance, x, y, cells, fear, way, setCells}) => {
    return (<div className={`${cl.cell} ${~~((x + y) % 2) ? cl.color1 : cl.color2} ${fear[y][x] ? cl.fear : ''}`}>
            {value !== null ? <div
                className={`${cl.chip} ${value === 2 ? cl.black : cl.white} 
                                            ${chance ? cl.chance : ''}`}
                onClick={() => {
                    console.log(cells[y])
                    if (cells[y][x].chance) {
                        value = cells[y][x]
                        let arr = []
                        if (value === way) {
                            if (value.value === 2) if (cells[y + 1]) {
                                let value2 = cells[y + 1]
                                console.log(cells[y + 1])
                                if (value2[x + 1]) if (value2[x + 1].value === null) arr.push([y,x])
                                if (value2[x - 1]) if (value2[x - 1].value === null) arr.push([y, x])
                            }
                            if (value.value === 1) if (cells[y - 1]) {
                                let value1 = cells[y - 1]
                                if (value1[x + 1]) if (value1[x + 1].value === null) arr.push([y, x])
                                if (value1[x - 1]) if (value1[x - 1].value === null) arr.push([y, x])
                            }
                        }
                        console.log(arr)

                    }


                }}
            ></div> : ''}
        </div>);
};

export default Chip;