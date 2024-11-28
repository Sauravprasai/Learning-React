import {useState} from 'react';
import { FaChevronCircleDown, FaChevronCircleLeft } from "react-icons/fa";

function Accordion({items}){
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleClick = (nextIndex) => {
        setExpandedIndex(nextIndex == expandedIndex ? null : nextIndex);
    }
    
    const renderedItems = items.map((item, index)=> {
        const isExpanded = index === expandedIndex;
        const icon = (
            <span className='text-2xl'>
                {isExpanded ? <FaChevronCircleDown /> : <FaChevronCircleLeft />}
            </span>
        );

        return (
            <div key={item.id}>
                <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer'onClick={()=> handleClick(index)}>
                    {item.lable}
                    {icon}
                </div>
                <div>{isExpanded && <div className='border-b p-5 '>{item.content}</div>}</div>
            </div>
        )
    })

    return (
        <div className='border-x border-t rounded'>
            {renderedItems}
        </div>
    )
}

export default Accordion;
