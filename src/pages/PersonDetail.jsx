import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PersonDetail = () => {
    const { personid } = useParams();
    const [person, setPerson] = useState([]);

    useEffect(() => {
        const getDetails = async () => {
            const res = await fetch(`https://ghibliapi.herokuapp.com/people/${personid}`);
            const details = await res.json();
            setPerson(details);
        }
        getDetails();
    }, []);

    return (
        <div className="container text-center">
            <div className="row justify-content-center">
                <h1 className="display-4">{person.Name}</h1>
            </div>
            <div className="row justify-content-center">
                <p>Gender: {person.gender}</p>
            </div>
            <div className="row justify-content-center">
                <p>Age: {person.age}</p>
            </div>
            <div className="row justify-content-center">
                <p>Eye Color: {person.eye_color}</p>
            </div>
            <div className="row justify-content-center">
                <p>Hair Color: {person.hair_color}</p>
            </div>
            <button className="btn btn-primary" onClick={() => window.history.back()}>Go Back</button>
        </div>
    );
};

export default PersonDetail;