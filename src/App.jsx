import { useState } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import UserFrom from "./components/UserFrom";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [value, setValue] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 600,
    duration: 10,
  });
  const inputIsvaild = value.duration >= 1;
  function getform(inputidentifer, newValue) {
    setValue((prev) => {
      return {
        ...prev,
        [inputidentifer]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserFrom getform={getform} value={value} />
      {inputIsvaild && <Table value={value} />}
    </>
  );
}

export default App;
