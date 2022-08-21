import styles from "../../styles/Slug.module.css";
import { GraphQLClient, gql } from "graphql-request";
import Categories from "../components/Categories";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/cl3wv4w54h7rp01z61synewo1/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      title
      id
      datePublished
      slug
      content {
        html
      }
      author {
        id
        name
        avatar {
          url
        }
      }
      categories {
        id
        name
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
  };
}

export default function BlogPost({ post }) {
  return (
    <main className={styles.mainDiv}>
      <div className={styles.extraDiv}>
        <h2>Hi this is extra</h2>
        <h2>Hi this is extra</h2>
        <h2>Hi this is extra</h2>
        <h2>Hi this is extra</h2>
        <h2>Hi this is extra</h2>
        <h2>Hi this is extra</h2>
      </div>
      <div className={styles.slugDiv}>{post.title}</div>
      <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
    </main>
  );
}
