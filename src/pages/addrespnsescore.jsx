
import React from "react";
import axios from "axios";


export const addFeedBackScore = async(feeddata) => {
    console.log("comming");
    console.log(feeddata);
    await axios.post("http://localhost:7000/api/add-feedback-data", feeddata)
    .then((result) => {
        console.log(result);
        console.log("data added");
        // return result;
    }).catch((error) => {
        console.log(error);
    })
}