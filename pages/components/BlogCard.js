import Link from "next/link";

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
        <div>
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: content.html }}></div>
          <h5>{author.name}</h5>
        </div>
      </Link>
    </div>
  );
}
