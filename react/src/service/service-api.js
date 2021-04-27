const localURL = 'http://localhost:3001/';

export const getAllFaults = () => fetchRequest(`getallfaults`);
export const getFaultsByReg = (reg) => getRegFaultsRequest(`search/${reg}`);
export const saveFaultToDatabase = (faultObj) => postFaultToDatabase(`addfault`, faultObj);


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

// POST REQUEST -
const postFaultToDatabase = (url, faultObj) => {
  console.log('inside post, faultob -> ', faultObj)
  return fetch(`${localURL}${url}`, {
    method: 'POST',
    body: JSON.stringify(faultObj),
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
    },
  })
    .then((result) => result.json())
    .catch((err) => console.error(err));

};

// ################## HELPER FUNCTIONS ##################

// SORTS FAULTS BY HIGHEST RATING FIRST
export const sorter = (allFaultsObject) => {
  const sorted = allFaultsObject.faults.sort((a, b) => b.rating - a.rating);
  allFaultsObject.faults = sorted;
  return allFaultsObject;
};

// DATA AVERAGER FOR PIE CHART
export const priceAverager = (faults) => {
    const arr = Array(4).fill(0)
    faults.forEach((el) => {

      switch (true) {
        case el < 100:
        arr[0]++
        break
        case el < 500:
        arr[1]++
        break
        case el < 1000:
        arr[2]++
        break
        default: arr[3]++
      }
    }
      )
    return arr
  }

export const yearAverager = (faults) => {
    const arr = Array(4).fill(0)
    console.log(faults)
    faults.forEach((el) => {

      switch (true) {
        case el < 1990:
        arr[0]++
        break
        case el < 2000:
        arr[1]++
        break
        case el < 2010:
        arr[2]++
        break
        default: arr[3]++
      }
    }
      )
    return arr
  }

  export const areaAverager = (faults) => {
    const arr = Array(4).fill(0)
    faults.forEach((el) => {

      switch (true) {
        case el === 'interior':
        arr[0]++
        break
        case el === 'bodywork':
        arr[1]++
        break
        case el === 'engine':
        arr[2]++
        break
        default: arr[3]++
      }
    }
      )
    return arr
  }