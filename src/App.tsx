import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import "./App.css";
import { gql, useQuery } from "@apollo/client";

const DOGS = gql`
  {
    dogs {
      id
      name
      description
      thumbnail {
        url
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(DOGS);
  console.log(data);
  console.log(loading);
  if (loading) return "ロード中・・・";

  if (error) return `エラー！ ${error.message}`;

  //JSON化することで文字列として出力できる。JSON化しないとオブジェクトの状態だからHTMLとして出力されない。
  return (
    <>
      <h1>GraphQLとReact</h1>

      <div className="dogsContainer">
        {/* {JSON.stringify(data)} */}
        {data.dogs.map((dog: { id: Key | null | undefined; thumbnail: { url: string | undefined; }; name: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
          <div key={dog.id}>
            <div className="dogCard">
              <img src={dog.thumbnail.url}></img>
              <p>{dog.name}</p>
              <p>{dog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;