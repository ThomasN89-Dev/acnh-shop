import { useEffect, useMemo, useState } from "react";
import ItemsList from "./components/ItemsList";
import CategoryButtons from "./components/CategoryButtons";
import FilterBar from "./components/FilterBar";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function getData() {
      if (category) {
        try {
          const url =
            category === "fish" || category === "bugs"
              ? `https://api.nookipedia.com/nh/${category}`
              : `https://api.nookipedia.com/${category}`;

          if (!url) return;

          const response = await fetch(url, {
            headers: {
              "X-API-Key": "d06b6769-d7a1-42d4-b918-3b8b7f8185f4",
            },
          });

          if (!response.ok) {
            throw new Error(`response status: ${response.status}`);
          }
          const result = await response.json();
          setData(result);
          setLoading(false);
        } catch (error) {
          console.error(error.message);
          setLoading(false);
        }
      }
    }

    getData();
  }, [category]);

  const filteredResults = useMemo(() => {
    if (data) {
      return data.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()),
      );
    }
  }, [data, searchText]);

  return (
    <div className="bg-amber-700 w-full h-screen p-4 flex flex-col">
      <div className="bg-amber-900/40 backdrop-blur-md rounded-2xl p-4 flex flex-col flex-1 overflow-hidden border border-amber-600/30">
        <CategoryButtons setCategory={setCategory} setLoading={setLoading} />
        <FilterBar searchText={searchText} setSearchText={setSearchText} />
        {loading && category && <p>Caricamento...</p>}
        {!loading && (
          <div className="flex-1 overflow-y-auto">
            <ItemsList items={filteredResults} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
