import styles from "../styles/styles.module.css";
import { GraphQLClient, gql } from "graphql-request";
import Header from "../components/Header";
import Head from "next/head";
import Link from "next/link";

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
    <div className={styles.container}>
      <Head>
        <title>Jenni Strand</title>
        <meta
          name="Blog for Jenni Strand"
          content="Generated by create next app"
        />
      </Head>
      <main className={styles.slugMainDiv}>
        <Header />
        <div className={styles.goBack}>
          <Link href="/">
            <h4>⏎ Back</h4>
          </Link>
        </div>
        <div className={styles.post}>
          <h2 className={styles.wallOfText}>{post.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: post.content.html }}></p>
        </div>
      </main>
    </div>
  );
}
