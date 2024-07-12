// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const DataFetch = () => {
//   const [properties, setProperties] = useState([]);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/users");
//         const propertiesArray = await Object.keys(response).map((key) => [
//           key,
//           response[key],
//         ]);
// setProperties(propertiesArray);
// convert Object to Array
//         const propertiesArray1 = propertiesArray[0][1];

// const jsonData = await response.json();
//         setProperties(propertiesArray1);
// setLoading(false);
// console.log("Fetched data:",  propertiesArray);
//         console.log("Fetched data:", propertiesArray1);
//       } catch (error) {
//         console.error("Error fetching data:", error);
// setError(error.message);
// setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

// if (loading) {
//   return <div>Loading...</div>;
// }

// if (error) {
//   return <div>Error: {error}</div>;
// }

//   return (
//     <div>
//       {properties.map((property) => (
//         <div key={property.id}>
//           <h1>{property.name}</h1>
//           <p>{property.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DataFetch;

import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetch = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        const propertiesArray = response.data; // Accessing the 'data' property
        setProperties(propertiesArray);
        console.log("Fetched data:", propertiesArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {console.log("line 82", properties)}
      {properties.length > 0 &&
        properties.map((property, index) => (
          <div key={index}>
            <h1>{property.name}</h1>
            <p>{property.email}</p>
          </div>
        ))}
    </div>
  );
};

export default DataFetch;
