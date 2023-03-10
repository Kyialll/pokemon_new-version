import '../../../App.css'
import {useState,useEffect} from "react"
import PokemonCard from "../../PokemonCard/PokemonCard";
import {fetchPokemons} from "../../../api/fetchPokemons";
import Pagination from "../../Pagination/Pagination";




const MainPage=()=>{
    const [theme,setTheme]=useState('dark')
    const [pokemonList,setPokemonList]=useState([])
    const [offset,setOffset]=useState(0)
    const [page,setPage]=useState(1)
    const [pageCount, setPageCount]=useState(0)



    const toggleTheme=()=>{
        const newTheme=theme==='dark'? 'light':'dark'
        setTheme(newTheme)
    }



    const limit=8
    useEffect(()=>{
        fetchPokemons(limit,offset)
            .then ((data)=>{
                setPokemonList(data.results)
                setPageCount(Math.ceil(100/10))
            });
    },[offset])



    const handleChangePage = (e) =>
    {
        console.log(e);
        console.log('page ', page);
        console.log('offset ',offset)

        if (e > page) {
            setOffset((e-1)*10)
            setPage(e)
        } else {
            if (offset < 8) return
            setOffset((e-1)*10)
            setPage(e)
        }
    }



    return(

            <>
            <div className="container">
                <div className="pokemonList">
                    {pokemonList.map((pokemon)=><PokemonCard
                        key={pokemon.id} pokemon={pokemon}/>)}
                </div>
            </div>
            <div className={'paginationWrapper'}>
                <Pagination changeOffset={(number)=> handleChangePage(number)}
                            page={page}
                            pageCount={pageCount}
                />
            </div>
            </>



    );
}
export default MainPage;