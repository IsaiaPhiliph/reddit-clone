import AddPost from "../components/AddPost";
import Layout from "../components/Layout";
import PostsFeed from "../components/PostsFeed";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <AddPost />
  </Layout>
);

export default IndexPage;
