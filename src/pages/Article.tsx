import { useParams } from "react-router-dom";

function Article() {
  const { id } = useParams();

  return <h1>Hello from Article {id}</h1>;
}

export default Article;
