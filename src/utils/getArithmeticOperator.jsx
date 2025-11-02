export function getArithmeticOperator({ level })
{
    const operators = ['+', '-', '/', '*'];

    return (
        level === 'easy' || level === 'medium' ? operators[Math.floor(Math.random() * 2)] : operators[Math.floor(Math.random() * 4)]
    );
}