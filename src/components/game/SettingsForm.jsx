import { useEffect, useState } from "react";
import { Button } from "..";
import styles from "./SettingsForm.module.css";
import { useDispatch } from "react-redux";
import { setDifficulty } from "../../features/settings/settingsSlice";
import { CONSENT_EVENT, hasConsent } from "../../utils";

const STORAGE_KEY = "difficulty";

export function SettingsForm() {
  const [difficulty, setDifficultyState] = useState("easy");
  const [preferencesAllowed, setPreferencesAllowed] = useState(hasConsent("preferences"));
  const dispatch = useDispatch();

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("difficult");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed === "easy" || parsed === "medium" || parsed === "hard") {
          setDifficultyState(parsed);
          dispatch(setDifficulty(parsed));
        }
      } catch {
        // ignore invalid value in storage
      }
    }
  }, [dispatch]);

  useEffect(() => {
    const syncConsent = () => setPreferencesAllowed(hasConsent("preferences"));
    window.addEventListener(CONSENT_EVENT, syncConsent);

    return () => window.removeEventListener(CONSENT_EVENT, syncConsent);
  }, []);

  const save = () => {
    dispatch(setDifficulty(difficulty));

    if (hasConsent("preferences")) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(difficulty));
      localStorage.setItem("difficult", JSON.stringify(difficulty));
    }
  };

  const getButtonClass = (level) =>
    difficulty === level ? "selectedDifficultButton" : "difficultButton";

  return (
    <div className={styles.settingsForm}>
      {!preferencesAllowed && (
        <p className="defaultText">
          Preference cookies are disabled, so difficulty will work only for the current session.
        </p>
      )}

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
