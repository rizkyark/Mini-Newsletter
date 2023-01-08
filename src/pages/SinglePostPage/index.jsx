import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, getSinglePost } from "../../stores/actions/posts";
import moment from "moment";
import "./singlePost.css";
import NavbarHeader from "../../components/NavbarHeader";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "react-bootstrap/Spinner";
import { decrementCounter, resetCounter } from "../../stores/actions/counter";

export default function SinglePostPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts.post);
  const countdata = useSelector((state) => state.counter.count);
  //   const countdata = 5;
  const posts = useSelector((state) => state.posts.data);
  const randomPage = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  const [limit, setLimit] = useState(1);
  const [count, setCount] = useState(5);

  useEffect(() => {
    dispatch(resetCounter());
    getData();
    getRandomPost();
    countSet();
    console.log(countdata);
  }, []);

  useEffect(() => {
    getData();
    getRandomPost();
    countSet();
  }, [limit]);

  const getData = async () => {
    try {
      const slug = params.slug;
      dispatch(getSinglePost(slug));
      setCount(count - 1);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getRandomPost = async () => {
    setTimeout(() => {
      try {
        dispatch(getAllPosts(randomPage, limit));
      } catch (error) {
        console.log(error.response);
      }
    }, 5000);
  };

  const countSet = () => {
    if (count <= 0) {
      setCount(0);
    }
  };

  return (
    <>
      <NavbarHeader />
      <div className="container__post">
        <div className="d-flex">
          <img
            src={data[0]?.author.avatar_url}
            alt=""
            className="rounded-circle"
            width="30px"
            height="30px"
          />
          <p className="author_desc">
            {data[0]?.author.display_name} |{" "}
            {moment(data[0]?.modified_gmt).startOf("hour").fromNow()} |{" "}
            {data[0]?.read_time} min read
          </p>
        </div>
        <h1>{data[0]?.title}</h1>
        <div
          className={count <= 0 ? "content_disable" : "content"}
          dangerouslySetInnerHTML={{ __html: data[0]?.content }}
        />
        <div className={count > 0 ? "paywalled_disable" : "paywalled"}>
          <h4>
            <strong>Support quality journalism and content</strong>
          </h4>
          <h4>
            You've reached your 5 free content limit for the month. Consuming
            good content is clearly
          </h4>
          <h4>
            your thing. Subscribe at just $0.17 per day to get unlimited access.
          </h4>
          <button className="btn btn-danger">LEARN MORE</button>
        </div>
        <hr />
      </div>
      <InfiniteScroll
        dataLength={limit}
        next={() => {
          setTimeout(() => {
            setLimit(limit + 1);
            dispatch(decrementCounter());
            setCount(count - 1);
          }, 1000);
        }}
        scrollThreshold={1}
        hasMore={limit < 30 ? true : false}
        loader={
          <div className="text-center">
            <Spinner
              animation="border"
              size="lg"
              className="my-4"
              variant="danger"
            />
          </div>
        }
      >
        {posts.map((i) => (
          <div className="container__post">
            <div className="d-flex">
              <img
                src={i.author.avatar_url}
                alt=""
                className="rounded-circle"
                width="30px"
                height="30px"
              />
              <p className="author_desc">
                {i.author.display_name} |{" "}
                {moment(i.modified_gmt).startOf("hour").fromNow()} |{" "}
                {i.read_time} min read
              </p>
            </div>
            <h1>{i.title}</h1>
            <div
              className={count <= 0 ? "content_disable" : "content"}
              dangerouslySetInnerHTML={{ __html: i.content }}
            />
            <div className={count > 0 ? "paywalled_disable" : "paywalled"}>
              <h4>
                <strong>Support quality journalism and content</strong>
              </h4>
              <h4>
                You've reached your 5 free content limit for the month.
                Consuming good content is clearly
              </h4>
              <h4>
                your thing. Subscribe at just $0.17 per day to get unlimited
                access.
              </h4>
              <button className="btn btn-danger">LEARN MORE</button>
            </div>
            <hr />
          </div>
        ))}
      </InfiniteScroll>
      <div className="fixed-bottom subscribe_bottom">
        <div className="d-flex gap-1 subscribe_bottom_text">
          <p>
            <strong>Support quality journalism and content.</strong>
          </p>
          <p>{count}/5 free content left</p>
          <a
            href=""
            style={{ color: "red" }}
            onClick={() => {
              dispatch(resetCounter());
              setCount(5);
            }}
          >
            Subscribe for more.
          </a>
        </div>
      </div>
    </>
  );
}
