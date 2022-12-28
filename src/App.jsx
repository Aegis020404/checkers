import cl from "./app.module.scss"

export default () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className={cl.wrap}>
            <div className={cl.contrainer}>
                <h2 className={cl.title}>Good Game!</h2>
                <div className={cl.board}>
                    {
                        arr.map((el, y) => {
                                return <div className={cl.row}>
                                    {
                                        arr.map((ell,x) => {
                                            return <div data-y={y} data-x={x} className={`${cl.cell} ${~~((x+y) % 2) ? cl.color1 : cl.color2}`}></div>
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