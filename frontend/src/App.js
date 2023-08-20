import { useEffect, useRef, useState } from "react";

export default function App() {
  const [fetchProduct, setFetchproduct] = useState([]);

  const sellingPriceRef = useRef();
  const productNameRef = useRef();
  const categoryRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const sellingPrice = sellingPriceRef.current.value;
    const productName = productNameRef.current.value;
    const category = categoryRef.current.value;
    const obj = {
      sellingPrice,
      productName,
      category,
    };
    console.log(obj);
    const fetchData = (obj) => {
      fetch(`http://localhost:4000/add-product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
    };
    fetchData(obj);
  };

  
  const handleDeleteExpeses = (id) => {
    const updatedData = fetchProduct.filter((item) => {
      return item.id !== id;
    });

   setFetchproduct(updatedData)

    fetch(`http://localhost:4000/delete-product/${id}`);
  };


  useEffect(() => {
    fetch("http://localhost:4000/show-product")
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setFetchproduct(res);
      });
  }, []);

  return (
    <>
      <div className="w-full max-w-xs m-auto mt-5">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Selling Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Selling Price"
              ref={sellingPriceRef}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Product Name
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Product"
              ref={productNameRef}
            />
          </div>

          <label
            for="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ref={categoryRef}
          >
            <option selected>Choose a category</option>
            <option>Sports</option>
            <option>Kids</option>
            <option>cosmetic</option>
            <option>Grocery</option>
          </select>

          <div className="flex items-center justify-between  mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Product
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Selling Price
                    </th>
                    <th scope="col" className="px-6 py-4">
                    Product Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Category
                    </th>

                    <th scope="col" className="px-6 py-4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fetchProduct.map((item) => (
                    <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {item.sellingPrice}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.productName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.category}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 ">
                        <button className="mr-8" onClick={() => {  handleDeleteExpeses(item.id);}}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
