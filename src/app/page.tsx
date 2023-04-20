import { FC } from "react";
import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";

const HomePage: FC = () => {
  const postMetadata = getPostMetadata().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  const banner = (
    <header>
      <div className="flex flex-col gap-2 w-full z-10 shadow-sm text-left  p-12 ">
        <h2 className="text-md text-emerald-400 ">Hi, I'm Jeet 👋 </h2>
        <h2 className="text-3xl text-white font-bold">I build websites. </h2>

        <p className="text-slate-400 text-sm pt-2 ">
          I try to build cool stuff focused on the intersection between
          engineering and design
        </p>
      </div>
    </header>
  );

  return (
    <>
      {banner}
      <div className="text-emerald-400 mb-4"> Recent Posts 📝</div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        {postPreviews}
      </div>
    </>
  );
};

export default HomePage;
