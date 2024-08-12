import React from "react";
import "../../App.css";

/*
 * @param {Object} props - The props object for the component.
 * @param {string} props.label - The label for the item.
 * @param {string | number} [props.tipPerPerson] - The tip amount per person.
 * @param {string | number} [props.totalPerPerson] - The total amount per person.
 *
 * @returns {JSX.Element} The Totalitem component.
 */
interface TotalitemProps {
  label: string;
  tipPerPerson?: string | number;
  totalPerPerson?: string | number;
}

const Totalitem: React.FC<TotalitemProps> = ({
  label,
  tipPerPerson,
  totalPerPerson,
}) => {
  console.log("in item", totalPerPerson, tipPerPerson);

  return (
    <div className="bg-[#00474B] w-full rounded-lg flex flex-row justify-between items-center">
      <div className="font-mono text-[#2CC0AD] tracking-wide leading-6 flex flex-col justify-center items-center">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-[1.25rem]">
          {label}
        </div>
        <div className="text-[#9FB3B2] text-base sm:text-lg md:text-xl lg:text-[1.25rem]">
          / person
        </div>
      </div>

      <div className="font-mono font-bold text-[#2CC0AD] text-2xl sm:text-3xl md:text-4xl lg:text-[3rem]">
        {typeof tipPerPerson === "number"
          ? `$${tipPerPerson.toFixed(2)}`
          : typeof totalPerPerson === "number"
            ? `$${totalPerPerson.toFixed(2)}`
            : "--"}
      </div>
    </div>
  );
};

export default Totalitem;
