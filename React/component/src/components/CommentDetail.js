import React from "react";

const CommentDetail = ({ avatar, author, time, body }) => {
  return (
    <div className="comment">
      <a href="#" className="avatar">
        <img src={avatar} alt="avatar" />
      </a>

      <div className="content">
        <a href="#" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">{time}</span>
        </div>

        <div className="text">{body}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
