import "../styles/home.css";

export default function HomeArticle({ articleKey, cover, title }) {
  return (
    <div className="PictureContainer">
      <img
        id={articleKey}
        src={cover}
        alt={title}
        width="400px"
        className="ArticlePicture"
      />
      <p className="ArticleText">{title}</p>
    </div>
  );
}
