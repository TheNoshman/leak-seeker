const localURL = 'http://localhost:3001/';

export const getAllFaults = () => fetchRequest(`getallfaults`);
// export const postNewEvent = (event) => createEvent(`events`, event);

// // GET REQUEST
const fetchRequest = (url) => {
  return fetch(`${localURL}${url}`)
    .then((result) => (result.status <= 400 ? result : Promise.reject(result)))
    .then((result) => result.json())
    .then((result) => sorter(result))
        .catch((err) => {
      console.log(`${err.message}`);
    });
};

// SORTS FAULTS BY HIGHEST RATING FIRST
export const sorter = (allFaultsArray) => {
    const sorted = allFaultsArray.map((vehicle) => {
      vehicle.faults = vehicle.faults.sort((a, b) => b.rating - a.rating)
      return vehicle
    })
    return sorted;
  }





// // POST REQUEST
// export const createEvent = (url, event) => {
//   return fetch(`${localURL}${url}`, {
//     method: 'POST',
//     body: JSON.stringify({ event }),
//     headers: {
//       'content-type': 'application/json',
//       accept: 'application/json',
//     },
//   })
//     .then((result) => result.json())
//     .catch((err) => console.error(err));

// };



// REG SUBMIT HANDLER
export const onSearchSubmit = async (inputText, event) => {
    event.preventDefault();

    if (!inputText) {
      alert('Please enter a valid registration number');
      return;
    } else {
      console.log('SEARCH -> NEXT STEP + INPUT IS = ', inputText);
      // setIntroPage(false)

      // SEND DATA THROUGH TO BACKEND
      // GET RID OF WELCOME PAGE
      // RENDER MAIN PAGE
    }
  };

