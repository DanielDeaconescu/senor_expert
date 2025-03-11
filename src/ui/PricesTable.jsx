import React from "react";
import usePrices from "../services/usePrices";

function PricesTable() {
  const { isLoading, data, error } = usePrices();

  if (isLoading) return <p>Prețurile se încarcă...</p>;
  if (error) return <p>A avut loc o eroare: {error.message}</p>;

  // Check if the data is available and properly grouped
  if (!data || Object.keys(data).length === 0) {
    return <p>No prices available</p>;
  }

  return (
    <div>
      {Object.entries(data).map(([category, services]) => (
        <div key={category}>
          <h5 style={{ marginTop: "20px" }}>{category}</h5>
          {/* Category Title */}
          <table border="1" cellSpacing="0" cellPadding="5">
            <thead>
              <tr>
                <th>Serviciu</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {services.map((item) => (
                <tr key={item.id}>
                  <td>{item.service_name}</td>
                  <td>{item.service_price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default PricesTable;
