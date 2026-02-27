import { useEffect, useState } from "react";
import styles from "./CookiePopup.module.css";

const CONSENT_KEY = "cookieConsentConfig";

export function CookiePopup() {
    const [visible, setVisible] = useState(false);

    const [consent, setConsent] = useState({
        necessary: true,
        preferences: true,
        statistics: true,
        marketing: false
    });

    useEffect(() => {
        const saved = localStorage.getItem(CONSENT_KEY);

        if (!saved) {
            setVisible(true);
            return;
        }

        const parsed = JSON.parse(saved);

        if (parsed.status === "declined") {
            leaveWebsite();
        }
    }, []);

    function saveConsent(status, config) {
        const payload = {
            status,
            categories: config,
            timestamp: new Date().toISOString()
        };

        localStorage.setItem(CONSENT_KEY, JSON.stringify(payload));
    }

    function leaveWebsite() {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "/start";
        }
    }

    function handleToggle(category) {
        if (category === "necessary") return;

        setConsent(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    }

    function acceptAll() {
        const fullConsent = {
            necessary: true,
            preferences: true,
            statistics: true,
            marketing: false
        };

        saveConsent("accepted", fullConsent);
        setVisible(false);
    }

    function declineNonEssential() {
        const minimalConsent = {
            necessary: true,
            preferences: false,
            statistics: false,
            marketing: false
        };

        saveConsent("declined", minimalConsent);
        leaveWebsite();
    }

    function savePreferences() {
        saveConsent("custom", consent);
        setVisible(false);
    }

    if (!visible) return null;

    return (
        <div className={styles.overlay} role="dialog" aria-modal="true">
            <div className={styles.popup}>
                <h3 className={styles.title}>Cookie & Privacy Settings</h3>

                <p className={styles.text}>
                    This application uses browser storage (localStorage).
                    You can configure which categories you allow.
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
                        <span><b>Preferences</b> – difficulty and user settings</span>
                    </label>
                </div>

                <div className={styles.category}>
                    <label>
                        <input
                            type="checkbox"
                            checked={consent.statistics}
                            onChange={() => handleToggle("statistics")}
                        />
                        <span><b>Statistics</b> – game progress and results</span>
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
    );
}