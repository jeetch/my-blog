import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="rounded-md shadow-md bg-slate-700 p-4">
      <a href={`posts/${props.slug}`}>
        <h4 className="text-xl font-semibold text-white hover:underline mb-2">
          {props.title}
        </h4>
      </a>

      <p className="text-sm text-slate-200">{props.subtitle}</p>
      <p className="align-baseline text-xs text-slate-400 italic mt-2">
        {props.date} . 2 min read
      </p>
    </div>
  );
};

export default PostPreview;
