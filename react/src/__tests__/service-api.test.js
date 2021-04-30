
import {mockFaultsData, sortedFaultsData } from '../__mocks__/mockCarData';
import { sorter } from '../service/service-api';

const original = JSON.parse(JSON.stringify(mockFaultsData));

describe('service-api', () => { 
  let mocks;
  beforeAll(() => {
    mocks = JSON.parse(JSON.stringify(mockFaultsData))
  })

  describe('sorter', () => {
    it('Array should be sorted by highest rating', () => {
      
      expect(sorter(mocks))
      .toEqual(sortedFaultsData)
    })
  });

  
})
