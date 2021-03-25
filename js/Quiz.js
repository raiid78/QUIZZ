class Quiz{
    constructor(){
      
    }
    getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }
    
    async start(){
        if(gameState === 0){
          contestant = new Contestant();
          var contestantCountRef = await database.ref('contestantCount').once("value");
          if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
          }
          question = new Question()
          question.display();
        }
    }
    play(){
      question.hide();
      background("White");
      fill("Blue");
      textSize(12);
      text("Results", 300, 50);

      contestant.getContestantInfo();
      if(allContestants !== undefined){
        var displayAnswers = 200;
        fill("red");
        textSize(12);
        text("Winner is highlighted in green", 130, 200);

        for(var plr in allContestants){
          var correctAnswer = "3";
          if(correctAnswer === allContestants[plr].answer){
            fill("green");
          }
          else{
            fill("red");
          }
        displayAnswers += 30;
        textSize(12);
        text(allContestants[plr].name + ":" + allContestants[plr].answer, 250, displayAnswers);
        }
      }
    }
}