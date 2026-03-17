import { useEffect, useState } from "react";
import styles from "./CookiePopup.module.css";
import {
    CONSENT_EVENT,
    defaultConsent,
    getStoredConsent,
    removePreferenceStorage,
    removeStatisticsStorage,
    saveConsent,
} from "../../utils";

export function CookiePopup() {
    const [visible, setVisible] = useState(false);
    const [consent, setConsent] = useState({
        ...defaultConsent,
        preferences: true,
        statistics: true,
    });

    useEffect(() => {
        const saved = getStoredConsent();

        if (!saved) {
            setVisible(true);
            return;
        }

        setConsent(saved.categories);
    }, []);

    function applyConsent(status, config) {
        saveConsent(status, config);

        if (!config.preferences) {
            removePreferenceStorage();
        }

        if (!config.statistics) {
            removeStatisticsStorage();
        }

        setConsent(config);
        setVisible(false);
    }

    function handleToggle(category) {
        if (category === "necessary") return;

        setConsent(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    }

    function acceptAll() {
        applyConsent("accepted", {
            necessary: true,
            preferences: true,
            statistics: true,
            marketing: false,
        });
    }

    function declineNonEssential() {
        applyConsent("declined", {
            necessary: true,
            preferences: false,
            statistics: false,
            marketing: false,
        });
    }

    function savePreferences() {
        applyConsent("custom", consent);
    }

    return visible ? (
        <div className={styles.overlay} role="dialog" aria-modal="true">
            <div className={styles.popup}>
                <h3 className={styles.title}>Cookie & Privacy Settings</h3>

                <p className={styles.text}>
                    This application uses browser storage. Necessary storage keeps the app working,
                    preferences save difficulty, and statistics save your game results.
                </p>

                <div className={styles.category}>
                    <label>
                        <input type="checkbox" checked disabled />
                        <span><b>Necessary</b> – required for application functionality</span>
                    </label>
                </div>

                <div className={styles.category}>
                    <label>
                        <input
                            type="checkbox"
                            checked={consent.preferences}
                            onChange={() => handleToggle("preferences")}
                        />
                        <span><b>Preferences</b> – save selected difficulty</span>
                    </label>
                </div>

                <div className={styles.category}>
                    <label>
                        <input
                            type="checkbox"
                            checked={consent.statistics}
                            onChange={() => handleToggle("statistics")}
                        />
                        <span><b>Statistics</b> – save total games and results history</span>
                    </label>
                </div>

                <p className={styles.policy}>
                    More information:{" "}
                    <a
                        href="/privacy-policy.html"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.link}
                    >
                        Privacy Policy
                    </a>
                </p>

                <div className={styles.buttons}>
                    <button className={styles.decline} onClick={declineNonEssential}>
                        Decline Non-Essential
                    </button>

                    <button className={styles.save} onClick={savePreferences}>
                        Save Preferences
                    </button>

                    <button className={styles.accept} onClick={acceptAll}>
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    ) : null;
}
