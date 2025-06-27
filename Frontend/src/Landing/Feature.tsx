import BrainImage from "../Image/Brain.jpeg";

export function Feature({ id }: { id?: string }) {
  return (
    <div
      id={id}
      className="flex flex-col md:flex-row justify-around items-center py-16 px-4 bg-white"
    >
      <div className="w-full md:w-1/2 text-gray-800 mb-8 md:mb-0 space-y-8">
        <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h1 className="text-2xl font-semibold mb-2 text-blue-900 font-['Inter']">
            🧠 Never Lose Valuable Content Again
          </h1>
          <p className="leading-relaxed font-['Inter'] text-gray-700">
            Second Brain transforms how you save and rediscover digital content.
            Unlike traditional bookmarks that get buried and forgotten, Second
            Brain creates an organized, visual library of everything that
            matters to you.
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h1 className="text-2xl font-semibold mb-2 text-blue-900 font-['Inter']">
            🎴 Visual Card Library
          </h1>
          <p className="leading-relaxed font-['Inter'] text-gray-700">
            Transform boring links into beautiful, visual cards that make your
            content instantly recognizable. Each card displays the title,
            source, and a preview - making it easy to find what you're looking for.
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h1 className="text-2xl font-semibold mb-2 text-blue-900 font-['Inter']">
            🔄 Source Integration
          </h1>
          <p className="leading-relaxed font-['Inter'] text-gray-700">
            Automatically categorizes content from YouTube, Twitter, news sites,
            and more. The system recognizes the source and applies appropriate
            formatting and organization.
          </p>
        </div>
      </div>

      <div className="transition-transform duration-500 ease-in-out hover:rotate-6 hover:scale-105 hover:shadow-2xl hover:shadow-blue-200">
        <img
          src={BrainImage}
          alt="Brain"
          className="h-auto w-full max-w-md rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
}
