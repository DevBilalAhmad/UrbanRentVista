import List from "./list/List";
import "../profilePage/profilePage.scss";
import apiRequest from "../../lib/apiRequest";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function ListSaveByUser() {
  const data = useLoaderData();
  // console.log("data", data.postResponse._data.data.savedPosts)

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
          <div className="title flex justify-center items-center ">
            <Link to="/Contact">
              <button>Contact Team</button>
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
              {(postResponse) => {
                // console.log(postResponse.data.savedPosts);
                return <List posts={postResponse.data.savedPosts} />;
              }}
            </Await>
          </Suspense>
        </div>
      </div>
      {/* <div className="chatContainer">
        <div className="wrapper">
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.chatResponse}
              errorElement={<p>Error loading chats!</p>}
            >
              {(chatResponse) => <Chat chats={chatResponse.data}/>}
            </Await>
          </Suspense>
        </div>
      </div> */}
    </div>
  );
}

export default ListSaveByUser;
