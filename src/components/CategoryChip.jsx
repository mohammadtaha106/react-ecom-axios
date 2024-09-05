function CategoryChip({ category, isChosen, onClick }) {
  const { name } = category;
  return (
    <div
      onClick={onClick}
      className={`${
        isChosen ? " bg-orange-400 text-white" : "bg-white text-black"
      } p-2 
        cursor-pointer
        hover:bg-orange-100 hover:text-orange-600
        border-orange-400 border px-4 rounded-md`}
    >
      <h1>{name}</h1>
    </div>
  );
}

export default CategoryChip;
