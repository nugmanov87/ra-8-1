import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import axios from "axios";

const Details = ({ info }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!info.id) return;

    axios
      .get(`${process.env.REACT_APP_INITIAL_URL}${info.id}.json`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [info.id, data]);

  if (!data) return null;

  return (
    <div className="ui card">
      <div className="image">
        <img src={data.avatar} alt="avatar" />
      </div>
      <div className="content">
        <p className="header">{data.name}</p>
        {Object.keys(data.details).map((key) => (
          <div className="description" key={shortid.generate()}>
            <b>{key}</b>: {data.details[key]}
          </div>
        ))}
      </div>
    </div>
  );
};

Details.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

export default Details;
