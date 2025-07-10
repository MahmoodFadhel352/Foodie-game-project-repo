/*BEGIN

  DISPLAY "Welcome to the Foodie Game!"

  DEFINE categories = ["Junk Food", "Seafood", "Arabic Food", "Italian Food", "Chinese Food"]
  DEFINE questionBank = dictionary with category names as keys and list of 5 questions as values
  SET currentCategoryIndex = 0
  SET currentQuestionIndex = 0
  SET score = 0
  SET totalQuestions = 25

  FUNCTION startGame()
    SHUFFLE categories
    FOR EACH category in questionBank:
      SHUFFLE questionBank[category]  // Shuffle each category’s questions
    SET currentCategoryIndex = 0
    SET currentQuestionIndex = 0
    SET score = 0
    CALL displayNextQuestion()

  FUNCTION displayNextQuestion()
    IF currentCategoryIndex < categories.length THEN
      SET currentCategory = categories[currentCategoryIndex]
      SET questions = questionBank[currentCategory]

      IF currentQuestionIndex < 5 THEN
        GET question = questions[currentQuestionIndex]
        DISPLAY question and answer choices
        WAIT for user to select an answer
        CALL checkAnswer(userChoice)
      ELSE
        INCREMENT currentCategoryIndex
        SET currentQuestionIndex = 0
        CALL displayNextQuestion()
    ELSE
      CALL endGame()

  FUNCTION checkAnswer(userChoice)
    IF userChoice == correct answer THEN
      INCREMENT score
      DISPLAY "Correct!"
    ELSE
      DISPLAY "Wrong!"
    WAIT for short delay (optional)
    INCREMENT currentQuestionIndex
    CALL displayNextQuestion()

  FUNCTION endGame()
    DISPLAY "You finished the Foodie Game!"
    DISPLAY "Your score: " + score + " out of 25"

    IF score == 25 THEN
      DISPLAY "Master Chef! You're the ultimate foodie! 👑🍽️"
    ELSE IF score >= 18 THEN
      DISPLAY "You’re definitely a foodie! 😋"
    ELSE IF score >= 10 THEN
      DISPLAY "Not bad — you know your food! 👍"
    ELSE
      DISPLAY "You're not a foodie... yet! 🍞🧐 Try again?"

    SHOW option to restart the game

  FUNCTION restartGame()
    CALL startGame()

END
*/
//Subject to change later with the developing 