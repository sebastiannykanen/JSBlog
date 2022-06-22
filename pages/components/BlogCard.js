import Link from "next/link";

export default function BlogCard({
  title,
  author,
  datePublished,
  slug,
  content,
}) {
  return (
    <div>
      <Link href={"/posts/" + slug}>
        <div>
          <h2>{title}</h2>
          <h3>{content.html}</h3>
          <h3>{datePublished}</h3>
        </div>
      </Link>
    </div>
  );
}
