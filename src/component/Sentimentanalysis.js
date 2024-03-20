import React, { useState } from 'react'; 
import axios from 'axios';

const AzureSentimentAnalysis = () => { 
    const [text, setText] = useState('');
    const [sentiment, setSentiment] = useState(null); 

    const analyzeSentiment = async () => {
        try { 
            const response = await axios.post(
                'https://eastus.api.cognitive.microsoft.com/text/analytics/v3.0/sentiment',
                {
                    documents: [
                        {
                            id: '1',
                            text: text,
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
            console.log('Sentiment:', response.data.documents[0]);
            setSentiment(response.data.documents[0].sentiment);
        } catch (error) {
            console.error('Error analyzing sentiment:', error);
        }
    };

    return (
        <div>
            <h2>Azure Sentiment Analysis</h2>
            <textarea
                rows="4"
                cols="50"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text for sentiment analysis..."
            ></textarea>
            <br />
            <button onClick={analyzeSentiment}>Analyze Sentiment</button>
            {sentiment && (
                <div>
                    <h3>Sentiment: {sentiment}</h3>
                </div>
            )}
        </div>
    );
};

export default AzureSentimentAnalysis;
