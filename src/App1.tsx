import React, { useState } from 'react';
import './App.css';
import Displaytotal from './components/Displaytotal/Displaytotal';
import { Selecttip } from './components/Selecttip/Selecttip';
import { InputComponent } from './components/InputComponent/InputComponent';

function App() {
  const [formData, setFormData] = useState({ bill: 0, persons: 0 });
  const [errors, setErrors] = useState({ bill: '', persons: '' });
  const [tip, setTip] = useState(0);
  const [presentValue, setPresentValue] = useState("Custom");
  const [selectedTip, setSelectedTip] = useState<number | null>(null);

  const validateValue = (value: number) => {
    return value > 0 ? '' : 'Should be greater than 0';
  };

  const handleChange = (field: 'bill' | 'persons') => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setFormData(prev => ({ ...prev, [field]: newValue }));
    setErrors(prev => ({ ...prev, [field]: validateValue(newValue) }));
  };

  const handleTipChange = (newTip: number) => {
    setTip(newTip);
    setSelectedTip(newTip); 
  };

  const handleReset = () => {
    setFormData({ bill: 0, persons: 0 });
    setTip(0);
    setErrors({ bill: '', persons: '' });
    setPresentValue("Custom");
    setSelectedTip(null); 
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPresentValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const numericValue = Number(presentValue);
      if (!isNaN(numericValue)) {
        setTip(numericValue);
        setSelectedTip(null);
      }
    }
  };

  const handleCustomClick = () => {
    setPresentValue("");
    setSelectedTip(null);
  };

  const totalPerPerson = formData.bill && formData.persons ? (formData.bill + (formData.bill * tip / 100)) / formData.persons : 0;
  const tipPerPerson = formData.bill && formData.persons ? (formData.bill * tip / 100) / formData.persons : 0;

  return (
    <div className='container'>
      <div className='cc'>
        <InputComponent
          value={formData.bill}
          label="Bill"
          typeOfIcon="dollar"
          errorMessage={errors.bill}
          onChange={handleChange('bill')}
        />
        <Selecttip
          label="Select Tip %"
          onClick={handleTipChange}
          tip={tip}
          presentValue={presentValue}
          handleOnChange={handleOnChange}
          handleKeyDown={handleKeyDown}
          handleCustomClick={handleCustomClick}
          selectedTip={selectedTip} // Pass the selected tip
        />
        <InputComponent
          value={formData.persons}
          label="Persons"
          typeOfIcon="person"
          errorMessage={errors.persons}
          onChange={handleChange('persons')}
        />
      </div>
      <Displaytotal 
        billAmount={formData.bill} 
        numberOfPeople={formData.persons} 
        tipPerPerson={tipPerPerson} 
        totalPerPerson={totalPerPerson} 
      />
    </div>
  );
}

export default App;
