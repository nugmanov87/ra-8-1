import React, { useState } from "react";
import List from "./components/List";
import Details from "./components/Details";

function App() {
  const [profile, setInfo] = useState({ id: null, name: "" });

  const handleProfile = (id, name) => {
    setInfo({ id, name });
  };

  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <div className="ui grid">
          <div className="eight wide column">
            <List handleProfile={handleProfile} />
          </div>
          <div className="eight wide column">
            {profile ? <Details info={profile} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
