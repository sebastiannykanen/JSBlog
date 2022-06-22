import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "./components/BlogCard";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/cl3wv4w54h7rp01z61synewo1/master"
);

const QUERY = gql`
  {
    posts(orderBy: createdAt_DESC) {
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
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jenni Strand</title>
        <meta
          name="Blog for Jenni Strand"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          {posts.map((post) => (
            <BlogCard
              title={post.title}
              key={post.id}
              author={post.author}
              datePublished={post.datePublished}
              slug={post.slug}
              content={post.content}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
