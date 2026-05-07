export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Lakshay</h1>
        <p className="text-xl text-gray-400 mb-8">Software Developer</p>
        <div className="flex space-x-4">
          <a href="https://github.com/lakshay1928" className="text-blue-400 hover:text-blue-300">GitHub</a>
          <a href="https://draftly-frontend-80a3ent8g-lakshay1928s-projects.vercel.app/" className="text-blue-400 hover:text-blue-300">Project</a>
        </div>
      </section>

      {/* About Me */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-gray-400 text-center mb-12">
          Driven software developer with hands-on experience in various technologies, seeking to build scalable applications.
        </p>

        {/* What I'm Doing */}
        <h3 className="text-2xl font-semibold mb-6">What I'm Doing</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">Full Stack Development</h4>
            <p className="text-gray-400">Building end-to-end web applications with modern frameworks.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">UI/UX Design</h4>
            <p className="text-gray-400">Creating intuitive interfaces and user experiences.</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Draftly Frontend</h3>
            <p className="text-gray-400 mb-4">A modern frontend application built with React and Next.js.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/lakshay1928" className="text-blue-400 hover:text-blue-300">GitHub</a>
              <a href="https://draftly-frontend-80a3ent8g-lakshay1928s-projects.vercel.app/" className="text-blue-400 hover:text-blue-300">Demo</a>
            </div>
          </div>
          {/* Add more projects as needed */}
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Technologies Known</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-gray-800 px-4 py-2 rounded">React</span>
          <span className="bg-gray-800 px-4 py-2 rounded">Next.js</span>
          <span className="bg-gray-800 px-4 py-2 rounded">TypeScript</span>
          <span className="bg-gray-800 px-4 py-2 rounded">Tailwind CSS</span>
          {/* Add more */}
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <p className="text-gray-400 mb-4">Let's connect!</p>
        <a href="https://github.com/lakshay1928" className="text-blue-400 hover:text-blue-300 mr-4">GitHub</a>
        <a href="https://draftly-frontend-80a3ent8g-lakshay1928s-projects.vercel.app/" className="text-blue-400 hover:text-blue-300">Project</a>
      </section>
    </div>
  );
}
