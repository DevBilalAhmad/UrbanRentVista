import List from "./list/List";
import "./profilePage.scss";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function ProfilePage() {
  const data = useLoaderData();
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profilePage m-28">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser.avatar || "noavatar.jpg"} alt="" />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>

          {currentUser.accountType === "listingAgent" ? (
            <>
              <div className="title">
                <h1>My List</h1>
                <Link to="/add">
                  <button>Create New Post</button>
                </Link>
              </div>
              <Suspense fallback={<p>Loading...</p>}>
                <Await
                  resolve={data.postResponse}
                  errorElement={<p>Error loading posts!</p>}
                >
                  {/* {(postResponse) => <List posts={postResponse.data.userPosts} />} */}
                  {(postResponse) => (
                    <>
                      {postResponse.data.userPosts.length > 0 ? (
                        <List posts={postResponse.data.userPosts} />
                      ) : (
                        <p>No post yet Publish</p>
                      )}
                    </>
                  )}
                </Await>
              </Suspense>
            </>
          ) : null}

          <span className="title">
            <h1>Saved List</h1>
          </span>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {/* {data.postResponse ? (
                <div className="flex justify-between">
                  <p> No List is Saved by you</p>
                  <div className="title">
                    <Link to="/list">
                      <button>Add Property into Save List</button>
                    </Link>
                  </div>
                </div>
              ) : (
              )} */}
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

export default ProfilePage;
