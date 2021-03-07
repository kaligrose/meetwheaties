import React, { Component } from 'react';
//import './App.css';
import "survey-react/survey.css"
import * as Survey from "survey-react"
class App extends Component {
    constructor(props){
        super(props)
            this.state = {

            }
        this.onCompleteComponent = this.onCompleteComponent.bind(this)
    }
    onCompleteComponent = () => {
        this.setState({
            isCompleted: true
        })
    }
    render() {
        var json = {
            "completedHtml": "<h3>Thank you for your feedback.</h3> <h5>Your thoughts and ideas will help us to create a great product!</h5>",
            "completedHtmlOnCondition": [
                {
                    "expression": "{nps_score} > 8",
                    "html": "<h3>Thank you for your feedback.</h3> <h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>"
                }, {
                    "expression": "{nps_score} < 7",
                    "html": "<h3>Thank you for your feedback.</h3> <h5> We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.</h5><br/>"
                }
            ],
        
                "pages": [
                 {
                  "name": "page1",
                  "elements": [
                   {
                    "type": "dropdown",
                    "name": "question2",
                    "title": "What grade are you in?",
                    "choices": [
                     {
                      "value": "item1",
                      "text": "Freshman"
                     },
                     {
                      "value": "item2",
                      "text": "Sophomore"
                     },
                     {
                      "value": "item3",
                      "text": "Junior"
                     },
                     {
                      "value": "item4",
                      "text": "Senior"
                     },
                     {
                      "value": "item5",
                      "text": "Other"
                     }
                    ]
                   },
                   {
                    "type": "dropdown",
                    "name": "question4",
                    "title": "What grade are you interested in meeting?",
                    "choices": [
                     {
                      "value": "item1",
                      "text": "Freshman"
                     },
                     {
                      "value": "item2",
                      "text": "Sophomore"
                     },
                     {
                      "value": "item3",
                      "text": "Junior"
                     },
                     {
                      "value": "item4",
                      "text": "Senior"
                     },
                     {
                      "value": "item5",
                      "text": "Other"
                     }
                    ]
                   },
                   {
                    "type": "text",
                    "name": "question3",
                    "title": "What's your major?"
                   },
                   {
                    "type": "ranking",
                    "name": "question1",
                    "title": "What night of the week works best for you?",
                    "choices": [
                     "Monday",
                     "Tuesday",
                     "Wednesday",
                     "Thursday",
                     "Friday",
                     "Saturday",
                     "Sunday"
                    ]
                   }
                  ]
                 }
                ]
               
        };
        var surveyRender = !this.state.isCompleted ? (
            <Survey.Survey
                json={json}
                showCompletedPage = {false}
                onComplete = {this.onCompleteComponent}
            />
        ) : null

        var onSurveyCompletetion = this.state.isCompleted ? (
            <div> Thanks for completing the survey</div>
        ) : null
        return (
            <div className="App">
                <div>
                    {surveyRender}
                    {onSurveyCompletetion}
                </div>
                
            </div>
        );
    }
}

export default App;
