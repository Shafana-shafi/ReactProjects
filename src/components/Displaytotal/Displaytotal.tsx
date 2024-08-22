import React from "react";
import Totalitem from "../Totalitem/Totalitem";
import "../../variable.css";

/**
 * Displays tip and total amounts per person and provides a reset button.
 *
 * @param {Object} props - Component props.
 * @param {string | number} [props.tipPerPerson] - Tip amount per person.
 * @param {string | number} [props.totalPerPerson] - Total amount per person.
 * @param {() => void} props.handleReset - Function to reset the values.
 *
 * @returns {JSX.Element} The Displaytotal component.
 */
interface DisplaytotalProps {
  tipPerPerson?: string | number;
  totalPerPerson?: string | number;
  handleReset: () => void;
}

const Displaytotal: React.FC<DisplaytotalProps> = ({
  tipPerPerson,
  totalPerPerson,
  handleReset,
}) => {
  return (
    <div className="w-full h-full bg-container-bg flex flex-col justify-center items-center rounded-lg px-container-padding box-border">
      {/*Spacer Div*/}
      <div className="h-20 md:h-16"></div>
      <Totalitem label="Tip Amount" tipPerPerson={tipPerPerson} />
      {/*Spacer Div*/}
      <div className="h-16 md:h-12"></div>
      <Totalitem label="Total" totalPerPerson={totalPerPerson} />
      {/*Spacer Div*/}
      <div className="h-16"></div>
      <button
        className="w-full bg-reset-bg text-reset-text text-lg font-space-mono rounded-md border-none mt-auto mb-6 md:mb-5 focus:outline-none focus:ring-2 focus:ring-reset-focus-bg focus:ring-offset-2 active:bg-reset-focus-bg active:shadow-lg active:translate-y-1 py-[13px]"
        onClick={handleReset}
      >
        RESET
      </button>
    </div>
  );
};

export default Displaytotal;
