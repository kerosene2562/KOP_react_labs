import { getCountOfAnswers, getArithmeticOperator, getRandomNumber } from "../../utils";
/**
 * Custom hook that generates a mathematical exercise
 * based on the selected difficulty level.
 *
 * The hook:
 * - Generates two random numbers
 * - Selects an arithmetic operator
 * - Calculates the correct answer
 * - Generates a set of unique answer options
 * - Randomizes the answer order
 *
 * @function useEngineExercise
 * @param {Object} params
 * @param {string} params.level - Difficulty level (e.g., "easy", "medium", "hard").
 *
 * @returns {Object} Exercise data object.
 * @returns {string} returns.exercise - Generated exercise string (e.g., "5 + 3 = ?").
 * @returns {number|string} returns.correctAnswer - Correct result of the expression.
 * @returns {Array<number|string>} returns.shuffledAnswers - Array of randomized answer options.
 */
export function useEngineExercise({ level }) {
    const firstNumber = getRandomNumber({ level });
    const secondNumber = getRandomNumber({ level });
    const operation = getArithmeticOperator({ level });
    const countOfAnswers = getCountOfAnswers({ level });

    const exercise = `${firstNumber} ${operation} ${secondNumber} = ?`;

    function calculate(firstNumber, secondNumber, operation) {
        switch (operation) {
            case "+":
                return firstNumber + secondNumber;

            case "-":
                return firstNumber - secondNumber;

            case "*":
                return firstNumber * secondNumber;

            case "/":
                return (firstNumber / secondNumber).toFixed(3);
        }
    }

    const correctAnswer = calculate(firstNumber, secondNumber, operation);

    const answers = [correctAnswer];

    while (answers.length < countOfAnswers) {
        const answer = correctAnswer + (Math.floor(Math.random() * 10 * (Math.random() < 0.5 ? -1 : 1)));
        if (!answers.includes(answer)) {
            answers.push(answer);
        }
    }

    const shuffledAnswers = answers.sort(() => Math.random() - 0.5);

    return (
        { exercise, correctAnswer, shuffledAnswers }
    );
}