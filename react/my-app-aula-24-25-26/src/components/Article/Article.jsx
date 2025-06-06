import "./styles.css";
export function Article(thumbnail, title, provider, description) {
  // componente funcional é uma função que retorna HTML, não precisa herdar a classe componente do React
  return (
    <article id="article">
      <img id="article-img" src={thumbnail} alt="" />
      <div className="article-infos">
        <h2>{title}</h2>
        <h3>{provider}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
