import { getCountOfAnswers, getArithmeticOperator, getRandomNumber } from "../../utils";

export function useEngineExercise({ level })
{
    const firstNumber = getRandomNumber({ level });
    const secondNumber = getRandomNumber({ level });
    const operation = getArithmeticOperator({ level });
    const countOfAnswers = getCountOfAnswers({ level });

    const exercise = `${firstNumber} ${operation} ${secondNumber} = ?`;

    function calculate(firstNumber, secondNumber, operation)
    {
        switch(operation)
        {
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

    while(answers.length < countOfAnswers)
    {
        const answer = correctAnswer + (Math.floor(Math.random() * 10 * (Math.random() < 0.5 ? -1 : 1)));
        if(!answers.includes(answer))
        {
            answers.push(answer);
        }
    }

    const shuffledAnswers = answers.sort(() => Math.random() - 0.5);

    return (
        { exercise, correctAnswer, shuffledAnswers }
    );
}