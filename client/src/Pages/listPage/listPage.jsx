import "./listPage.scss";
import Filter from "./components/filter/Filter";
import Card from "./components/card/Card";
// import Map from "../singlePage/map/Map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

function ListPage() {
  const data = useLoaderData();

  return (
    <div className="listPage">
      <div className="listContainer m-8 ">
        <div className="wrapper">
          <Filter />

          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {/* {data.postResponse ? (
                <p>Not List is Post yet.</p>
              ) : (
                (postResponse) =>
                  postResponse.data.map((post) => (
                    <Card key={post.id} item={post} />
                  ))
              )} */}
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post._id} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ListPage;
