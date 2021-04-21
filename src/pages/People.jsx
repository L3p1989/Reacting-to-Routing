import { useEffect, useState } from 'react';

import PeopleCard from "../components/PeopleCard";

const People = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        const getPeople = async () => {
            const res = await fetch("https://ghibliapi.herokuapp.com/people");
            const allPeople = await res.json();
            setPeople(allPeople);
        }
        getPeople();
    }, [])

    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <h1 className="display-4">Studio Ghibli Characters</h1>
            </div>
            <div className="row justify-content-center mt-4">
                {people.map(person => (
                    <PeopleCard key={person.id} {...person} />
                ))}
            </div>
        </div>
    );
};

export default People;