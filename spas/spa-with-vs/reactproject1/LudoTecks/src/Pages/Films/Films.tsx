﻿declare const films: { id: number, label: string }[];

const Films = () => {
    const trs = films.map(item =><tr key={item.id}><td>{item.id}</td><td>{item.label}</td></tr>);

    return (
        <>
            <h1>Les films</h1>

            <table>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </>
    )
}

export default Films;