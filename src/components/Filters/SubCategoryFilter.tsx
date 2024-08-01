const SUBCATEGORIES = [
  { name: "T-Shirts", selected: true, href: "#" },
  { name: "Hoodies", selected: false, href: "#" },
  { name: "Sweatshirts", selected: false, href: "#" },
  { name: "Accessories", selected: false, href: "#" },
];

export const SubCategoryFilter = () => {
  return (
    <ul className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
      {SUBCATEGORIES.map((subCategory) => (
        <li key={subCategory.name}>
          <button
            disabled={!subCategory.selected}
            className="disabled:cursor-not-allowed disabled:opacity-60"
          >
            {subCategory.name}
          </button>
        </li>
      ))}
    </ul>
  );
};
