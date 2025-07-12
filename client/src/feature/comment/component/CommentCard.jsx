export const CommentCard = ({comment, setReply}) => {

  return (
    <div className="rounded-xl bg-gray-100 p-6 flex gap-5 shadow-xl">
      <div className="flex flex-col p-3 bg-white rounded-xl">
        <button>+</button>
        <button>0</button>
        <button>-</button>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-3">
            <p className="text-[#012E4A] text-[18px] font-bold">{comment.commentorName}</p>
            <p className="text-gray-500">1 month ago</p>
          </span>
          <button onClick={() => setReply(comment)} className="text-[#012E4A] text-[18px] font-semibold">Reply</button>
        </div>
        <p className="py-2 text-gray-600">{comment.comment}</p>
      </div>
    </div>
  );
};
