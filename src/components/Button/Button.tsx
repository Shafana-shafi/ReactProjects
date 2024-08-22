import "../../App.css";
import "../../variable.css";

/**
 * Button component that displays a button with a label and triggers an action when clicked.
 *
 * @param {Object} props - The props object for the component.
 * @param {string} props.label - The text to display on the button.
 * @param {(value: number) => void} props.onClick - The function to call when the button is clicked. It receives the numeric value extracted from the label as its argument.
 *
 * @returns {JSX.Element} The Button component.
 */
interface ButtonProps {
  label: string;
  onClick: (value: number) => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      className={`
        bg-[var(--button-bg-color)]
        text-[var(--button-text-color)]
        rounded-md
        font-[var(--button-font-family)]
        leading-6
        w-full
        py-5 px-2.5
        focus:bg-[var(--button-focus-bg-color)]
        text-[2rem]
      `}
      onClick={() => onClick(Number(label.replace("%", "")))}
    >
      {label}
    </button>
  );
}
