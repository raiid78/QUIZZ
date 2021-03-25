class Question{
    constructor(){
        this.title = createElement('h2');
        this.input1 = createInput("Put Name Here");
        this.input2 = createInput("Enter Answer");
        this.button = createButton('Submit');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
    }
    hide(){
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
    }
    
    display(){
        this.title.html("My Quiz Game");
        this.title.position(350, 0);

        this.question.html("Question:- What month of the year has 28 days?");
        this.question.position(150, 80);
        this.option1.html("1: February");
        this.option1.position(150, 100);
        this.option2.html("2: December");
        this.option2.position(150, 120);
        this.option3.html("3: All of Them");
        this.option3.position(150, 140);
        this.option4.html("4: April");
        this.option4.position(150, 160);


        this.input1.position(150, 230);
        this.input2.position(340, 230);

        this.button.position(300, 300);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount += 1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount); 
        })  
    }
}