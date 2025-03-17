import React, { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import axios from "axios";

const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState([]);

  // Fetch doors from the server
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(API_URI);
      setItems(response.data); // Store data in state
    } catch (error) {
      console.error("Error fetching doors:", error);
    }
  };

  // DELETE request to remove an item
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URI}/${id}`);
      setItems((prevItems) => prevItems.filter((item) => item.id !== id)); // Update UI
    } catch (error) {
      console.error("Error deleting door:", error);
    }
  };

  const handleEdit = (item) => {
    console.log("Editing door:", item); // Placeholder for edit logic
  };

  return <ItemList items={items} onDelete={handleDelete} onEdit={handleEdit} />;
}

export default App;
