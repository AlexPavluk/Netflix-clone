import React, { useCallback, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';

import SearchItems from './SearchItems';
import SearchInput from './SearchInput';

interface InfoSearchModalProps {
  visible?: boolean;
  onClose: any;
  data: any;
}


const SearchModal: React.FC<InfoSearchModalProps> = ({ data, onClose }) => {
  const [serchInputValue, setSerchInputValue] = useState('')

  const handleClose = useCallback(() => {
    setTimeout(() => {
      onClose();
    }, 300)
  }, [onClose])

  return (
    <>
        <div className="sm:absolute left-0 top-0 sm:w-full z-40  sm:bg-black sm:h-[1000px] ml-auto gap-3 lg:gap-7">
          <div className="z-150 flex items-center sm:justify-center sm:mt-3">

            <SearchInput
              onChange={(ev: any) => setSerchInputValue(ev.target.value)}
              label='Write film name'
              id='search'
              type="text"
              value={serchInputValue} />
          
          <div
            className="
         bg-black
           cursor-pointer           
           w-10
           h-10
           lg:h-[40px]
           lg:w-[40px]
           bg-opacity-70
           flex
           z-30
           items-center
           justify-center
           transition
           "
          >
            <AiOutlineClose onClick={handleClose} className='text-white' size={15} />
          </div>
          </div>
          <div>
            <SearchItems value={serchInputValue} data={data} />
          </div>
        </div>
    </>
  )
}

export default SearchModal