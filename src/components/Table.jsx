import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Table({ value }) {
  console.log("value ==> ", value);
  const resultData = calculateInvestmentResults(value);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  console.log("resultData ==> ", resultData);
  
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th className="center">Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody id="results-body">
        {resultData.map((item, index) => {
          const total =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            initialInvestment;
          const totalAmount = item.valueEndOfYear - total;
          return (
            <tr key={index}>
              <td className="center">{item.year}</td>
              <td className="center">
                {formatter.format(item.valueEndOfYear)}
              </td>
              <td className="center">{formatter.format(item.interest)}</td>
              <td className="center">{formatter.format(total)}</td>
              <td className="center">{totalAmount}</td>
            </tr>
          );
        })}
        {/* 0
: 
annualInvestment
: 
1200
interest
: 
6000
valueEndOfYear
: 
8200
year
: 
1 */}
      </tbody>
    </table>
  );
}
