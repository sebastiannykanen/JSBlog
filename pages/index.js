import Head from "next/head";
import styles from "../styles/styles.module.css";
import { GraphQLClient, gql } from "graphql-request";
import React, { useState } from "react";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainPosts from "../components/MainPosts";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/cl3wv4w54h7rp01z61synewo1/master"
);

const QUERY = gql`
  {
    posts(orderBy: datePublished_DESC) {
      title
      id
      datePublished
      slug
      picture {
        url
      }
      description {
        html
      }
      content {
        html
      }
      categories(orderBy: name_ASC) {
        id
        name
      }
      author {
        name
        avatar {
          url
        }
      }
    }
    categories(orderBy: name_ASC) {
      name
      id
    }
  }
`;

// Getting data from headless CMS hygraph

export async function getStaticProps() {
  const { posts, categories } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
      categories,
    },
  };
}

export default function Home({ posts, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Jenni Strand</title>
        <meta
          name="Blog for Jenni Strand"
          content="Generated by create next app"
        />
      </Head>
      <div className={styles.headerDiv}>
        <Header
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Categories
          categories={categories}
          key={categories.id}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className={styles.mainDiv}>
        <></>
        <div className={styles.postsContainer}>
          <MainPosts
            categories={categories}
            key={categories.id}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            posts={posts}
          />
        </div>
        <div className={styles.sideBarContainer}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
