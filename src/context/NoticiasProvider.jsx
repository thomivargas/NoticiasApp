import axios from "axios";
import { useState, useEffect, createContext } from "react";


const NoticiasContext = createContext();

const NoticiasProvider = ({children}) => {
    const [ categoria, setCategoria ] = useState('general');
    const [ noticias, setNoticias ] = useState([]);
    const [ pagina, setPagina ] = useState(1);
    const [ totalNoticias, setTotalNoticias ] = useState(0);

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value);
    }
    
    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=fc8a949675854f959a3c644c7ccc7f71`;
            const { data } = await axios(url);
            setNoticias(data.articles);
            setTotalNoticias(data.totalResults);
            setPagina(1);
            window.scrollTo(0, 0);
        }
        consultarAPI();
    }, [categoria])

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=fc8a949675854f959a3c644c7ccc7f71`;
            const { data } = await axios(url);
            setNoticias(data.articles);
            setTotalNoticias(data.totalResults);
            window.scrollTo(0, 0);
        }
        consultarAPI();
    }, [pagina])

    const handleChangePagina = (e, value) => {
        setPagina(value);
    }

    return (
        <NoticiasContext.Provider 
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                totalNoticias,
                handleChangePagina,
                pagina
            }}
        >
        {children}
        </NoticiasContext.Provider>
    )
}


export {NoticiasProvider};
export default NoticiasContext;