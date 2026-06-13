
export default function Journey() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      
      <p className="text-[#7c6dfa] text-sm font-semibold mb-2">
        My Journey
      </p>

      <h2 className="text-4xl font-bold mb-10">
        How I Started
      </h2>

      <div className="space-y-6">

        <div className="bg-[#161724] border border-white/10 p-5 rounded-xl">
          <h3 className="text-xl font-semibold">
            BCA Graduation (2024)
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Completed Bachelor of Computer Applications with focus on programming,
            DSA, DBMS, and web development.
          </p>
        </div>

        <div className="bg-[#161724] border border-white/10 p-5 rounded-xl">
          <h3 className="text-xl font-semibold">
            Started Web Development
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Learned HTML, CSS, JavaScript and React. Built multiple frontend projects
            to understand real-world UI development.
          </p>
        </div>

        <div className="bg-[#161724] border border-white/10 p-5 rounded-xl">
          <h3 className="text-xl font-semibold">
            Full Stack Developer Journey
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Learned Node.js, Express, PostgreSQL, authentication, APIs and deployment.
          </p>
        </div>

        <div className="bg-[#161724] border border-white/10 p-5 rounded-xl">
          <h3 className="text-xl font-semibold">
            Production Projects
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Built AI SaaS app + Movie Ticket Booking system with payments, auth and deployment.
          </p>
        </div>

      </div>
    </section>
  );
}