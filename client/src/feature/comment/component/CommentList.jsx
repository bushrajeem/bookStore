import axios from "axios";
import { useEffect, useState } from "react";
import { CommentCard } from "..";
import { Button } from "../../../shadcnUI/components/ui/button";

// const comments = [
//   {
//     id: 1,
//     commentorID: 121,
//     commentorName: "abcd",
//     comment: "lorem10",
//     reply: [],
//   },
//   {
//     id: 2,
//     commentorID: 122,
//     commentorName: "abcd",
//     comment: "lorem10 ",
//     reply: [],
//   },
// ];

export const CommentList = () => {
  const [reply, setReply] = useState({});
  const [replyText, setReplyText] = useState("");
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [commentLoad, setCommentLoad] = useState(false);

  useEffect(() => {
    setCommentLoad(true);
    fetchComment();
  }, []);

  const fetchComment = async () => {
    let response = await axios.get("http://localhost:5000/comments");
    console.log(response);
    if (response.status === 200) {
      setCommentLoad(false);
      setComments(response.data.data);
    }
  };

  const handleSendComment = async () => {
    try {
      let response = await axios.post("http://localhost:5000/comments", {
        commentorID: "66503f489da2e92f5cb7e12c",
        commentorName: "Jeem",
        comment,
        postID: "66503f6d9da2e92f5cb7e12f",
      });
      console.log(comment);
      if (response.status === 200) {
        setComment("");
        fetchComment();
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleReply = async () => {
    setReplyText("");
    setReply({});
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <div className="border-[1px] border-gray-300 p-4 relative">
        <textarea
          cols={44}
          rows={3}
          value={comment}
          placeholder="Comment"
          className="w-full outline-none"
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          onClick={handleSendComment}
          className="absolute right-2 px-5 top-3 z-10"
        >
          Send
        </Button>
      </div>
      {commentLoad && <>Loading...</>}
      {comments?.map((comment) => (
        <>
          <CommentCard comment={comment} setReply={setReply} />
          {reply._id === comment._id && (
            <div className="ml-20 space-y-4 relative">
              <span className="absolute w-[1px] h-full top-0 -left-10 bg-gray-200">
                {" "}
              </span>
              <textarea
                rows={2}
                value={replyText}
                placeholder="reply..."
                className="w-full border border-gray-300 rounded p-2"
                onChange={(e) => setReplyText(e.target.value)}
              />
              <Button className="mt-2" onClick={handleReply}>
                Send Reply
              </Button>
              {/* {comment.reply.map((reply) => (
                <CommentCard  setReply={setReply} comment={comment}/>
              ))} */}
              <CommentCard setReply={setReply} comment={comment} />
            </div>
          )}
        </>
      ))}
    </div>
  );
};
