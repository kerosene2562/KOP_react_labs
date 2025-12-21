import { useEffect, useState } from "react";
import { Button } from "..";
import styles from "./SettingsForm.module.css";
import { useDispatch } from "react-redux";
import { setDifficulty } from "../../features/settings/settingsSlice";

const STORAGE_KEY = "difficulty";

export function SettingsForm() {
  const [difficulty, setDifficultyState] = useState("easy");
  const dispatch = useDispatch();

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed === "easy" || parsed === "medium" || parsed === "hard") {
          setDifficultyState(parsed);
          dispatch(setDifficulty(parsed));
        }
      } catch {
      }
    }
  }, [dispatch]);

  const save = () => {
    dispatch(setDifficulty(difficulty));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(difficulty));
  };

  const getButtonClass = (level) =>
    difficulty === level ? "selectedDifficultButton" : "difficultButton";

  return (
    <div className={styles.settingsForm}>
      <div className={styles.difficultContainer}>
        <Button
          id="easy"
          className={getButtonClass("easy")}
          type="button"
          text="easy"
          action={() => setDifficultyState("easy")}
        />
        <Button
          id="medium"
          className={getButtonClass("medium")}
          type="button"
          text="medium"
          action={() => setDifficultyState("medium")}
        />
        <Button
          id="hard"
          className={getButtonClass("hard")}
          type="button"
          text="hard"
          action={() => setDifficultyState("hard")}
        />
      </div>
      <Button
        id="save"
        className="difficultButton"
        type="button"
        text="Save"
        action={save}
      />
    </div>
  );
}
