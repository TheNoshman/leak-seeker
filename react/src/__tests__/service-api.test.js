
import { mockFaultsData, sortedFaultsData, mockPrices, mockYears } from '../__mocks__/mockCarData';
import { sorter, priceAverager, yearAverager } from '../service/service-api';

const original = JSON.parse(JSON.stringify(mockFaultsData));

describe('service-api', () => { 
  let mocks;
  let prices;
  let years;
  beforeAll(() => {
    mocks = JSON.parse(JSON.stringify(mockFaultsData))
    prices = JSON.parse(JSON.stringify(mockPrices))
    years = JSON.parse(JSON.stringify(mockYears))
  })

  describe('sorter', () => {
    it('Array should be sorted by highest rating', () => {
      
      expect(sorter(mocks))
      .toEqual(sortedFaultsData)
    })
  });
  
  // change mockPrices to generate random numbers 
  
  describe('priceAverager', () => {
    
    it('Should return an array with elements of expected array', () => {
      const expectedPrice = [1, 1, 1, 1];
      expect(priceAverager(prices)).toEqual(expectedPrice)
    })
  });
  
  describe('yearAverager', () => {
    
    it('Should return an array with elements of expected array', () => {
      const expectedYear = [0, 1, 2, 1];
      expect(yearAverager(years)).toEqual(expectedYear)
    })
  });

})


