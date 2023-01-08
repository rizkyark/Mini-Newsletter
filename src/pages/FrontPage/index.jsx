import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../stores/actions/posts";
import CardAllPost from "../../components/CardAllPost";
import NavbarHeader from "../../components/NavbarHeader";

export default function FrontPage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);
  //   const [data, setData] = useState(posts);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  //   const hasMore = true;

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [page, limit]);

  const getData = async () => {
    try {
      dispatch(getAllPosts(page, limit));
      console.log(posts);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <NavbarHeader />
      <InfiniteScroll
        dataLength={limit}
        next={() => {
          setLimit(limit + 1);
          //   setData((data) => [...data, posts]);
          //   getData();
        }}
        scrollThreshold={0.9}
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
        scrollableTarget="scrollableDiv"
      >
        <div className="container">
          {posts.map((i) => (
            <div>
              <CardAllPost
                title={i.title}
                desc={i.excerpt}
                image={i.featured_image.source}
                author={i.author.display_name}
                avatar={i.author.avatar_url}
                date={i.modified_gmt}
                readTime={i.read_time}
                slug={i.slug}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}
