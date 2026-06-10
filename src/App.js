import { useEffect, useState } from "react";
import "./App.css";
import { getNotifications } from "./services/api";

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNotifications();

        console.log(data);

        setNotifications(data.notifications || []);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Campus Notifications</h1>

      <h2>Total Notifications: {notifications.length}</h2>
    </div>
  );
}

export default App;