import { Link } from 'react-router-dom';

const PeopleCard = props => {

    return (
        <div className="col-6 text-center">
            <div className="card shadow my-2">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.gender}</p>
                    <Link to={`/people/${props.id}`} className="btn btn-primary">more info</Link>
                </div>

            </div>
        </div>
    );
};

export default PeopleCard;