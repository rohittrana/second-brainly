import { motion } from "framer-motion";

export function Working({ id }: { id?: string }) {
  const steps = [
    {
      title: "⚡ Quick Save",
      description:
        "Save important links in seconds! Just click on the “Add Content” button, and a form will appear. Paste your link, give it a title, and select whether it’s a YouTube or Twitter link. That’s it—your link is now stored and visible on your website, neatly organized and easy to access.",
    },
    {
      title: "🎯 Benefits",
      description: (
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Keep all your valuable links in one place</li>
          <li>Add custom titles to quickly identify them</li>
          <li>Filter by YouTube or Twitter</li>
          <li>Simple and fast interface to stay productive</li>
        </ul>
      ),
    },
    {
      title: "🔗 Share With Friends",
      description:
        "Want to show your saved links to someone? You can easily share your collection with friends! Just send them your page URL and they can view all the links you've saved—no sign-up required. Perfect for sharing resources, playlists, or favorite threads.",
    },
  ];

  return (
    <section id={id} className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 drop-shadow-sm">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover how easy it is to save, organize, and share your favorite content in just a few steps.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg w-96 min-h-[22rem] p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-purple-100"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
            <div className="text-gray-700">
              {typeof step.description === "string" ? <p>{step.description}</p> : step.description}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
