const ButtonCategories = [
  { value: "fish", text: "Pesci" },
  { value: "bugs", text: "Insetti" },
  { value: "villagers", text: "Villagers" },
];

function CategoryButtons({ setCategory, setLoading }) {
  return (
    <div className="flex gap-3">
      {ButtonCategories.map((button) => {
        return (
          <button
            key={button.value}
            onClick={() => {
              (setCategory(button.value), setLoading(true));
            }}
          >
            {button.text}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryButtons;
