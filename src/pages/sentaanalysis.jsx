import React, { useState } from 'react';
import './demo.css'
import axios from 'axios';

import ticklogo from '../images/ticklog.jpg';

function FormSentiment() {
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [text4, setText4] = useState('');
    const [text5, setText5] = useState('');
    const [text6, setText6] = useState('');
    const [sentiment, setSentiment] = useState([]);
    const [sentiment2, setSentiment2] = useState([]);
    const [sentiment3, setSentiment3] = useState([]);
    const [sentiment4, setSentiment4] = useState([]);

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);

    const analyzeSentiment = async (e) => {
        e.preventDefault()
        try {
            if (text == "" && text2 == "" && text3 == "" && text4 == "") {
                alert("Please fill the all the fields")
            }
            
            else {

                await axios.post("", )
            }



        } catch (error) {
            console.error('Error analyzing sentiment:', error);
        }
    };

    return (

        <>
        <div style={{textAlign:"right"}}>
            <img src={ticklogo} style={{width:"200px"}}/>
        </div>
            <form id="contact" >
                <div id="logo" className="bouncing">
                    {/* <img src={Logo} width="70px" /> */}
                </div>
                <h1 id="title"> Feedback  </h1>
                <div id="wrapper" className="clearfix">
                    {
                        show1 ? (
                            <>
                                <center>

                                    {/* <img src={ticklogo} width="50px" /> */}
                                </center>
                            </>
                        )
                            :
                            (

                                <>
                                    <label><b>How would you rate your overall understanding of Gen AI after the event? (Scale: Poor, Fair, Good, Excellent)</b></label>
                                    <textarea id="" value={text} onChange={(e) => setText(e.target.value)} placeholder="Provide your comments here" required></textarea>
                                </>
                            )

                    }

                    {
                        show2 ? (
                            <>
                                <center>

                                    {/* <img src={ticklogo} width="100px" /> */}
                                </center>
                            </>
                        )
                            :
                            (

                                <>
                                    <label><b>What aspects of the Gen AI introduction did you find most engaging or informative?</b></label>
                                    <textarea id="" value={text2} onChange={(e) => setText2(e.target.value)} placeholder="Provide your comments here" required></textarea>
                                </>
                            )

                    }

                    {
                        show3 ? (
                            <>
                                <center>

                                    {/* <img src={Tick3} width="50px" /> */}
                                </center>
                            </>
                        )
                            :
                            (

                                <>
                                    <label><b>Did the event meet your expectations regarding the depth and breadth of information about Gen AI?</b></label>
                                    <textarea id="" value={text3} onChange={(e) => setText3(e.target.value)} placeholder="Provide your comments here" required></textarea>
                                </>
                            )

                    }

                    {
                        show4 ? (
                            <>
                                <center>

                                    {/* <img src={Tick4} width="50px" /> */}
                                </center>
                            </>
                        )
                            :
                            (

                                <>
                                    <label><b>How do you feel about the introduction of Gen AI in the Technical Hub’s training environment,</b></label>
                                    <textarea id="" value={text4} onChange={(e) => setText4(e.target.value)} placeholder="Provide your comments here" required></textarea>
                                </>
                            )

                    }

{
                        show5 ? (
                            <>
                                <center>

                                    {/* <img src={Tick5} width="50px" /> */}
                                </center>
                            </>
                        )
                            :
                            (

                                <>
                                    <label><b>Were there any specific concerns or questions that arose for you after watching the event inclusive of GEN AI?</b></label>
                                    <textarea id="" value={text5} onChange={(e) => setText5(e.target.value)} placeholder="Provide your comments here" required></textarea>
                                </>
                            )

                    }
                                    <label><b>Did the GOLDEN DAY of Technical Hub make you help learn and entertain?</b></label>
                                    <textarea id="" value={text6} onChange={(e) => setText6(e.target.value)} placeholder="Provide your comments here" required></textarea>

                    <button type='submit' id="submit" onClick={analyzeSentiment} >
                        submit
                    </button>

                </div>
            </form>

        </>
    )
}

export default FormSentiment;