import React, { useEffect, useState } from "react";

export default function Gallery() {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("https://api.tvmaze.com/show")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
