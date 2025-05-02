import BrainImage from "../Image/Brain.jpeg";

export function Feature({ id }: { id?: string }) {
  return (
    <div id={id} className="flex flex-col md:flex-row justify-around items-center py-16 px-4">
      <div className="text-white w-full md:w-96 text-justify mb-8 md:mb-0">
        <div className="mb-6">
          <h1 className="font-bold text-2xl mb-2 ">
            Never Lose Valuable Content Again
          </h1>
          <p className="mb-4 bg-white text-black rounded-md  ">
            Second Brain transforms how you save and rediscover digital content .
            Unlike traditional bookmarks that get buried and forgotten, Second 
            Brain creates an organized, visual library of everything that 
            matters to you.
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-white text-justify font-bold text-2xl mb-2">
            🎴 Visual Card Library
          </h1>
          <p className="bg-white text-black rounded-sm ">
            Transform boring links into beautiful, visual cards that make your
            content instantly recognizable. Each card displays the title,
            source, and a preview - making it easy to find what you're looking
            for.
          </p>
        </div>

        <div>
          <h1 className="text-white text-justify font-bold text-2xl mb-2">
            🔄 Source Integration
          </h1>
          <p className="bg-white rounded-md text-black  ">
            Automatically categorizes content from YouTube, Twitter, news sites,
            and more. The system recognizes the source and applies appropriate
            formatting and organization.
          </p>
        </div>
      </div>

      <div className="transition-transform duration-500 ease-in-out hover:rotate-12 hover:scale-105">
        <img
          src={BrainImage}
          alt="Brain Image"
          className="h-auto w-full max-w-md rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}