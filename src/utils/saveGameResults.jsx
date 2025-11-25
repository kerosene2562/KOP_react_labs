export function saveGameResults({ uuid, correctAnswers, totalTasks })
{
    const key = `${uuid}_gameSave`;
    let gameSave = JSON.parse(localStorage.getItem(key));
    if(gameSave)
    {
        gameSave.lastGameCorrectAnswers = correctAnswers;
        gameSave.correctAnswers = (gameSave.correctAnswers || 0) + correctAnswers;
        gameSave.totalTasks = (gameSave.totalTasks || 0) + totalTasks;
        gameSave.totalGames = (gameSave.totalGames || 0) + 1;

        localStorage.setItem(key, JSON.stringify(gameSave));
    }
    else
    {
        const newSave = {
            lastGameCorrectAnswers: correctAnswers,
            correctAnswers,
            totalTasks,
            totalGames: 1
        };
        localStorage.setItem(key, JSON.stringify(newSave))
    }
}