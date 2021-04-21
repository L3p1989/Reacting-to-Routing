import { useEffect, useState } from 'react';

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
                <p>insert cards here</p>
            </div>
        </div>
    );
};

export default Films;