import { Link } from 'react-router-dom';

const FilmsCard = props => {
    return (
        <div className="col-6">
            <div className="card shadow my-2">
                <div className="card-body text-center">
                    <h5 className="card-title"><u>{props.title}</u></h5>
                    <p className="card-text">{props.description}</p>
                    {props.rt_score > 70 ? <footer className="blockquote-footer text-success font-weight-bold">{props.rt_score}</footer> : <footer className="blockquote-footer text-danger font-weight-bold">{props.rt_score}</footer>}
                    <Link to={`/films/${props.id}`} className="btn btn-primary mt-2">More Info</Link>
                </div>
            </div>
        </div>
    );
};

export default FilmsCard;