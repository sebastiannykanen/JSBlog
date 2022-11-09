import Link from "next/link";
import styles from "../styles/styles.module.css";
import Image from "next/image";
import HeadShot from "../public/3119.webp";
import BlogCard from "./BlogCard";

export default function MainPosts({ selectedCategory, posts }) {
  return (
    <div className={styles.postsContainer2}>
      {posts
        .filter((post) => {
          if (selectedCategory === "") {
            return true;
          } else {
            return post.categories
              .map((category) => category.name)
              .includes(selectedCategory);
          }
        })
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
  );
}
