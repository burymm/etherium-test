pragma solidity ^0.4.18;

contract Questionnaire {

    struct HardLink {
      string jsonLink; //32 uint8 - 20k gas
      string jsonHash; //32 uint8 - 20k gas
    }

    event NewAnswers(address indexed from, string value);
    event NewResults(address indexed from, string value);

    HardLink private _questions;
    HardLink private _results;
    mapping (address => HardLink) private _answers;

    /*
     *  Questions
     */
    function Questionnaire(string jsonLink, string jsonHash) public
    {
        require(bytes(jsonLink).length > 0);
        require(bytes(jsonHash).length > 0);
        _questions = HardLink(jsonLink, jsonHash);
    }

    function getQuestionsLink() public view returns(string) {
        return _questions.jsonLink;
    }

    function getQuestionsHash() public view returns(string) {
        return _questions.jsonHash;
    }

    /*
     *  Answers
     */
    function postAnswers(string jsonLink, string jsonHash) public {
        require(bytes(jsonLink).length > 0);
        _answers[msg.sender] = HardLink(jsonLink, jsonHash);
        NewAnswers(msg.sender, _answers[msg.sender].jsonLink);
    }

    function getAnswersLink() public view returns(string) {
        return _answers[msg.sender].jsonLink;
    }

    function getAnswersHash() public view returns(string) {
        return _answers[msg.sender].jsonHash;
    }

    /*
     *  Results
     */
    function postResults(string jsonLink, string jsonHash) public {
        require(bytes(jsonLink).length > 0);
        require(bytes(jsonHash).length > 0);
        _results = HardLink(jsonLink, jsonHash);
        NewResults(msg.sender, jsonLink);
    }

    function getResultsLink() public view returns(string) {
        return _results.jsonLink;
    }

    function getResultsHash() public view returns(string) {
        return _results.jsonHash;
    }
}

/*
Questions json
  {
    "title" : <string>,
    "description" : <string>,
    "questions" : [
      {
        "text":<string>,
        "question_idx":<int>,
        "answers":[
          {
            "text":<string>,
            "answer_idx":<int>
          },
          ...
        ]
      }
      ...
    ]
  }

Answers json
  [
    {
      "question_idx":<int>,
      "answer_idx":<int>
    },
    ...
  ]
*/
