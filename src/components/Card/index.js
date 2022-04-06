import './index.css';

export default function Card(props) {
    const {value, text} = props;
    return (
    <div className="card">
        <h2 className="card__title-number">{value}</h2>
        <h3 className="card__text">{text}</h3>
    </div>
    );
}
