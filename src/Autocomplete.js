import React, { useState } from "react";
import { Input, List, ListItem, Image, Container } from "@chakra-ui/react";

const countriesWithIcons = [
  {
    label: "India",
    value: "india",
  },
  {
    label: "Nepal",
    value: "nepal",
  },
  {
    label: "Sri Lanka",
    value: "srilanka",
  },
  {
    label: "United States",
    value: "united-states",
  },
  {
    label: "Canada",
    value: "canada",
  },
  // Add more countries with icons here
];

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = countriesWithIcons.filter((country) =>
      country.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const handleSelectCountry = (country) => {
    setInputValue(country.label);
    setFilteredCountries([]);
  };

  return (
    <Container marginTop={"10rem"} maxWidth="400px" p={0}>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a country name"
        bg="white"
        size="lg"
        borderRadius="md"
        shadow="md"
      />
      <List mt={2}>
        {filteredCountries.map((country) => (
          <ListItem
            key={country.label}
            onClick={() => handleSelectCountry(country)}
            _hover={{ background: "gray.100", cursor: "pointer" }}
            display="flex"
            alignItems="center"
            p={2}
            borderRadius="md"
            bg={"#FFB7B7"}
            marginBottom={"1rem"}
          >
            <Image
              src={`/${country.value}.png`} // Replace with actual path
              alt={`${country.label} Icon`}
              boxSize="24px"
              mr={2}
            />
            {country.label}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Autocomplete;
