function Table({data, config, keyFy}){
    const renderedRows = data.map((rowData)=> {
        const renderedCells = config.map((column) => {
            return <td className="p-3" key={column.label}>{column.render(rowData)}</td>
        })
        return(
            <tr className="border-b" key={keyFy(rowData)}>
                {renderedCells}
            </tr>
        );
    });

    const renderedHeaders = config.map((column)=>{
        return <th key={column.label}>{column.label}</th>
    })

    return (
    <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {renderedHeaders}
            </tr>
        </thead>
        <tbody>
            {renderedRows}
        </tbody>
    </table>) 
}


export default Table;