function InventoryTable() {

    /*how the DynamoDB table will be structured*/
    const items = [
      { id: 1, name: "Stethoscope", sku: "MED-STH-001", quantity: 5, category: "Equipment" },
      { id: 2, name: "N95 Masks", sku: "PPE-N95-020", quantity: 200, category: "Supplies" },
      { id: 3, name: "Thermometer", sku: "MED-THM-013", quantity: 15, category: "Equipment" },
      { id: 4, name: "Printer", sku: "OFF-PRN-054", quantity: 2, category: "Admin Tools" },
    ];
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-md shadow-md border border-gray-200">
          <thead>
            <tr className="bg-purple-700 text-white text-left">
              
              {/*item fields*/}
              <th className="px-6 py-3">Item Name</th>
              <th className="px-6 py-3">SKU</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Quantity</th>

            </tr>
          </thead>
          <tbody>

            {/*table data*/}
            {items.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-3">{item.name}</td>
                <td className="px-6 py-3">{item.sku}</td>
                <td className="px-6 py-3">{item.category}</td>
                <td className="px-6 py-3">{item.quantity}</td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    );
  }
  
  export default InventoryTable;
  