import { useEffect, useState } from "react";
import styles from "./CookiePopup.module.css";

const STORAGE_KEY = "cookieConsent";

export function CookiePopup() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(STORAGE_KEY);

        if (!consent) {
            setVisible(true);
            return;
        }

        if (consent === "declined") {
            decline();
        }
    }, []);

    const accept = () => {
        localStorage.setItem(STORAGE_KEY, "accepted");
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem(STORAGE_KEY, "declined");

        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "/start";
        }
    };

    if (!visible) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <h3>Cookie Notice</h3>

                <p className={styles.text}>
                    This application uses browser local storage to save your settings and
                    results. By clicking "Accept", you agree to the use of this storage.
                </p>

                <p className={styles.policy}>
                    Read our{" "}
                    <a
                        href="/privacy-policy.html"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.link}
                    >
                        Privacy Policy
                    </a>
                    .
                </p>

                <div className={styles.buttons}>
                    <button className={styles.decline} onClick={decline}>
                        Decline
                    </button>
                    <button className={styles.accept} onClick={accept}>
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}