import cl from "./app.module.scss"
import {useEffect, useState} from "react";
import ars from './data'

export default () => {
    const [way, setWay] = useState(2)
    const [cells, setCells] = useState(ars);
    const replace = () => way === 1 ? setWay(2) : 1

    function highlight() {
        let q = cells.map((row, y) =>
            row.map((el, x) => {
                if (el.value === null) return false

                if (cells[y + 1]) {
                    if (cells[y + 1][x + 1])
                        if (cells[y + 1][x + 1].value === null) return [y, x]
                    if (cells[y + 1][x - 1])
                        if (cells[y + 1][x - 1].value === null) return [y, x]
                }
                return false
            }).filter((n) => Array.isArray(n))
        )

        setCells(state => {
            q.forEach((coo,y) => {
                coo.forEach( (co,x) => {
                    state[y][x] = {...state[y][x], chance: true}
                    console.log(state[y][x])
                })
                // if (coo.length) {
                    // console.log(coo)
                    // console.log(state[1][1])
                // }
            })
            // console.log( state[0][0])
            return state
        })


        console.log(cells);
    }

    useEffect(() => {
        highlight()
    }, []);

    return (
        <div className={cl.wrap} onClick={replace}>
            <div className={cl.indicator} style={{background: way ? "blue" : "black"}}></div>
            <div className={cl.contrainer}>
                <h2 className={cl.title}>Good Game!</h2>
                <div className={cl.board}>
                    {
                        cells.map((arr, y) => {
                                return <div key={y} className={cl.row}>
                                    {
                                        arr.map(({value, chance}, x) => {
                                            return <div data-y={y} data-x={x} key={x}
                                                        className={`${cl.cell} ${~~((x + y) % 2) ? cl.color1 : cl.color2}`}>
                                                {value !== null ? <div
                                                    className={`${cl.chip} ${value === 2 ? cl.black : cl.white} 
                                                    ${chance ? cl.chance : ''}`}></div> : ''}
                                            </div>
                                        })
                                    }
                                </div>
                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
}
