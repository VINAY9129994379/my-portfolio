/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
import axios from "axios";
import { FolderKanban, Mail, Eye, User } from "lucide-react";

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;


  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const [pRes, mRes] = await Promise.all([
        axios.get(`${backendUrl}/api/projects`),
        axios.get(`${backendUrl}/api/messages`),
      ]);

      setProjects(pRes.data);
      setMessages(mRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-8">

      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-400 mt-2">
          Welcome back 👋
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">

        <Card title="Projects" icon={<FolderKanban size={20} />} value={projects.length} />

        <Card title="Messages" icon={<Mail size={20} />} value={messages.length} />

        <Card title="Portfolio Views" icon={<Eye size={20} />} value="1.1K" />

        <Card title="Visitors" icon={<User size={20} />} value="890" />

      </div>

      {/* Recent Activity */}
      <div className="bg-[#161724] border border-white/10 rounded-xl p-6">

        <h2 className="text-xl font-semibold mb-5">
          Recent Messages
        </h2>

        <div className="space-y-4">

          {messages.slice(0, 3).map((msg, i) => (
            <div key={i} className="border-b border-white/10 pb-3">
              <p className="font-medium">{msg.name}</p>
              <span className="text-sm text-gray-400">
                {msg.email}
              </span>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

/* Reusable Card */
function Card({ title, icon, value }) {
  return (
    <div className="bg-[#161724] border border-white/10 rounded-xl p-5">
      <div className="flex items-center justify-between text-gray-400">
        <h3>{title}</h3>
        {icon}
      </div>

      <p className="text-3xl font-bold mt-4">{value}</p>
    </div>
  );
}