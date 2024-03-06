import { FC } from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../../components/getPostMetadata";
import { PageWrapper } from "../../../../components/PageWrapper";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage: FC = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <PageWrapper>
      <div className=" flex flex-col items-center">
        <div className="my-12 text-center ">
          <h3 className="text-3xl font-bold text-white underline underline-offset-8 decoration-lime-400 decoration-8 mb-2">
            {post.data.title}
          </h3>
          <p className="text-neutral-400 text-sm mt-4">{post.data.date}</p>
        </div>

        <article className="prose prose-invert items-center w-full max-w-none">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </PageWrapper>
  );
};

export default PostPage;
