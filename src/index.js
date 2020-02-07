import React from "react";
import ReactDOM from "react-dom";
import Faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from './ApprovalCard';
const App = () => {
  return (
    <div className="ui container comments">
        <ApprovalCard >
            <CommentDetail avatar={Faker.image.avatar()} author="Sam" timeAgo="6 min Ago" commentText="this is my post" />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail avatar={Faker.image.avatar()} author="Ali" timeAgo="8 min Ago" commentText="this is my post" />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail avatar={Faker.image.avatar()} author="Adeel" timeAgo="10 min Ago" commentText="this is my post"/>
        </ApprovalCard>     
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
