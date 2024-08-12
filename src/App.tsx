import { useReducer } from "react";
import "./App.css";
import Displaytotal from "./components/Displaytotal/Displaytotal";
import { Selecttip } from "./components/Selecttip/Selecttip";
import { InputComponent } from "./components/InputComponent/InputComponent";

const initialState = {
  bill: "",
  numberOfPeople: "",
  tip: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "setBillAmount":
      return {
        ...state,
        bill: action.value,
      };
    case "setNumberOfPeople":
      return {
        ...state,
        numberOfPeople: action.value,
      };
    case "setTip":
      return {
        ...state,
        tip: action.value,
      };
    case "Reset":
      return initialState;
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTipChange = (newTip) => {
    dispatch({ type: "setTip", value: newTip > 100 ? 100 : newTip });
  };

  const handleReset = () => dispatch({ type: "Reset" });

  const handleBillChange = (event) =>
    dispatch({ type: "setBillAmount", value: event.target.value });

  const handleNumberOfPeopleChange = (event) => {
    const value = event.target.value;
    const numberValue = Number(value);

    if (value === "" || (Number.isInteger(numberValue) && numberValue >= 0)) {
      dispatch({ type: "setNumberOfPeople", value: numberValue });
    } else {
      event.target.value = state.numberOfPeople.toString();
    }
  };

  const tipPerPerson =
    state.bill && state.numberOfPeople && state.tip
      ? (Number(state.bill) * Number(state.tip)) /
        100 /
        Number(state.numberOfPeople)
      : "--";

  const totalPerPerson =
    state.bill && state.numberOfPeople
      ? Number(state.bill) / Number(state.numberOfPeople) +
        (tipPerPerson === "--" ? 0 : tipPerPerson)
      : "--";

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#C5E4E7]">
      <div className="font-space-mono text-3xl text-[#00474B] max-w-[93px] tracking-widest text-center pb-2">
        <span className="inline-block">SPLI</span>
        <br />
        <span className="inline-block">TTER</span>
      </div>

      <div className="rounded-lg w-full max-w-[1160px] mx-auto grid grid-cols-1 sm:grid-cols-2 place-content-center gap-[4rem] bg-white p-8 sm:p-4 md:p-8">
        <div className="w-full flex flex-col items-center gap-7">
          <InputComponent
            value={state.bill}
            label="Bill"
            typeOfIcon="dollar"
            onChange={handleBillChange}
          />
          <Selecttip
            label="Select Tip %"
            onClick={handleTipChange}
            tip={state.tip}
          />
          <InputComponent
            value={state.numberOfPeople}
            label="Number Of People"
            typeOfIcon="person"
            onChange={handleNumberOfPeopleChange}
          />
        </div>
        <div className="w-full">
          <Displaytotal
            tipPerPerson={tipPerPerson}
            totalPerPerson={totalPerPerson}
            handleReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
