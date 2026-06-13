import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "@clerk/clerk-react";

export default function Messages() {
  const { getToken } = useAuth();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;


  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchMessages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMessages = async () => {
    try {
      setLoading(true);

      const token = await getToken();

      const res = await axios.get(
        `${backendUrl}/api/messages`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessages(res.data.messages || []);
    } catch (error) {
      console.log(error);

      if (error.response?.status === 403) {
        toast.error("Admin access required");
      } else {
        toast.error("Failed to load messages");
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    const ok = window.confirm("Delete this message?");
    if (!ok) return;

    try {
      const token = await getToken();

      await axios.delete(
        `${backendUrl}/api/messages/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessages((prev) =>
        prev.filter((m) => m._id !== id)
      );

      toast.success("Message deleted");
    } catch (error) {
      console.log(error);
      toast.error("Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading messages...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white px-4 py-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Contact Messages
          </h1>
          <p className="text-gray-400 mt-2">
            Admin can view and manage messages
          </p>
        </div>

        {/* Empty */}
        {messages.length === 0 ? (
          <div className="text-center py-16 border border-white/10 rounded-xl text-gray-400">
            No messages found
          </div>
        ) : (
          <div className="space-y-4">

            {messages.map((msg) => (
              <div
                key={msg._id}
                className="bg-[#161724] border border-white/10 rounded-2xl p-5"
              >

                {/* Top */}
                <div className="flex justify-between items-start">

                  <div>
                    <h2 className="text-lg font-semibold">
                      {msg.name}
                    </h2>

                    <p className="text-xs text-gray-400 mt-1">
                      {msg.email}
                    </p>
                  </div>

                  <button
                    onClick={() => deleteMessage(msg._id)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm"
                  >
                    Delete
                  </button>
                </div>

                {/* Message */}
                <p className="mt-4 text-gray-300 text-sm leading-6">
                  {msg.message}
                </p>

              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}