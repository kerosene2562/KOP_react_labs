export const CONSENT_KEY = 'cookieConsentConfig';
export const CONSENT_EVENT = 'cookie-consent-changed';

export const defaultConsent = {
  necessary: true,
  preferences: false,
  statistics: false,
  marketing: false,
};

export function getStoredConsent() {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    return {
      status: parsed?.status ?? 'custom',
      categories: {
        ...defaultConsent,
        ...(parsed?.categories ?? {}),
      },
      timestamp: parsed?.timestamp ?? null,
    };
  } catch {
    return null;
  }
}

export function getConsentCategories() {
  return getStoredConsent()?.categories ?? null;
}

export function hasConsent(category) {
  if (category === 'necessary') return true;
  return Boolean(getConsentCategories()?.[category]);
}

export function saveConsent(status, categories) {
  const payload = {
    status,
    categories: {
      ...defaultConsent,
      ...categories,
      necessary: true,
    },
    timestamp: new Date().toISOString(),
  };

  localStorage.setItem(CONSENT_KEY, JSON.stringify(payload));
  window.dispatchEvent(new Event(CONSENT_EVENT));

  return payload;
}

export function removePreferenceStorage() {
  localStorage.removeItem('difficulty');
  localStorage.removeItem('difficult');
}

export function getResultsStorageKey() {
  const userId = localStorage.getItem('uuid');
  return userId ? `${userId}_gameSave` : null;
}

export function removeStatisticsStorage() {
  const resultsKey = getResultsStorageKey();
  localStorage.removeItem('gameSave');
  if (resultsKey) {
    localStorage.removeItem(resultsKey);
  }
}
