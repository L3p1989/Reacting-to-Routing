import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FilmDetail = () => {
    const { filmid } = useParams();
    const [film, setFilm] = useState([]);

    useEffect(() => {
        const getDetails = async () => {
            const res = await fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`);
            const details = await res.json();
            setFilm(details);
        }
        getDetails();
    }, [filmid]);

    return (
        <div className="container text-center">
            <div className="row justify-content-center">
                <h1 className="display-4">{film.title}</h1>
            </div>
            <div className="row justify-content-center">
                <h3>Original Title: {film.original_title}</h3>
            </div>
            <div className="row justify-content-center">
                <p className="font-weight-bold">Director: {film.director}</p>
            </div>
            <div className="row justify-content-center">
                <p className="font-weight-bold">Producer: {film.producer}</p>
            </div>
            <div className="row justify-content-center">
                <p>Release: {film.release_date}</p>
            </div>
            <div className="row justify-content-center">
                <p>{film.description}</p>
            </div>
            <div className="row justify-content-center">
                <p>Runtime: {film.running_time} min</p>
            </div>
            <div className="row justify-content-center">
                <p>RT Score: {film.rt_score}</p>
            </div>
            <button className="btn btn-primary" onClick={() => window.history.back()}>Go Back</button>
        </div>
    );
};

export default FilmDetail;