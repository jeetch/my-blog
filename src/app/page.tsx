import { FC } from "react";
import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";
import Background from "../../components/Background";

const HomePage: FC = () => {
  const postMetadata = getPostMetadata().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  const banner = (
    <header>
      <div className="relative flex flex-col gap-2 w-full z-10 shadow-sm text-left  py-12 px-4 sm:px-12 ">
        <Background />
        <h2 className="text-md text-lime-400 ">Hi, I'm Jeet 👋 </h2>
        <h2 className="text-3xl text-white font-bold shadow-lime-400">
          I like building websites.{" "}
        </h2>

        <p className="text-slate-400 text-sm pt-2 ">
          I'm a data scientist at{" "}
          <a href="https://www.speklesolutions.com" className="hover:underline">
            Spekle
          </a>
          . I aspire to build a lot of useful, good-looking, cool stuff. Welcome
          to my digital garden 🌱
        </p>
      </div>
    </header>
  );

  return (
    <>
      {banner}
      <div className="text-lime-400 mb-4"> Recent Posts 📝</div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        {postPreviews}
      </div>
    </>
  );
};

export default HomePage;
