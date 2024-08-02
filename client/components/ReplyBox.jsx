import React, { useEffect, useState } from 'react';
import InputBox from "../components/UI/InputBox/InputBox";
import TextArea from "../components/UI/InputBox/TextArea";
import AnimateButtonSecondary from "../components/UI/Buttons/AnimateButtonSecondary";
import axios from 'axios';

export default function ReplyBox({blog_id, fetchComments}) {
  const [replyMessage, setReplyMessage] = useState({
    fullname: "",
    email: "",
    comment: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReplyMessage({
      ...replyMessage,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!replyMessage.fullname == "" && !replyMessage.email == ""  && !replyMessage.comment == ""){
      axios.post(`http://localhost:5000/comment/add-comment/${blog_id}`, {
        fullname : replyMessage.fullname ,
        email : replyMessage.email,
        comment : replyMessage.comment 
      },
      {
        headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        },
        withCredentials : false
      },
    ).then((result) => {
        if(result){
          fetchComments()
          console.log(result.data.message);
        }
      }).catch((err) => {
        console.log(err);
      });
    }
    else{
      console.log("Fields are empty");
    }
  }


  return (
    <div className='flex flex-col outline outline-1 p-5 space-y-3'>
      <p>Leave A Reply</p>
      <p>Feel free to Send you valuable feedback</p>
      <div className='flex flex-row space-x-5'>
        <InputBox
          type="text"
          placeholder="Your Name"
          name="fullname"
          value={replyMessage.fullname}
          onChange={handleChange}
        />
        <InputBox
          type="email"
          placeholder="Email Address"
          name="email"
          value={replyMessage.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextArea
          placeholder="Comment"
          rows={10}
          name="comment"
          value={replyMessage.comment}
          onChange={handleChange}
        />
      </div>
      <div className='w-fit' onClick={handleSubmit}>
        <AnimateButtonSecondary text="Send Reply" />
      </div>
    </div>
  );
}
