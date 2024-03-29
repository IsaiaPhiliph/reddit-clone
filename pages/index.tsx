import Link from "next/link";
import Layout from "../components/Layout";
import PostsFeed from "../components/PostsFeed";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <PostsFeed />
  </Layout>
);

export default IndexPage;
