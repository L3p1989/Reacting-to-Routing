import { useEffect, useState } from 'react';

import FilmsCard from '../components/FilmsCard';

const Films = () => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        const getFilms = async () => {
            const res = await fetch("https://ghibliapi.herokuapp.com/films");
            const allFilms = await res.json();
            setFilms(allFilms);
        }
        getFilms();
    }, [])

    return (
        <div className="container mt-2">
            <div className="row justify-content-center">
                <h1>Films</h1>
            </div>
            <div className="row justify-content-center mt-4">
                {films?.map(film => (
                    <FilmsCard key={film.id} {...film} />
                ))}
            </div>
        </div>
    );
};

export default Films;