import Link from "next/link";
import styles from "../../styles/BlogCard.module.css";

export default function BlogCard({
  title,
  author,
  datePublished,
  slug,
  content,
  categories,
}) {
  return (
    <div>
      <Link href={"/posts/" + slug}>
        <div className={styles.posts}>
          <h2>{title}</h2>
          <div
            className={styles.wallOfText}
            dangerouslySetInnerHTML={{ __html: content.html }}
          ></div>
          <h5>- {author.name}</h5>
          <span> </span>
        </div>
      </Link>
    </div>
  );
}
