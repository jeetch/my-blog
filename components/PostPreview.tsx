import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className=" cursor-pointer p-4  h-fit hover:scale-105 transition">
      <a href={`posts/${props.slug}`}>
        <h4 className="text-xl font-semibold hover:decoration-white text-white underline decoration-lime-400 hover:text-lime-400 mb-2">
          {props.title}
        </h4>
      </a>

      <p className="text-sm text-slate-200">{props.subtitle}</p>
      <p className="align-baseline text-xs text-slate-400 italic mt-2">
        {props.date}
      </p>
    </div>
  );
};

export default PostPreview;
