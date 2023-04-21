import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    return formatter.format(date);
  };

  return (
    <div className=" cursor-pointer p-4  h-fit hover:scale-105 transition">
      <a href={`posts/${props.slug}`}>
        <h4 className=" text-xl font-bold  hover:underline hover:underline-offset-8 hover:decoration-8 text-white decoration-lime-400 hover:decoration-lime-400 mb-2">
          {props.title}
        </h4>
      </a>

      <p className="text-sm text-slate-400">{props.subtitle}</p>
      <div className="flex gap-2">
        <p className="align-baseline text-xs text-slate-400 mt-2">
          {formatDate(props.date)}
        </p>
        <p className="align-baseline text-xs text-slate-400 mt-2">
          {props.reading_time}
        </p>
      </div>
    </div>
  );
};

export default PostPreview;
