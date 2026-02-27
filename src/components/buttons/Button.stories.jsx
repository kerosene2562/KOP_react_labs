import { Button } from "./Button";

export default {
    title: "UI/Button",
    component: Button,
    argTypes: {
        id: { control: "text" },
        text: { control: "text" },
        type: {
            control: { type: "select" },
            options: ["button", "submit", "reset"],
        },
        className: {
            control: { type: "select" },
            options: [
                "startButton",
                "answerButton",
                "difficultButton",
                "selectedDifficultButton",
                "settingsButton",
                "closeButton",
                "restartButton",
                "headerButton",
            ],
        },
        action: { action: "clicked" },
    },
};

export const StartButton = {
    args: {
        id: "start",
        text: "Start",
        type: "button",
        className: "startButton",
    },
};

export const AnswerButton = {
    args: {
        id: "answer",
        text: "42",
        type: "button",
        className: "answerButton",
    },
};

export const DisabledExample = {
    render: (args) => (
        <Button {...args} action={() => { }} />
    ),
    args: {
        id: "disabled",
        text: "Disabled",
        type: "button",
        className: "difficultButton",
    },
    parameters: {
        docs: {
            description: {
                story:
                    "Your Button component does not have a built-in `disabled` prop. This story shows a 'disabled-like' example by using a no-op click handler. If you later add a `disabled` prop, you can replace this story with a real disabled state.",
            },
        },
    },
};
