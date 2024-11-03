export default function Card(props) {
    return (
        <div className="card">
        <img src={`../public/${props.item.coverImg}`} className="card--image" />
        <div className="card--stats">
            <img src="../public/star.png" className="card--star" />
            <span>{props.item.stats.rating}</span>
            <span className="gray">({props.item.stats.reviewCount}) • </span>
            <span className="gray">{props.item.location}</span>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.item.price}</span> / person</p>
    </div>
    )
}