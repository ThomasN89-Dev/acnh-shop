const ButtonCategories = [
  {
    value: "fish",
    text: "Pesci",
    img: "https://dodo.ac/np/images/c/cd/Angelfish_NH_Icon.png",
  },
  {
    value: "bugs",
    text: "Insetti",
    img: "https://dodo.ac/np/images/4/44/Brown_Cicada_NH_Icon.png",
  },
  // {
  //   value: "villagers",
  //   text: "Villagers",
  //   img: "https://dodo.ac/np/images/7/7d/Freckles_NH.png",
  // },
];

function CategoryButtons({ setCategory, setLoading }) {
  return (
    <div className="flex justify-around w-full px-4 mb-3 gap-2">
      {ButtonCategories.map((button) => {
        return (
          <button
            className="border p-2 bg-cyan-300 rounded-2xl flex-1 "
            key={button.value}
            onClick={() => {
              (setCategory(button.value), setLoading(true));
            }}
          >
            <div className="flex flex-col gap-1 items-center justify-center">
              {(button.value === "fish" || button.value === "bugs") && (
                <img src={button.img} alt={button.text} className="w-10 h-10" />
              )}
              {/* {button.value === "villagers" && (
                <img src={button.img} alt={button.text} className="w-6 h-10" />
              )} */}
              {button.text}
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default CategoryButtons;
