import "../styles/home.css";

export default function HomeArticle({ cover, title }) {
  return (
    <section className="PictureContainer">
      <img src={cover} alt={title} width="400px" className="ArticlePicture" />
      <p className="ArticleText">{title}</p>
    </section>
  );
}
