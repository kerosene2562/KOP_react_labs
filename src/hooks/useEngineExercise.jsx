import { useRandomNumber, useArithmeticOperator } from ".";

export function useEngineExercise({ level })
{
    const firstNumber = useRandomNumber({ level });
    const secondNumber = useRandomNumber({ level });
    const operation = useArithmeticOperator({ level });

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
                return firstNumber / secondNumber;
        }
    }

    const correctAnswer = calculate(firstNumber, secondNumber, operation);
    
    const answers = [correctAnswer];

    while(answers.length < 4)
    {
        const answer = correctAnswer + (Math.floor(-Math.random() * 10 * (Math.random() < 0.5 ? -1 : 1)));
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