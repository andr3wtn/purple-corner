import { FaSearch } from "react-icons/fa";
export default function EventContainer() {
    return (
        <div>
                  {/* Search Bar */}
      <form
        className="mb-5 flex gap-5 justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative w-full sm:w-2/3 md:max-w-[500px]">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            placeholder="Search event by name"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="border rounded-lg pl-10 pr-3 py-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="border rounded-lg text-white py-1 px-3 bg-purple-600 hidden sm:block"
        >
          Search
        </button>
      </form>
        </div>
    );
}