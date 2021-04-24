const localURL = 'http://localhost:3001/';

export const getAllFaults = () => fetchRequest(`getallfaults`);
export const getFaultsByReg = (reg) => getRegFaultsRequest(`search/${reg}`);

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

const getRegFaultsRequest = (url) => {
  return fetch(`${localURL}${url}`)
    .then((result) => (result.status <= 400 ? result : Promise.reject(result)))
    .then((result) => result.json())
    .then((result) => sorter(result))
    .catch((err) => {
      console.log(`${err.message}`);
    });
};

// // POST REQUEST - TO-DO
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

// ################## HELPER FUNCTIONS ##################

// SORTS FAULTS BY HIGHEST RATING FIRST
export const sorter = (allFaultsObject) => {
  const sorted = allFaultsObject.faults.sort((a, b) => b.rating - a.rating);
  allFaultsObject.faults = sorted;
  return allFaultsObject;
};

