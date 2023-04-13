import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";
import useSearchModal from '@/hooks/useSearchModal';
import Search from "@/components/SearchModal";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const { data: movies = []} = useMovieList();
  const { data: favorits = []} = useFavorites();
  const { isOpen, closeModal } = useInfoModal();
  const { isSerachOpen, closeSearchModal } = useSearchModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal}/>
      <Search data={movies} visible={isSerachOpen} onClose={closeSearchModal}/>
      <Navbar/>
      <Billboard/>
      <div className="pb-40">
        <MovieList data={movies} title="Trending Now"/>
        <MovieList data={favorits} title="My List"/>
      </div>
    </>
  )
}
