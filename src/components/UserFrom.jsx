import { useState } from "react";

export default function UserFrom() {
  const [value, setValue] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 600,
    duration: 10,
  });

  function getform(inputidentifer, newValue) {
    setValue((prev) => {
      return {
        ...prev,
        [inputidentifer]: newValue,
      };
    });
  }
  console.log("value", value);
  return (
    <>
      <form id="user-input">
        <div class="input-group">
          <div>
            <label for="initial-investment">Initial Investment</label>
            <input
              type="number"
              id="initial-investment"
              required
              value={value.initialInvestment}
              onChange={(e) =>
                getform("initialInvestment", Number(e.target.value))
              }
            ></input>
          </div>
          <div>
            <label for="annual-investment">Annual Investment</label>
            <input
              type="number"
              id="annual-investment"
              required
              value={value.annualInvestment}
              onChange={(e) =>
                getform("annualInvestment", Number(e.target.value))
              }
            ></input>
          </div>
          <div>
            <label for="expected-return">Expected Return</label>
            <input
              type="number"
              id="expected-return"
              required
              value={value.expectedReturn}
              onChange={(e) =>
                getform("expectedReturn", Number(e.target.value))
              }
            ></input>
          </div>
          <div>
            <label for="duration">Duration</label>
            <input
              type="number"
              id="duration"
              required
              value={value.duration}
              onChange={(e) => getform("duration", Number(e.target.value))}
            ></input>
          </div>
        </div>
      </form>
    </>
  );
}
