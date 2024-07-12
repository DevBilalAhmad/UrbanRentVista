
import List from "./list/List";
import "../profilePage/profilePage.scss";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function SaveList() {
  const data = useLoaderData();
  const { updateUser, currentUser } = useContext(AuthContext);
  return (
    <div className="profilePage m-28">
      <div className="details">
        <div className="wrapper">
          <div className="title flex justify-center ">
            <Link to="/Contact">
              <button>Contact</button>
            </Link>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>

          <div className="title">
            <h1>Saved List</h1>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {/* {data.postResponse ? (
                <p>Not List is Saved yet by You</p>
              ) : (
                (postResponse) => {
                  return <List posts={postResponse.data.savedPosts} />;
                }
              )}
               */}
              {(postResponse) => {
                // console.log(postResponse.data.savedPosts);
                return <List posts={postResponse.data.savedPosts} />;
              }}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default SaveList;
