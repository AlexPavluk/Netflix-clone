import React from 'react'

import SearchItem from './SearchItem'

interface SearchItemsProps {
    data: Record<string, any[]>;
    value:string;
}

const SearchItems:React.FC<SearchItemsProps> = ({ data, value }) => {

  return (
    <div className='modal-overlay bg-black lg:w-[237px] lg:h-auto'>
        <div className= "flex items-center justify-center">
            <SearchItem value={value}title={data} />
        </div>
    </div>
  )
}

export default SearchItems