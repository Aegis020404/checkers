import React, {useState} from 'react';
import cl from "../app.module.scss";
import Chip from "./Chip";
import {canI} from "../data";

const Board = ({cells, way, setCells}) => {
    const [fear, setFear] = useState(canI);
    return (
            <div className={cl.board}>
                {
                    cells.map((arr, y) => {
                            return <div key={y} className={cl.row}>
                                {
                                    arr.map(({value, chance}, x) => {
                                        return <Chip key={x} value={value} cells={cells}
                                                     chance={chance} x={x} y={y} fear={fear} setCells={setCells}/>
                                    })
                                }
                            </div>
                        }
                    )
                }
        </div>
    );
};

export default Board;