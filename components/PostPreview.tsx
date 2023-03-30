import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="border border-slate-200 rounded-md shadow-md bg-white p-4">
      <p className="text-sm text-slate-400 italic mb-2">{props.date}</p>

      <a href={`posts/${props.slug}`}>
        <h4 className="font-bold text-slate-800 hover:underline mb-2">
          {props.title}
        </h4>
      </a>

      <p className="text-sm text-slate-800">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
