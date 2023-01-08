import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { decrementCounter } from "../../stores/actions/counter";

export default function CardAllPost(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = (slug) => {
    navigate(`/${slug}`);
    dispatch(decrementCounter());
  };
  return (
    <div className="container" style={{ width: "1000px" }}>
      <div className="d-flex gap-4" style={{ marginTop: "35px" }}>
        <a
          style={{ cursor: "pointer" }}
          onClick={() => handleNavigate(props.slug)}
        >
          <img src={props.image} alt="" width="332px" height="186px" />
        </a>
        <div className="d-flex flex-column gap-2">
          <div onClick={() => handleNavigate(props.slug)}>
            <h2 style={{ fontSize: "21px", cursor: "pointer" }}>
              {props.title}
            </h2>
          </div>
          <p>{props.desc}</p>
          <div className="d-flex">
            <img
              src={props.avatar}
              alt=""
              className="rounded-circle"
              width="30px"
              height="30px"
            />
            <p className="author_desc_home">
              {props.author} | {moment(props.date).startOf("hour").fromNow()} |{" "}
              {props.readTime} min read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
