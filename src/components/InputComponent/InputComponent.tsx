import React, { useId } from "react";
import clsx from "clsx";
import dollarIcon from "../../assets/dollar-sign-svgrepo-com.svg";
import personIcon from "../../assets/profile.svg";

/**
 * A numeric input field with an associated icon and label.
 *
 * @param {Object} props - Component props.
 * @param {string} props.label - Label for the input field.
 * @param {'person' | 'dollar'} props.typeOfIcon - Type of icon to display (either 'person' or 'dollar').
 * @param {number} props.value - Current value of the input field.
 * @param {React.ChangeEventHandler<HTMLInputElement>} props.onChange - Event handler for input value changes.
 *
 * @returns {JSX.Element} The InputComponent element.
 */
interface InputComponentProps extends React.ComponentProps<"input"> {
  label: string;
  typeOfIcon: "person" | "dollar";
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputComponent({
  label,
  typeOfIcon,
  value,
  onChange,
}: InputComponentProps) {
  const iconSrc = typeOfIcon === "person" ? personIcon : dollarIcon;
  const inputId = useId();

  const isError = value === 0;
  const isEmpty =
    value === null || value === undefined || value.toString() === "";

  return (
    <div className="w-full bg-white flex flex-col text-gray-700 mt-1.5">
      <label
        htmlFor={inputId}
        className="text-xl font-bold tracking-wide mb-2 text-gray-500 font-space-mono"
      >
        {label}
      </label>
      <div
        className={clsx(
          "flex items-center rounded-lg border transition-colors duration-300",
          {
            "bg-[var(--input-bg-color)]": true,
            "border-[var(--input-error-border-color)]": isError,
            "border-[var(--input-border-color)]": !isError,
            "focus:border-[#25C2AD]": true && !isError,
          }
        )}
      >
        <img
          className="w-6 mx-2 inline-block align-middle"
          src={iconSrc}
          alt={`${typeOfIcon} icon`}
        />
        <div className="w-full flex flex-col">
          <input
            type="number"
            id={inputId}
            className={clsx(
              "flex-1 font-bold leading-6 text-right font-space-mono bg-transparent border outline-none px-2 py-2",
              {
                "border-[var(--input-border-color)]": !isError,
                "text-xl sm:text-2xl md:text-3xl lg:text-4xl": true,
                "w-full": true,
              }
            )}
            value={value}
            onChange={(event) => {
              console.log("Input onChange event:", event.target.value);
              onChange(event);
            }}
            onKeyPress={(event) => {
              if (event.key === "-" || event.key === "+") {
                event.preventDefault();
              }
            }}
          />
        </div>
      </div>
      <div
        className={clsx("min-h-[1.5rem] text-sm mt-1", {
          "text-red-500": isError && !isEmpty,
          "text-transparent": !isError || isEmpty,
        })}
      >
        {typeOfIcon !== "dollar" &&
          isError &&
          !isEmpty &&
          "Number Of People cannot be Zero"}
      </div>
    </div>
  );
}
