const localURL = 'http://localhost:3001/';

export const getAllFaults = () => fetchRequest(`getallfaults`);
// export const postNewEvent = (event) => createEvent(`events`, event);

// // GET REQUEST
const fetchRequest = (url) => {
  return fetch(`${localURL}${url}`)
    .then((result) => (result.status <= 400 ? result : Promise.reject(result)))
    .then((result) => result.json())
        .catch((err) => {
      console.log(`${err.message}`);
    });
};

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



export const sorter = (listOfEvents) => {
    console.log('before sorter = ', listOfEvents)
    const filtered = listOfEvents.filter((event) => Date.parse(event.date) > Date.now()
    );
    console.log('filtered in sorter = ', filtered)

    const sorted = filtered.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    console.log('after sorted in sorter = ', sorted)
    return sorted;
  }






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

