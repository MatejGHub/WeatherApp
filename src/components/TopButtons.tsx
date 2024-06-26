interface City {
  id: number;
  title: string;
}

const TopButtons = () => {
  const cities: City[] = [
    {
      id: 1,
      title: "Ljubljana"
    },
    {
      id: 2,
      title: "Maribor"
    },
    {
      id: 3,
      title: "Jesenice"
    },
    {
      id: 4,
      title: "Novo Mesto"
    },
    { id: 5, title: "Koper" }
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => {
        return (
          <button key={city.id} className="text-white text-lg font-medium">
            {city.title}
          </button>
        );
      })}
    </div>
  );
};

export default TopButtons;
