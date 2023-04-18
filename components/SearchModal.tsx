import React, { useCallback, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';

import { isEmpty } from 'lodash';
import Input from '@/components/Input'
import SearchItems from './SearchItems';

interface InfoSearchModalProps {
  visible?: boolean;
  onClose: any;
  data: any;
}


const Search: React.FC<InfoSearchModalProps> = ({ data, visible, onClose }) => {
  const [isVisible, setIsVible] = useState<boolean>(!!visible);
  const [serchInputValue, setSerchInputValue] = useState('')
  const fileredArray = data.filter((movie:any) => movie.title === serchInputValue)


  useEffect(() => {
    setIsVible(!!visible)
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVible(false)
    setTimeout(() => {
      onClose();
    }, 300)
  }, [onClose])

  if (!visible) {
    return null;
  }

  if (isEmpty(data)) {
    null
  }

  return (
    <>
      <div className='ralative sm:right-[200px] lg:right-[240px] top-6'>
        <div className="flex items-center justify-center bg-black z-50 absolute right-4 top-2 lg:top-4 lg:right-[240px] rounded-md ">

            <Input
              label="Search film"
              onChange={(ev: any) => setSerchInputValue(ev.target.value)}
              id='search'
              type="text"
              value={serchInputValue} />

          <div
            className="
            bg-black
           cursor-pointer           
           w-10
           h-10
           top-9
           right-3
           lg:h-[52px]
           lg:w-[50px]
           rounded-lg
           bg-opacity-70
           flex
           items-center
           justify-center
           transition
           "
            onClick={() => console.log('i work')}
          >
            <AiOutlineClose onClick={handleClose} className='text-white' size={20} />
          </div>
        </div>
      </div>
      <div>
          <SearchItems value={serchInputValue} data={data}/>
      </div>
    </>
  )
}

export default Search