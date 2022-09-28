import Head from "next/head";
import styles from "../styles/styles.module.css";
import { GraphQLClient, gql } from "graphql-request";
import React, { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";
import Categories from "./components/Categories";
import Image from "next/image";
import HeaderPic from "../public/matthew-henry-2Ts5HnA67k8-unsplash.jpg";

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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newCategory, setNewCategory] = useState("");

  console.log(selectedCategory);

  return (
    <div className={styles.container}>
      <Head>
        <title>Jenni Strand</title>
        <meta
          name="Blog for Jenni Strand"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
        </style>
      </Head>

      <main className={styles.mainDiv}>
        <h1 className={styles.pageTitle}>Jenni Strand</h1>
        <Categories
          categories={categories}
          key={categories.id}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className={styles.posts}>
          {posts
            .filter((post) =>
              post.categories
                .map((category) => category.name)
                .includes(selectedCategory)
            )
            .map((post) => (
              <BlogCard
                title={post.title}
                key={post.id}
                author={post.author}
                datePublished={post.datePublished}
                slug={post.slug}
                content={post.content}
                categories={post.categories}
              />
            ))}
        </div>
      </main>
    </div>
  );
}
