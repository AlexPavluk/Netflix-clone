import { useCallback, useEffect, useState } from "react"
import MobileMenu from "./MobileMenu"
import NavbarItem from "./NavbarItem"

import { BsChevronDown, BsBellFill, BsSearch } from 'react-icons/bs'
import AccountMenu from "./AccountMenu"
import Search from "./SearchModal"

import useSearchModal from '@/hooks/useSearchModal';
import useMovieList from '@/hooks/useMovieList';


const Navbar = () => {

  const { data } = useMovieList();
  const { openModal } = useSearchModal();

  const handleOpenModal = useCallback(() => {
    openModal(data?.id)
  }, [openModal, data?.id])

  const TOP_OFFSET = 66;
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showAccoutnMenu, setShowAccoutnMenu] = useState(false)
  const [showBackground, setShowBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])


  const toggleMobileMennu = useCallback(() => {
    setShowMobileMenu((current) => !current)
  }, [])

  const toggleAccountMennu = useCallback(() => {
    setShowAccoutnMenu((current) => !current)
  }, [])


  return (
    <nav className="w-full fixed z-40">
      <div className=
        {`
        px-4
        md:px-16
        py-6
        flex
        flex-row
        itrms-center
        transition
        duration-500
       ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}
       `}
      >
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="Logo" />
        <div className="
            felx-row
            ml-8
            gap-7
            hidden
            lg:flex
            ">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>
        <div onClick={toggleMobileMennu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className={`text-white text-sm transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-3 lg:gap-7 items-center">
          <div onClick={handleOpenModal}  className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBellFill />
          </div>
          <div onClick={toggleAccountMennu} className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="avatar" />
            </div>
            <BsChevronDown className={`text-white text-sm transition ${showAccoutnMenu ? 'rotate-180' : 'rotate-0'}`} />
            <AccountMenu visible={showAccoutnMenu} />
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar