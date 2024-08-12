import React from "react";
import { Button } from "../Button/Button";

/*
 * @param {Object} props - The props object for the component.
 * @param {string} props.label - The label to display above the tip selection.
 * @param {(tip: number) => void} props.onClick - Function to call when a tip percentage is selected or when a custom tip is entered.
 * @param {number} props.tip - The current tip value, either selected or custom entered.
 *
 * @returns {JSX.Element} The Selecttip component.
 */
interface SelecttipProps {
  label: string;
  onClick: (tip: number) => void;
  tip: number;
}

export function Selecttip({ label, onClick, tip }: SelecttipProps) {
  const tips = [5, 10, 15, 20, 25];

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const customTip = parseFloat(event.target.value) || 0;
    customTip >= 0 && onClick(customTip);
  };

  return (
    <div className="bg-white font-space-mono w-full flex flex-col text-[#5d6b6c]">
      <label className="w-full text-xl tracking-wider font-bold text-[#5d6b6c]">
        {label}
      </label>
      <div className="w-full grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6 ">
        {tips.map((tipValue, index) => (
          <Button
            key={index}
            className="bg-[#00474b] text-white text-2xl rounded-md font-space-mono leading-6 w-full box-border py-2"
            label={`${tipValue}%`}
            onClick={(value) => {
              onClick(value);
            }}
          />
        ))}
        <input
          type="number"
          className="text-xl font-space-mono font-bold tracking-wider text-[#5d6b6c] box-border w-full rounded-md border-0 bg-[#f9f9f9] text-center py-2"
          value={tip}
          onChange={handleOnChange}
          placeholder="Custom"
          max={100}
          onKeyPress={(event) => {
            if (event.key === "-" || event.key === "+") {
              event.preventDefault();
            }
          }}
        />
      </div>
      <div className="min-h-[1.5rem] text-[#b64949] text-sm mt-1">
        {tip < 0 ? "Tip Cannot be Less than 0" : ""}
      </div>
    </div>
  );
}
