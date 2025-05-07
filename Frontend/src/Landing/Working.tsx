export function Working({ id }: { id?: string }) {
  return (
    <div id={id} className="flex justify-center flex-wrap gap-6 p-6">
      
      <div
        className="bg-gradient-to-br from-indigo-200 via-purple-300 to-pink-200
 rounded-xl shadow-lg w-96 min-h-[22rem] p-6 transition-transform duration-300 hover:scale-105"
      >
        <h1 className="text-xl font-semibold mb-3 text-gray-800">How It Works</h1>
        <p className="text-gray-700">
          Save important links in seconds! Just click on the “Add Content”
          button, and a form will appear. Paste your link, give it a title, and
          select whether it’s a YouTube or Twitter link. That’s it—your link is
          now stored and visible on your website, neatly organized and easy to
          access.
        </p>
      </div>

      <div
        className="bg-gradient-to-br from-indigo-200 via-purple-300 to-pink-200
 rounded-xl shadow-lg w-96 min-h-[22rem] p-6 transition-transform duration-300 hover:scale-105"
      >
        <h1 className="text-xl font-semibold mb-3 text-gray-800">Benefits</h1>
        <ul className="list-disc list-inside text-gray-700">
          <li>Keep all your valuable links in one place</li>
          <li>Add custom titles to quickly identify them</li>
          <li>Filter by YouTube or Twitter</li>
          <li>Simple and fast interface to stay productive</li>
        </ul>
      </div>

      <div
        className="bg-gradient-to-br from-indigo-200 via-purple-300 to-pink-200
 rounded-xl shadow-lg w-96 min-h-[22rem] p-6 transition-transform duration-300 hover:scale-105"
      >
        <h1 className="text-xl font-semibold mb-3 text-gray-800">Share With Friends</h1>
        <p className="text-gray-700">
          Want to show your saved links to someone? You can easily share your
          collection with friends! Just send them your page URL and they can
          view all the links you've saved—no sign-up required. Perfect for
          sharing resources, playlists, or favorite threads.
        </p>
      </div>
    </div>
  );
}
