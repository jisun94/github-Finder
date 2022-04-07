import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

function UserSearch() {
  const [text, setText] = useState("");

  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const handleText = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 mb-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative mb-3">
              <input
                type="text"
                className="w-full bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleText}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-outline" onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
