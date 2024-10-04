"use client"; // Add this to mark the file as a Client Component

import React from "react";
import { useParams } from "next/navigation"; // Import useParams from next/navigation
import Navbar from "@/components/Navbar";

// Define the type for each country
type Country = {
  name: string;
  population: string;
  capital: string;
};

// Define the countries object with an index signature
const countries: Record<string, Country> = {
  pakistan: {
    name: "Pakistan",
    population: "235.8 million",
    capital: "Islamabad",
  },
  australia: {
    name: "Australia",
    population: "26 million",
    capital: "Canberra",
  },
  turkey: { name: "Turkey", population: "84.98 million", capital: "Ankara" },
  russia: { name: "Russia", population: "144.2 million", capital: "Moscow" },
  qatar: {
    name: "Qatar",
    population: "2.6 million",
    capital: "Doha",
  },
};

export default function CountryDetails() {
  const params = useParams(); // Use useParams to get the dynamic route parameter
  const country_name = Array.isArray(params.country_name)
    ? params.country_name[0] // Use the first element if it's an array
    : params.country_name; // Otherwise, it's a string

  // Convert the country_name to lowercase if it's a string
  const country = countries[country_name?.toLowerCase() as string];

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
        {country ? (
          <div style={{}}>
            <h1 style={{ padding: "5px" }}>Name: {country.name}</h1>
            <p style={{ padding: "5px" }}>Population: {country.population}</p>
            <p style={{ padding: "5px" }}>Capital: {country.capital}</p>
          </div>
        ) : (
          <h1>Country not found</h1>
        )}
      </div>
    </body>
  );
}
