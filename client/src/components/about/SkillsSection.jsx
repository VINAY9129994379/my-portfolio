
export default function SkillsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">

  <h2 className="text-3xl font-bold mb-8">
    Technical Skills
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-[#161724] p-6 rounded-xl">
      <h3 className="font-semibold mb-4">
        Frontend
      </h3>

      <p className="text-gray-400">
        React,JavaScript, React Router, Tailwind CSS,
        Axios
      </p>
    </div>

    <div className="bg-[#161724] p-6 rounded-xl">
      <h3 className="font-semibold mb-4">
        Backend
      </h3>

      <p className="text-gray-400">
        Node.js, Express.js,
        REST APIs, Stripe
      </p>
    </div>

    <div className="bg-[#161724] p-6 rounded-xl">
      <h3 className="font-semibold mb-4">
        Database
      </h3>

      <p className="text-gray-400">
        PostgreSQL, Neon,
        MongoDB
      </p>
    </div>

  </div>

</section>
  )
}
