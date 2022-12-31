import cl from "./app.module.scss"
import {useEffect, useState} from "react";
import ars from './data'
import Board from "./components/Board";

export default () => {
    const [way, setWay] = useState(2)
    const [cells, setCells] = useState(ars);
    const replace = () => {
        if (way === 1)  setWay(2)
        else setWay(1)
    }

    useEffect(() => {
        let q = cells.map((row, y) =>
            row.map((el, x) => {
                if (el.value === null) return false
                if (el.value === way) {
                    if (el.value === 2)
                        if (cells[y + 1]) {
                            if (cells[y + 1][x + 1])
                                if (cells[y + 1][x + 1].value === null) return [y, x]
                            if (cells[y + 1][x - 1])
                                if (cells[y + 1][x - 1].value === null) return [y, x]
                        }
                    if (el.value === 1)
                        if (cells[y - 1]) {
                            if (cells[y - 1][x + 1])
                                if (cells[y - 1][x + 1].value === null) return [y, x]
                            if (cells[y - 1][x - 1])
                                if (cells[y - 1][x - 1].value === null) return [y, x]
                        }
                }
                return false
            }).filter((n) => Array.isArray(n))
        )
        setCells(state => {
            let initialise = state.map(y => y.map(x => ({ ...x, chance: false })))
            q.forEach((coo, y) => {
                coo.forEach((co, x) => {
                    initialise[co[0]][co[1]] = {...state[co[0]][co[1]], chance: true}
                })
            })
            return initialise
        })
    },[way])


    return (
        <div className={cl.wrap}>
            <div className={cl.indicator} style={{background: way === 1 ? "blue" : "black"}} onClick={replace}></div>
            <div className={cl.contrainer}>
                <h2 className={cl.title}>Good Game!</h2>
                <Board cells={cells}/>
            </div>
        </div>
    )
}
