import useSort from '../hooks/use-sort';
import Table from './Table';
import { FaSortAmountDownAlt, FaSortAmountUp, FaSort} from "react-icons/fa";

function SortableTable(props){
    const {config, data} = props;
    const {sortBy, sortOrder, sortedData, setSortColumn} = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if(!column.sortValue){
            return column;
        }

        return {
            ...column, 
            header: () => (
                <th className='cursor-pointer hover:bg-gray-100' onClick={()=> setSortColumn(column.label)}>
                    <div className='flex item-center'>
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            )
        }
    })

    return (
        <Table {...props} config={updatedConfig} data={sortedData}/>
    )
}

function getIcons(label, sortBy, sortOrder){
    if(label !== sortBy){
        return <FaSort />;
    }
    
    if(sortOrder === null){
        return <FaSort />;
    }else if(sortOrder === 'asc'){
        return <FaSortAmountUp />;
    }else if(sortOrder === 'desc'){
        return <FaSortAmountDownAlt />
    }
}

export default SortableTable;