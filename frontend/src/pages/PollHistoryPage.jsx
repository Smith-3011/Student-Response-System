import React, { useEffect, useState } from "react";
import axios from "axios";
import PollHistory from "../components/PollHistory";

// Base URL for the backend API (Socket.IO uses the same origin)
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:54349";

const PollHistoryPage = () => {
  const [pollHistory, setPollHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/polls/history`);
        setPollHistory(res.data);
      } catch (err) {
        console.error("Failed to fetch poll history", err);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-white p-6">
      <PollHistory history={pollHistory} />
    </div>
  );
};

export default PollHistoryPage;
