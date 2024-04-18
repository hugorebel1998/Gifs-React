export default function ShowGif({ imagenes }) {
    return (
        <div className="card-grid">
            {imagenes.map(({ id, title, url }) => (
                <div className="card" key={id}>
                    <img src={url} alt={title} />
                    <p>{title}</p>
                </div>
            ))}
        </div>
    )
}