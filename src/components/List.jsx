import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import shortid from "shortid";

const List = ({ handleProfile }) => {
  const [names, setNames] = useState([]);
  const [select, setSelect] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_INITIAL_URL}users.json`)
      .then((res) => setNames(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSelect = (id, name) => {
    setSelect(id);
    handleProfile(id, name);
  };

  return (
    <div className="ui basic">
      <div className="ui vertical menu button primary">
        {names.map(({ id, name }) => (
          <div
            className={`link red item ${id === select ? "active" : ""}`}
            key={shortid.generate()}
            onClick={() => handleSelect(id, name)}
          >
            <div className="header">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

List.propTypes = {
  handleProfile: PropTypes.func.isRequired,
};

export default List;
