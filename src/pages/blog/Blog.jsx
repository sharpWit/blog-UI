import Layout from "../../components/layout/Layout";
import "./style.css";
import { get } from "../../services/http";
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";
export default function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    get("/posts").then(({ data }) => setPosts(data));
  }, []);
  const postsCards = posts.map((post, index) => {
    const variant = index === 0 ? "item-1" : "";
    return (
      <Card
        variant={variant}
        data={{
          target: `/post/${post.id}`,
          background: post.image,
          title: post.title,
          summary: post.summary,
        }}
      />
    );
  });
  return (
    <Layout>
      <header>
        <h1>Cool Articles</h1>
      </header>
      <div className="band">{postsCards}</div>
    </Layout>
  );
}
