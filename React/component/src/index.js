import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import Segment from "./components/Segment";
import Message from "./components/Message";
import ApprovalCard from "./components/ApprovalCard";
import CommentDetail from "./components/CommentDetail";

const App = () => {
  return (
    <>
      <Segment>
        <div className="ui icon header">
          <i className="pdf file outline icon">No Document</i>
        </div>

        <div className="ui primary button">Add Document</div>
      </Segment>

      <Segment>
        <h4 className="ui header">For your infomation!</h4>
        <p>{faker.lorem.paragraph()}</p>
      </Segment>

      <Message
        header="회원 약관 변경"
        body="약관이 변경되었습니다. 동의하실거죠?"
      />
      <div className="ui container comments">
        <ApprovalCard>
          <h4>저는 오늘 새벽까지 복습할거에요</h4>
          <p>빡공각?</p>
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            author={faker.name.firstName()}
            time={faker.date.recent().toLocaleString()}
            body={faker.lorem.sentence()}
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
