'use client'
import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };
  
  useEffect(() => {
      fetchData();
  }, []);

  return (
    <div>
      <h1>User Data:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
