import React, { useState } from 'react';
import axios from 'axios';
import './senti.css';
import { type } from '@testing-library/user-event/dist/type';

import { addFeedBackScore } from './addrespnsescore';

const questions = [
    "What is your experince in Project space?",
    "What is your age?",
    "Where are you from?",
    "What is your favorite color?"
];

const Questionnaire = () => {

    // Testing
    const [testtext, steTestText] = useState();
    const [testanswer, setTestAnswer] = useState();
    const [testResult, setTestResult] = useState();

    const handleTestQuery = (test) => {
        setTestAnswer(test);
    }

    const handleTestAnswerSubmit = async () => {

        // try {
        //     const response = await axios.post(
        //         'https://eastus.api.cognitive.microsoft.com/text/analytics/v3.0/sentiment',
        //         {
        //             documents: [
        //                 {
        //                     id: '1',
        //                     text: answers,
        //                 },
        //             ],
        //         },
        //         {
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 'Ocp-Apim-Subscription-Key': '9f54ecd90376405587302221386854f8',
        //             },
        //         }
        //     );
        //     console.log('Sentiment:', response.data.documents[0]);
        //     setTestResult(response.data.documents[0].sentiment);
        //     setTestAnswer("");
        // } catch (error) {
        //     console.error('Error analyzing sentiment:', error);
        // }
    };

    // Feedback
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState("");
    const [sentimentScore, setSentimentScore] = useState();
    const [Data , SetData] = useState([]);
    const [ x ,setX] = useState(0);

    const feedbackdata = {
        question_one: '',
        question_two: '',
        question_three: '',
        question_four: ''
    };

   

    const handleAddAnswer = (answer) => {
        setAnswers(answer);
    }

    const handleAnswerSubmit = async () => {
        if(answers){
            console.log("getting");
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                console.log("All questions answered:", answers);
            }
            
            try {
                    const response = await axios.post(
                            'https://eastus.api.cognitive.microsoft.com/text/analytics/v3.0/sentiment',
                            {
                                    documents: [
                                            {
                                                    id: '1',
                                                    text: answers,
                                                },
                                            ],
                                        },
                                        {
                                                headers: {
                                                        'Content-Type': 'application/json',
                        'Ocp-Apim-Subscription-Key': '9f54ecd90376405587302221386854f8',
                    },
                }
            );
            console.log('Sentiment:', response.data.documents[0].sentiment);
            setSentimentScore(response.data.documents[0].sentiment);
            Data[x] = response.data.documents[0].sentiment;

            // if(currentQuestionIndex === 1){
            //     feedbackdata.question_one = response.data.documents[0].sentiment;
            // }else if(currentQuestionIndex === 2){
            //     feedbackdata.question_two = response.data.documents[0].sentiment;
            // }else if(currentQuestionIndex === 3){
            //     feedbackdata.question_three = response.data.documents[0].sentiment;
            // }else{
            //     feedbackdata.question_four = response.data.documents[0].sentiment;
            // }

            setX(x+1);
            console.log(Data);      
            

        } catch (error) {
                console.error('Error analyzing sentiment:', error);
            }
                setAnswers("");
        };
    };

    const finalSubmit = async() => {

        feedbackdata.question_one = Data[0];
        feedbackdata.question_two = Data[1];
        feedbackdata.question_three = Data[2];
        feedbackdata.question_four = Data[3];

        console.log(feedbackdata);
        const result = await addFeedBackScore(feedbackdata);
        console.log(result);
    }




    return (
        <div>
            <div className='sent-container'>
                <div className='individual-content'>
                    <h1>Enter Your Statement</h1>
                    <textarea
                        style={{ width: '300px', height: '100px' }}
                        placeholder="Test Your query here..."
                        value={testanswer}
                        onChange={(e) => handleTestQuery(e.target.value)}
                        className="text-input" // Add className for styling
                    />
                    <button onClick={handleTestAnswerSubmit} className="submit-button">Submit Test</button> {/* Simple button */}
                </div>
                <div className='individual-content'>
                    <h1>Question {currentQuestionIndex + 1}</h1>
                    <p>{questions[currentQuestionIndex]}</p>
                    <textarea
                        // type="textarea"
                        style={{ width: '300px', height: '100px' }}
                        placeholder="Enter Answer here..."
                        value={answers}
                        onChange={(e) => handleAddAnswer(e.target.value)}
                        className="text-input" // Add className for styling
                    />
                    {/* {console.log(currentQuestionIndex)} */}
                    {(x > 3) ? <div>
                        <button onClick={finalSubmit}>final submit</button>
                    </div> : <button onClick={handleAnswerSubmit} className="submit-button">Submit Answer</button>}
                </div>
            </div>
        </div>
    );
};

export default Questionnaire;