import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import Segment from "./components/Segment";
import Message from "./components/Message";
import ApprovalCard from "./components/ApprovalCard";
import CommentDetail from "./components/CommentDetail";

class App extends React.Component {
  state = {
    comments: []
  };
  handleAddComment = () => {
    const newComment = {
      author: faker.name.firstName(),
      time: faker.date.recent().toLocaleString(),
      body: faker.lorem.sentence(),
      avatar: faker.image.avatar()
    };
    this.setState({ comments: [newComment, ...this.state.comments] });
  };

  render() {
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
          <button className="ui primary button" onClick={this.handleAddComment}>
            코멘트 추가하기
          </button>
          <ApprovalCard>
            <h4>저는 오늘 새벽까지 복습할거에요</h4>
            <p>빡공각?</p>
          </ApprovalCard>
          {this.state.comments.map(comment => (
            <ApprovalCard>
              <CommentDetail {...comment} />
            </ApprovalCard>
          ))}
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
