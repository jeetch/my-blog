import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";


const getPostMetadata = (): PostMetadata[] => {
  const readingTime = require('reading-time');
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
  
    // get gray-matter data from each post
  
    const posts = markdownPosts.map((filename) => {
      const fileContents = fs.readFileSync(`posts/${filename}`, "utf8");
      const matterResult = matter(fileContents);
      const stats = readingTime(matterResult.content);
      const reading_time = stats.text
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        slug: filename.replace(".md", ""),
        reading_time: reading_time
      };
    });
  
    return posts;
  };

  export default getPostMetadata;


  // const getPostContent = (slug: string) => {
  //   const folder = "posts/";
  //   const file = `${folder}${slug}.md`;
  //   const content = fs.readFileSync(file, "utf8");
  //   const matterResult = matter(content);
  //   return matterResult;
  // };
  
  // const post = getPostContent(slug);