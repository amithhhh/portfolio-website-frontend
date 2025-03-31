import React, { useEffect, useState } from "react";
import { checkUser, retrieveMessages } from "../../../api/Api";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await retrieveMessages();
        //console.log(data);
        setMessages(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Messages</h2>
      {messages.map((item) => (
        <div
          key={item._id}
          onClick={() => navigate(`/dashboard/${item._id}`)}
          style={styles.todoItem}
        >
          <span style={styles.todoText}>{item.name}: {item.subject}</span>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "10px",
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "20px",
    marginBottom: "10px",
  },
  todoItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  todoItemHover: {
    backgroundColor: "#e0e0e0",
  },
  todoText: {
    fontSize: "16px",
  },
};

export default Dashboard;
