import usePrices from "../services/usePrices";
import React from "react";

function PricesTable() {
  const { isLoading, data, error } = usePrices();
  const pricesList = data?.prices_list || [];
  console.log(pricesList);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;
  return (
    <table border="1" cellSpacing="0" cellPadding="5">
      <thead>
        <tr>
          <th>Serviciu</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {pricesList.map((item) => (
          <tr key={item.id}>
            <td>{item.service_name}</td>
            <td>{item.service_price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PricesTable;
