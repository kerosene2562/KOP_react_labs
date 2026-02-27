import { v4 as uuidv4 } from "uuid";

/**
 * Returns a stable user UUID from localStorage.
 * Generates a new UUID and stores it if it does not exist.
 * @returns {string} User UUID.
 */
export function getUuid() {
    let uuid = uuidv4();
    const savedUuid = localStorage.getItem("uuid");
    if (savedUuid) {
        uuid = savedUuid;
    }
    else {
        localStorage.setItem("uuid", uuid);
    }
    return uuid;
}