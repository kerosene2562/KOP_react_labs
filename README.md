# Best Practices (Lab 6)

## 1) Feature-based структура для Redux (Redux Toolkit)

Redux-логіка згрупована за фічами, а не за типами файлів.
Це робить проєкт читабельнішим та простішим у підтримці.

**Де застосовано:**
- Settings slice: [`src/features/settings/settingsSlice.js`](./src/features/settings/settingsSlice.js)
- Results slice: [`src/features/results/resultsSlice.js`](./src/features/results/resultsSlice.js)
- Підключення редʼюсерів у store: [`src/store.js`](./src/store.js)

---

## 2) Виносити логіку з компонентів у кастомні хуки

Складну/повторювану логіку краще тримати не в компонентах, а в custom hooks - так компоненти стають “тонкими” і відповідають за UI.

**Де застосовано:**
- Таймер як кастомний хук: [`src/hooks/logic/useTimer.jsx`](./src/hooks/logic/useTimer.jsx)
- Компонент, який використовує цей хук: [`src/components/Timer/Timer.jsx`](./src/components/Timer/Timer.jsx)
- Генерація вправи/відповідей винесена в окремий “engine” hook: [`src/hooks/engine/useEngineExercise.jsx`](./src/hooks/engine/useEngineExercise.jsx)
- Використання engine hook у грі: [`src/pages/Game.jsx`](./src/pages/Game.jsx)

---

## 3) Розділяти state по логічних групах

Замість одного стану на все, стани розбиті по окремих відповідальностях:
- прогрес гри (correctAnswers, totalTasks)
- налаштування/час (time, timerKey)
- модальні вікна (showResults, showSettings)

Це полегшує читання коду та зменшує кількість помилок при оновленнях.

**Де застосовано:**
- Локальні стани гри розбиті по сенсу: [`src/pages/Game.jsx`](./src/pages/Game.jsx)
- Глобальний стан результатів розбитий на поля в RTK slice: [`src/features/results/resultsSlice.js`](./src/features/results/resultsSlice.js)

---

## 4) Перевикористовувані UI-компоненти + barrel exports

Базові UI-елементи винесені в окремі компоненти (Button, Text, Portal, Layout), щоб не дублювати логіку.
А щоб імпорти були акуратні — використані barrel exports (`index.jsx`).

**Де застосовано:**
- Перевикористовувана кнопка: [`src/components/buttons/Button.jsx`](./src/components/buttons/Button.jsx)
- Інші UI-компоненти: [`src/components/ui/Portal.jsx`](./src/components/ui/Portal.jsx), [`src/components/ui/Layout.jsx`](./src/components/ui/Layout.jsx)
- Barrel exports для компонентів: [`src/components/index.jsx`](./src/components/index.jsx)
- Barrel exports для хуків: [`src/hooks/index.jsx`](./src/hooks/index.jsx)

---

## 5) Виносити чисту логіку в utils

Допоміжні функції без UI винесені в `src/utils`.
Це робить код простішим для тестування, зручнішим для повторного використання та читабельнішим.

**Де застосовано:**
- utils: [`src/utils/`](./src/utils/)
- Приклад використання utils у “engine” логіці: [`src/hooks/engine/useEngineExercise.jsx`](./src/hooks/engine/useEngineExercise.jsx)
- Збереження результатів винесено у функцію: [`src/utils/saveGameResults.jsx`](./src/utils/saveGameResults.jsx)