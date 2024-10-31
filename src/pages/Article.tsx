import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const allData = [
  {
    id: 1,
    title: "Lorem Ipsum",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    title: "Schnapsum",
    content: "Lorem Elsass ipsum Salut bisamme",
  },
  {
    id: 3,
    title: "Cupcake Ipsum",
    content: "Tiramisu pastry wafer brownie soufflé",
  },
];

type Data = (typeof allData)[0];

const getSomeData = (id: number) => {
  return allData.find((article) => article.id === id) as Data | null;
};

function Article() {
  const { id } = useParams();

  const [data, setData] = useState(null as Data | null);

  useEffect(() => {
    const idAsInt = Number.parseInt(id ?? "0");

    const someData = getSomeData(idAsInt);

    setData(someData);
  }, [id]);

  return (
    data != null && (
      <article>
        <h1>{data.title}</h1>
        <p>{data.content}</p>
      </article>
    )
  );
}

export default Article;
