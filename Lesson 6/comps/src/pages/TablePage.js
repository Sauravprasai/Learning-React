import SortableTable from "../components/SortableTable";

function TablePage() {
    const data =[
        {name: 'Orange', color: 'bg-orange-500', score: 5},
        {name: 'Apple', color: 'bg-red-500', score: 3},
        {name: 'Mango', color: 'bg-yellow-300', score: 4},
        {name: 'Pineapple', color: 'bg-yellow-500', score: 5},
        {name: 'Lime', color: 'bg-green-500', score: 2},
    ]

    const config = [
        {
            label: 'Fruits',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        },
        {
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score
        }
    ]

    const keyFn = (fruit) => {
        return fruit.name
    }

    return <div>
        <SortableTable data={data} config={config} keyFy={keyFn}/>
    </div>
}

export default TablePage;