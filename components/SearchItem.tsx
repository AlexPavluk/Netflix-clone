import React from 'react'
import { useRouter } from 'next/router';


interface SearchItemProps {
    title: Record<string, any>;
    value: string
}

const SearchItem: React.FC<SearchItemProps> = ({ value, title }) => {
    const router = useRouter();
    const fileredArray = title.filter((i: any) => i.title == value)

    console.log(title.filter((i: any) => i.title === value), 'fiter array')
    console.log(value, 'value')
    fileredArray
    return (
        <div>
            {title.filter((movie:any) => {
                const searchItem = value.toLowerCase()
                const fullName = movie.title.toLowerCase()
                console.log(fullName)
                return searchItem && fullName.startsWith(searchItem)
            }).map((index: any) => {
                 console.log(index, 'index')
                 return (
                    <p onClick={() => router.push(`/watch/${index?.id}`)} key={index.id} className='text-white hover:underline cursor-pointer'>
                    {index?.title}
                </p>
                 )
            })}
        </div>
    )
}

export default SearchItem