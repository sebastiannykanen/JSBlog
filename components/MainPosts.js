import styles from "../styles/styles.module.css";
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
            description={post.description}
            picture={post.picture}
            slug={post.slug}
            content={post.content}
            categories={post.categories}
          />
        ))}
    </div>
  );
}
