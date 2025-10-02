let user = {
    lastCorrectAnswers: 0,
    correctAnswers: 0,
    games: 0,
    correctAnswersPercentage: 0
};

export function getUserStats()
{
    return user;
}

export function updateUserStats(updatedData)
{
    user = updatedData;
}