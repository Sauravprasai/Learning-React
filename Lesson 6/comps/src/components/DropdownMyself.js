import {useState} from 'react'

function DropdownMyself({colors}){
    const [selectedColor, setSelectedColor] = useState('Click to view Options...');
    const [isExpanded, setIsExpanded] = useState(false);

    const options = colors.map((color)=>{
        const handleOptionClick= () => {
            setSelectedColor(color);
            setIsExpanded(!isExpanded);
        }

        return(
            <div key={color}>
                <div>{isExpanded && <div onClick={handleOptionClick}>{color}</div>}</div>
            </div>
        )
    })
    return (
        <div>
            <div>Select a Color</div>
            <div className='border' onClick={()=>setIsExpanded(!isExpanded)}>{selectedColor}</div>
            {options}
        </div>
    )
}

export default DropdownMyself;