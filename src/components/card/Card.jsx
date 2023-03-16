import "./style.css";
export default function Card({ data, variant }) {
  return (
    <div className={variant}>
      <a href={data.target} className="card">
        <div
          className="thumb"
          style={{ backgroundImage: `url(${data.background})` }}
        ></div>
        <article>
          <h1>{data.title}</h1>
          <span>{data.summary}</span>
        </article>
      </a>
    </div>
  );
}
