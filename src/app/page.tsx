export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      {/* Header Section */}
      <section className="mb-20">
        <h1 className="text-5xl font-extrabold mb-6">
          Hi, I'm <span className="text-blue-600">Akash Adhikari</span>.
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Full-Stack Developer & IT Specialist based in Doha, Qatar. 
          Expertise in Software Development, IT Management, and Technical Support.
        </p>
      </section>

      {/* IT & Networking Services Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">IT Management & Networking</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Infrastructure</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• LAN/Wi-Fi Setup</li>
              <li>• Network Troubleshooting</li>
              <li>• Printer & Peripherals</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Systems Admin</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• SCCM & Intune</li>
              <li>• Active Directory (AD)</li>
              <li>• Group Policy (GPO)</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Operations</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• OS Deployment & Imaging</li>
              <li>• Microsoft 365 Support</li>
              <li>• Ticketing Systems</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Software Projects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Software Development</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-bold">XenLogix Logistics</h3>
            <p className="text-gray-500 mt-2 italic">React, Node.js, C#, .NET</p>
          </div>
          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-bold">Odoo ERP Solutions</h3>
            <p className="text-gray-500 mt-2 italic">Python, XML, PostgreSQL</p>
          </div>
        </div>
      </section>
    </div>
  );
}