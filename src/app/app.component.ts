import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="happy">Hello</div>
    <div id="question">{{ question }}</div>
    <input type="text" id="answer" [(ngModel)]="input">
    <button (click) ="submitAnswer()" id="submitButton">Submit Answer</button>
    <div id="result">{{ result }}</div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  correctAnswer;
  result;
  input;
  question;

  constructor() {}

  ngOnInit() {
    this.makeQuestion();
  }

resetInput() {

    this.input = "";

}



randomNumber() {

    return Math.floor(Math.random() * 11);

}



makeQuestion() {

    var num1 = this.randomNumber();
    var num2 = this.randomNumber();
    this.correctAnswer = num1 + num2;
    this.question = `${num1} + ${num2}`;
    

}



checkAnswer() {

    

    if (this.input == this.correctAnswer) {

        return "correct";

    }

    else {

        return "incorrect";

    }

}



appendResult(result) {
  this.result = result;
}

submitAnswer() {
  this.appendResult(this.checkAnswer());
  this.resetInput();
  this.makeQuestion();
  

}






    






  
}
