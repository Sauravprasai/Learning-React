import {useState} from 'react';

function Dropdown({options, selected, onSelect}){
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onSelect(option);
    }

    const renderedOptions = options.map((option)=>{
        return(
            <div key={option.value} onClick={() => handleOptionClick(option)}>
                {option.label}
            </div>
        )
    });


    return (
        <div>
            <div onClick={handleClick}>
                {selected?.label || 'Select...'}
            </div>
            {isOpen && <div >{renderedOptions}</div>}
        </div>
    )
}

export default Dropdown;