export function useRandomNumber({ level })
{
    return Math.floor(Math.random() * (level === 'easy' ? 100 : 1000));
}