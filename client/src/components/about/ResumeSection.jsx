import { NavLink } from "react-router-dom"
export default function ResumeSection() {
  return (
   

<section   id="resume"
 className="max-w-6xl mx-auto px-6 py-20 mt-10">

  <div className="bg-[#161724] border border-white/10 rounded-3xl p-10 md:p-16 text-center">

    <p className="text-[#7c6dfa] font-medium mb-3">
      Let's Connect
    </p>

    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Ready to Build Something Amazing?
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-7">
      I'm actively looking for Full Stack Developer opportunities,
      internships, and freelance projects. If you have an opportunity
      or project in mind, I'd love to hear from you.
    </p>

    <div className="flex flex-wrap justify-center gap-4">

      <NavLink
        to="/contact"
        className="px-6 py-3 bg-[#7c6dfa] rounded-lg font-medium hover:bg-[#6958f0] transition"
      >
        Contact Me
      </NavLink>

      <a
        href="/resume.pdf"
        download
        className="px-6 py-3 border border-white/10 rounded-lg hover:border-white/30 transition"
      >
        Download Resume
      </a>

    </div>

  </div>

</section>
  )
}
