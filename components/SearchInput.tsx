import React from 'react';

interface InputsProps {
    id: string;
    onChange: any;
    value: string;
    label: string;
    type?: string;
}

const SearchInput: React.FC<InputsProps> = ({
    id, 
    onChange,
    value,
    label,
    type
}) => {
    return (
        <div className=''>
            <input
                id={id}
                value={value}
                type={type}
                onChange={onChange}
                className="
                block
                px-2
                pt-2
                pb-2
                w-full
                text-md
                text-center
              text-white
              bg-neutral-700
                appearance-none
                focus:outline-none
                focus:ring-0
                peer
                transition
                invalid:border-b-1
              "
                placeholder={label}
            />
        </div>
    )
}

export default SearchInput