
export default function MakeArrayToShow(searchInfo, petsList, setArrayToShow) {
  const newArray = [...petsList];
  const result = [];

    const searchMatches = (pet) => {
            const searchTerms = searchInfo.search.map(term => term.toLowerCase());
            return searchTerms.some(term =>
                pet.name.toLowerCase().includes(term) ||
                pet.breed.toLowerCase().includes(term) ||
                pet.location.toLowerCase().includes(term)
            );
        };
  
  //Gender:
    const genderMatches = (pet) => {
    return searchInfo.gender.includes(pet.gender);
    };
  
    //Size
    const sizeMatches = (pet) => {
        return searchInfo.size.includes(pet.size);
        };

    //Age
    const ageMatches = (pet) => {
        
        const ageRanges = {
            1: [0, 1],
            2: [1, 3],
            3: [3, 5],
            4: [5, Infinity]
        };
        // Verificar si la edad del animal está dentro del rango especificado
        return searchInfo.age.some(range => {
            const [min, max] = ageRanges[range];
            return pet.age >= min && pet.age <= max;
        });
        };


  newArray.forEach( pet => {
    if ( searchInfo.search.length !== 0 && ! searchMatches(pet)) {return}
    if ( searchInfo.size.length !== 0 && !sizeMatches(pet) ) {return}
    if ( searchInfo.age.length !== 0 && !ageMatches(pet)) {return}
    if ( searchInfo.gender.length !== 0 && !genderMatches(pet)) {return}
    result.push(pet)
  })

  console.log(result)
  setArrayToShow(result)
}


/*
  return petsList.filter(pet => {
      // Función para verificar coincidencia en las propiedades name, breed y location
      const searchMatches = () => {
          const searchTerms = searchInfo.search.map(term => term.toLowerCase());
          return searchTerms.some(term =>
              pet.name.toLowerCase().includes(term) ||
              pet.breed.toLowerCase().includes(term) ||
              pet.location.toLowerCase().includes(term)
          );
      };

      const genderMatches = () => {
          return searchInfo.gender.length === 0 || searchInfo.gender.includes(pet.gender);
      };

      const sizeMatches = () => {
          return searchInfo.size.length === 0 || searchInfo.size.includes(pet.size);
      };

      const ageMatches = () => {
          if (searchInfo.age.length === 0) {
              return true;
          }
          const ageRanges = {
              1: [0, 1],
              2: [1, 3],
              3: [3, 5],
              4: [5, Infinity]
          };
          // Verificar si la edad del animal está dentro del rango especificado
          return searchInfo.age.some(range => {
              const [min, max] = ageRanges[range];
              return pet.age >= min && pet.age <= max;
          });
      };

      return searchMatches() || genderMatches() || sizeMatches() || ageMatches();
    });
  }
*/