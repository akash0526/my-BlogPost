export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <section className="mb-20">
        <h1 className="text-5xl font-extrabold mb-6">
          Hi, I'm <span className="text-blue-600">DevName</span>.
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          I build high-performance web applications with Next.js.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project Card 1 */}
          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-bold">E-Commerce Dashboard</h3>
            <p className="text-gray-500 mt-2">React, Tailwind, Supabase</p>
          </div>
          {/* Project Card 2 */}
          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-bold">SaaS Landing Page</h3>
            <p className="text-gray-500 mt-2">Next.js, Framer Motion</p>
          </div>
        </div>
      </section>
    </div>
  );
}