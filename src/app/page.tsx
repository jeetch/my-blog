import { FC } from "react";
import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";
import Background from "../../components/Background";
import Banner from "../../components/Banner";
import { PageWrapper } from "../../components/PageWrapper";

const HomePage: FC = () => {
  const postMetadata = getPostMetadata().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  const banner = (
    <header>
      <Banner />
    </header>
  );

  return (
    <>
      <PageWrapper>
        {banner}
        <div className="text-lime-400 mb-4"> Recent Posts 📝</div>
        <div className=" grid grid-cols-1 md:grid-cols-1 gap-4">
          {postPreviews}
        </div>
      </PageWrapper>
    </>
  );
};

export default HomePage;
