import { Link } from 'react-router-dom';

const PeopleCard = props => {

    return (
        <div className="col-6 text-center">
            <div className="card shadow my-2">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.gender}</p>
                <Link to={`/people/${props.id}`} className="btn btn-primary w-50" style={{ marginLeft: "25%" }}>more info</Link>
            </div>
        </div>
    );
};

export default PeopleCard;