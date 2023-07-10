import React from "react";

const commentData = [
  {
    name: "Sarvesh Gaynar",
    text: "hey how are you",
    replies: [],
  },
  {
    name: "Sarvesh Gaynar",
    text: "hey how are you",
    replies: [
      {
        name: "Sarvesh Gaynar",
        text: "hey how are you",
        replies: [
          {
            name: "Sarvesh Gaynar",
            text: "hey how are you",
            replies: [
              {
                name: "Sarvesh Gaynar",
                text: "hey how are you",
                replies: [
                  {
                    name: "Sarvesh Gaynar",
                    text: "hey how are you",
                    replies: [
                      {
                        name: "Sarvesh Gaynar",
                        text: "hey how are you",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { name: "Sarvesh Gaynar", text: "hey how are you", replies: [] },
    ],
  },
  {
    name: "Sarvesh Gaynar",
    text: "hey how are you",
    replies: [
      { name: "Sarvesh Gaynar", text: "hey how are you", replies: [] },
      { name: "Sarvesh Gaynar", text: "hey how are you", replies: [] },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex shadow-sm bg-gray-200 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        src="https://freesvg.org/img/abstract-user-flat-4.png"
        alt=""
      />
      <div className="flex flex-col">
        <p className="px-3 font-bold">{name}</p>
        <p className="px-4">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, i) => (
    <div key={i}>
      <Comment data={comment} />
      <div className="pl-5 border ml-5 border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommetsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommetsContainer;
