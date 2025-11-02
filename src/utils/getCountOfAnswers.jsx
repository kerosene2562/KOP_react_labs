export function getCountOfAnswers({ level })
{
    if(level == "hard")
        return 5;
    else if(level == "medium")
        return 4;
    else
        return 3;
}