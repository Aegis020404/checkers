import React from 'react';
import cl from "../app.module.scss";
import Chip from "./Chip";

const Board = ({cells}) => {
    return (
        <div className={cl.board}>
            {
                cells.map((arr, y) => {
                        return <div key={y} className={cl.row}>
                            {
                                arr.map(({value, chance}, x) => {
                                    return <Chip key={x} value={value} cells={cells}
                                                 chance={chance} x={x} y={y}/>
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