class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor(questions, timeLimit, timeRemaining) {
        // Assigning the arguments to the respective properties
        this.questions = questions; // Array of Question objects
        this.timeLimit = timeLimit; // Total time allowed for the quiz
        this.timeRemaining = timeRemaining; // Remaining time for the quiz
    
        // Initial values
        this.correctAnswers = 0; // Initially no correct answers
        this.currentQuestionIndex = 0; // Start with the first question
      }
    // 2. getQuestion()
    // Method to return the current question
    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    
    // 3. moveToNextQuestion()
    // Method to move to the next question
    moveToNextQuestion() {
        this.currentQuestionIndex += 1;
    }

    // 4. shuffleQuestions()
    // Method to shuffle the questions array
    shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]]; // Swap elements
        }
    } 

    // 5. checkAnswer(answer)
    // Method to check if the given answer is correct
    checkAnswer(answer) {
        const currentQuestion = this.getQuestion();
        if (currentQuestion.answer === answer) {
        this.correctAnswers += 1; // Increment correctAnswers if the answer is correct
        }
    }

    // 6. hasEnded()
    // Method to check if the quiz has ended
    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length;
    }
}