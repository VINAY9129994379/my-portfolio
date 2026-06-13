import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const toastId = toast.loading("Sending message...");

  try {
    const { data } = await axios.post(
      `${backendUrl}/api/contact`,
      form
    );

    toast.dismiss(toastId);

    if (data.success) {
      toast.success("Message sent successfully 🚀");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    toast.dismiss(toastId);
    toast.error("Failed to send message ❌");
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center text-sm py-24 px-6"
    >
      {/* Heading */}
      <p className="text-lg text-[#7c6dfa] font-medium pb-2">
        Contact To Me
      </p>

      <h1 className="text-4xl font-semibold text-white pb-4 text-center">
         Let’s Build Something Great

      </h1>

      <p className="text-sm text-gray-400 text-center pb-10 max-w-xl">
       
          I’m currently open to internships and full-time opportunities.
          If you have a project or idea, feel free to reach out.
      </p>

      {/* Name + Email */}
      <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-3xl">
        
        <div className="w-full">
          <label className="text-white/70" htmlFor="name">
            Your Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded-lg bg-[#161724] text-white outline-none focus:border-[#7c6dfa]"
            type="text"
            required
          />
        </div>

        <div className="w-full">
          <label className="text-white/70" htmlFor="email">
            Your Email
          </label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded-lg bg-[#161724] text-white outline-none focus:border-[#7c6dfa]"
            type="email"
            required
          />
        </div>
      </div>

      {/* Message */}
      <div className="mt-6 w-full max-w-3xl">
        <label className="text-white/70" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full mt-2 p-3 h-40 border border-gray-500/30 rounded-lg bg-[#161724] text-white resize-none outline-none focus:border-[#7c6dfa]"
          required
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="mt-6 bg-[#7c6dfa] text-white h-12 w-56 rounded-lg font-medium active:scale-95 transition hover:bg-[#6a5ae0]"
      >
        Send Message
      </button>
    </form>
  );
}