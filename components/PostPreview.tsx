import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className=" cursor-pointer p-4  h-fit hover:scale-105 transition">
      <a href={`posts/${props.slug}`}>
        <h4 className="text-xl font-semibold hover:underline hover:underline-offset-8 hover:decoration-8 text-neutral-200 decoration-lime-400 hover:decoration-lime-400 mb-2">
          {props.title}
        </h4>
      </a>

      <p className="text-sm text-neutral-500">{props.subtitle}</p>
      <p className="align-baseline text-xs text-lime-700 mt-2">{props.date}</p>
    </div>
  );
};

export default PostPreview;
