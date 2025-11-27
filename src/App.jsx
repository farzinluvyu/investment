import { useState } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import UserFrom from "./components/UserFrom";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [value, setValue] = useState([]);
  const calculate = calculateInvestmentResults({
    initialInvestment: value[0],
    annualInvestment: value[1],
    expectedReturn: value[2],
    duration: value[3],
  });
  function foo() {
    setValue([123, 1234, 1256, 1453]);
  }
  console.log(value);
  console.log(calculate);
  return (
    <>
      <Header />
      <UserFrom />
      <Table />
    </>
  );
}

export default App;
