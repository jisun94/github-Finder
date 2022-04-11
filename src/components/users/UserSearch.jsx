import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";

function UserSearch() {
  const [text, setText] = useState("");

  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleText = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: users });
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 mb-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative mb-3 shadow-xl rounded-xl">
              <input
                type="text"
                className="w-full bg-white input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleText}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none sm:w-32 md:w-36 btn btn-lg bg-[#1f2937] border-0"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            className="btn btn-outline font-semibold mt-5 text-zinc-600"
            onClick={() => dispatch({ type: "CLEAR_USERS" })}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
