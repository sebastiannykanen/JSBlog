import Link from "next/link";
import styles from "../styles/styles.module.css";

export default function BlogCard({ title, author, slug, content }) {
  return (
    <div>
      <Link href={"/" + slug}>
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
