import { Provider } from "react-redux";
import { store } from "../../store";
import { SettingsForm } from "./SettingsForm";

export default {
    title: "Game/SettingsForm",
    component: SettingsForm,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <div style={{ padding: 16, maxWidth: 600 }}>
                    <Story />
                </div>
            </Provider>
        ),
    ],
};

function setSavedDifficulty(level) {
    localStorage.setItem("difficulty", JSON.stringify(level));
    localStorage.setItem("difficult", JSON.stringify(level));
}

function clearSavedDifficulty() {
    localStorage.removeItem("difficulty");
    localStorage.removeItem("difficult");
}

export const Default = {
    loaders: [
        async () => {
            clearSavedDifficulty();
            return {};
        },
    ],
};

export const MediumSaved = {
    loaders: [
        async () => {
            setSavedDifficulty("medium");
            return {};
        },
    ],
};

export const HardSaved = {
    loaders: [
        async () => {
            setSavedDifficulty("hard");
            return {};
        },
    ],
};
