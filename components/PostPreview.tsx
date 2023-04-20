import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className=" hover:shadow-md cursor-pointer p-4 hover:border-l hover:border-l-emerald-500">
      <a href={`posts/${props.slug}`}>
        <h4 className="text-xl font-semibold  text-white hover:underline hover:text-emerald-400 mb-2">
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
