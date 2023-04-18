import React from 'react'

import SearchItem from './SearchItem'

interface SearchItemsProps {
    data: Record<string, any[]>;
    value:string;
}

const SearchItems:React.FC<SearchItemsProps> = ({data, value}) => {

  return (
    <div className='bg-black absolute w-full h-full lg:w-[278px]  sm:w-[269px] z-30 sm:h-auto sm:right-[200px]  sm:top-2 lg:right-[240px] lg:rounded-md lg:top-[18px]'>
        <div className= "flex items-center justify-center mt-[60px] mb-2">
            <SearchItem value={value}title={data} />
        </div>
    </div>
  )
}

export default SearchItems