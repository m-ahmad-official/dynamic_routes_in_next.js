import Navbar from "@/components/Navbar";

export default function CountryName({
  params,
}: {
  params: { country_name: string };
}) {
  const countries: {
    name: string;
    population: string;
    capital: string;
  }[] = [
    {
      name: "Pakistan",
      population: "235.8 million",
      capital: "Islamabad",
    },
    {
      name: "Australia",
      population: "26 million",
      capital: "Canberra",
    },
    {
      name: "Turkey",
      population: "84.98 million",
      capital: "Ankara",
    },
    {
      name: "Russia",
      population: "144.2 million",
      capital: "Moscow",
    },
    {
      name: "Qatar",
      population: "2.6 million",
      capital: "Doha",
    },
  ];

  function findCountry(country_url: string) {
    return countries.find(
      (country) => country.name.toLowerCase() === country_url.toLowerCase()
    );
  }
  const result = findCountry(params.country_name);

  return (
    <body style={{ backgroundColor: "#E4FDE1" }}>
      <Navbar />
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#2CD36D",
          width: "450px",
          borderRadius: "15px",
          margin: "auto",
          marginTop: "100px",
          padding: "30px",
          fontSize: "30px",
          fontWeight: "bold",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        {result ? (
          <div>
            <h1 style={{ padding: "5px" }}>Name: {result.name}</h1>
            <h1 style={{ padding: "5px" }}>Population: {result.population}</h1>
            <h1 style={{ padding: "5px" }}>Capital: {result.capital}</h1>
          </div>
        ) : (
          <h1>Country Not Find</h1>
        )}
      </div>
    </body>
  );
}
