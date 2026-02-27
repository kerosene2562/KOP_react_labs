/**
 * Save or update game statistics in localStorage for a specific user.
 * @param {Object} params
 * @param {string} params.uuid Unique user id stored in localStorage.
 * @param {number} params.correctAnswers Number of correct answers in the current game.
 * @param {number} params.totalTasks Total answered tasks in the current game.
 * @returns {void}
 */
export function saveGameResults({ uuid, correctAnswers, totalTasks }) {
    const key = `${uuid}_gameSave`;
    let gameSave = JSON.parse(localStorage.getItem(key));
    if (gameSave) {
        gameSave.lastGameCorrectAnswers = correctAnswers;
        gameSave.correctAnswers = (gameSave.correctAnswers || 0) + correctAnswers;
        gameSave.totalTasks = (gameSave.totalTasks || 0) + totalTasks;
        gameSave.totalGames = (gameSave.totalGames || 0) + 1;

        localStorage.setItem(key, JSON.stringify(gameSave));
    }
    else {
        const newSave = {
            lastGameCorrectAnswers: correctAnswers,
            correctAnswers,
            totalTasks,
            totalGames: 1
        };
        localStorage.setItem(key, JSON.stringify(newSave))
    }
}