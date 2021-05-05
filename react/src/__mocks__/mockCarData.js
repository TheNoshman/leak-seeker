//MOCK CAR DATA

const mockFaultsData = {
    reg: "AB12ABC",
    make: "Ford",
    model: "Falcon",
    faults: [
        {
            summary: "Front suspension top mounts rusting",
            description: "I took my car into the garage to have a regular service and the technician told me that the mounting points for the suspension were rusting. For a 4 year old car, this is a lot sooner than usual. I have been advised that water leaks in underneath the covering cap and pools. Please look out for this if you plan on buying a car similar to this one.",
            priceToFix: 600,
            rating: 154,
            area: "drivetrain",
            year: 2016,
            faultLogged: "2016-04-27T10:28:32.645Z"
        },
        {
            summary: "Washer fluid bottle leaking",
            description: "After a heavy frost, my washer bottle split open and leaked all over the engine when the frost thawed. No further damage but I recommend checking the seals around the washer bottle for perishing.",
            priceToFix: 50,
            rating: 1489,
            area: "engine",
            year: 2009,
            faultLogged: "2019-04-27T11:01:45.849Z"
        },
        {
            summary: "Oil leak from dip stick",
            description: "Noticed oil spots on my driveway. Took into the garage and oil was pouring out of the sump around the o-ring from the dipstick into the block. Had to pay £2400 to have the garage remove the engine an fix. Check for oil seepage around dipstick before purchasing.",
            priceToFix: 2400,
            rating: 20,
            area: "engine",
            year: 1995,
            faultLogged: "2020-04-27T11:07:05.357Z"
        },
        {
            summary: "Window seals perishing",
            description: "Window seals perishing around rear windows",
            priceToFix: 300,
            rating: 20,
            area: "bodywork",
            year: 2014,
            faultLogged: "2020-04-27T11:07:05.357Z"
        },
        {
            summary: "Fuel tank exploded",
            description: "I took my car into the garage to have a regular service and the technician told me that the mounting points for the suspension were rusting. For a 4 year old car, this is a lot sooner than usual. I have been advised that water leaks in underneath the covering cap and pools. Please look out for this if you plan on buying a car similar to this one.",
            priceToFix: 1500,
            rating: 4,
            area: "drivetrain",
            year: 1990,
            faultLogged: "2018-04-27T10:28:32.645Z"
        },
        {
            summary: "Engine launched a piston through the block",
            description: "I took my car into the garage to have a regular service and the technician told me that the mounting points for the suspension were rusting. For a 4 year old car, this is a lot sooner than usual. I have been advised that water leaks in underneath the covering cap and pools. Please look out for this if you plan on buying a car similar to this one.",
            priceToFix: 2000,
            rating: 9,
            area: "engine",
            year: 1985,
            faultLogged: "2019-07-27T10:28:32.645Z"
        },
        {
            summary: "The sunroof leaked all over my bald head",
            description: "I took my car into the garage to have a regular service and the technician told me that the mounting points for the suspension were rusting. For a 4 year old car, this is a lot sooner than usual. I have been advised that water leaks in underneath the covering cap and pools. Please look out for this if you plan on buying a car similar to this one.",
            priceToFix: 800,
            rating: 9,
            area: "interior",
            year: 1985,
            faultLogged: "2019-07-27T10:28:32.645Z"
        },
        {
            summary: "Killer bees infested my seats",
            description: "I took my car into the garage to have a regular service and the technician told me that the mounting points for the suspension were rusting. For a 4 year old car, this is a lot sooner than usual. I have been advised that water leaks in underneath the covering cap and pools. Please look out for this if you plan on buying a car similar to this one.",
            priceToFix: 800,
            rating: 9,
            area: "engine",
            year: 1985,
            faultLogged: "2019-07-27T10:28:32.645Z"
        }
    ]
}

const sortedFaultsData = {
  reg: 'AB12ABC',
  make: 'Ford',
  model: 'Falcon',
  faults: [
    {
      summary: 'Washer fluid bottle leaking',
      description: 'After a heavy frost, my washer bottle split open and leaked all over the engine when the frost thawed. No further damage but I recommend checking the seals around the washer bottle for perishing.',
      priceToFix: 50,
      rating: 1489,
      area: 'engine',
      year: 2009,
      faultLogged: '2019-04-27T11:01:45.849Z'
    },
    {
      summary: 'Front suspension top mounts rusting',
      description: 'I took my car into the garage to have a regular service and the technician told me that the mounting points for the suspension were rusting. For a 4 year old car, this is a lot sooner than usual. I have been advised that water leaks in underneath the covering cap and pools. Please look out for this if you plan on buying a car similar to this one.',
      priceToFix: 600,
      rating: 154,
      area: 'drivetrain',
      year: 2016,
      faultLogged: '2016-04-27T10:28:32.645Z'
    },
    {
      summary: 'Oil leak from dip stick',
      description: 'Noticed oil spots on my driveway. Took into the garage and oil was pouring out of the sump around the o-ring from the dipstick into the block. Had to pay £2400 to have the garage remove the engine an fix. Check for oil seepage around dipstick before purchasing.',
      priceToFix: 2400,
      rating: 20,
      area: 'engine',
      year: 1995,
      faultLogged: '2020-04-27T11:07:05.357Z'
    },
    {
      summary: 'Window seals perishing',
      description: 'Window seals perishing around rear windows',
      priceToFix: 300,
      rating: 20,
      area: 'bodywork',
      year: 2014,
      faultLogged: '2020-04-27T11:07:05.357Z'
    },
    {
      summary: 'Engine launched a piston through the block',
      description: 'I took my car into the garage to have a regular service and the technician told me that the mounting points for the suspension were rusting. For a 4 year old car, this is a lot sooner than usual. I have been advised that water leaks in underneath the covering cap and pools. Please look out for this if you plan on buying a car similar to this one.',
      priceToFix: 2000,
      rating: 9,
      area: 'engine',
      year: 1985,
      faultLogged: '2019-07-27T10:28:32.645Z'
    },
    {
      summary: 'The sunroof leaked all over my bald head',
      description: 'I took my car into the garage to have a regular service and the technician told me that the mounting points for the suspension were rusting. For a 4 year old car, this is a lot sooner than usual. I have been advised that water leaks in underneath the covering cap and pools. Please look out for this if you plan on buying a car similar to this one.',
      priceToFix: 800,
      rating: 9,
      area: 'interior',
      year: 1985,
      faultLogged: '2019-07-27T10:28:32.645Z'
    },
    {
      summary: 'Killer bees infested my seats',
      description: 'I took my car into the garage to have a regular service and the technician told me that the mounting points for the suspension were rusting. For a 4 year old car, this is a lot sooner than usual. I have been advised that water leaks in underneath the covering cap and pools. Please look out for this if you plan on buying a car similar to this one.',
      priceToFix: 800,
      rating: 9,
      area: 'engine',
      year: 1985,
      faultLogged: '2019-07-27T10:28:32.645Z'
    },
    {
      summary: 'Fuel tank exploded',
      description: 'I took my car into the garage to have a regular service and the technician told me that the mounting points for the suspension were rusting. For a 4 year old car, this is a lot sooner than usual. I have been advised that water leaks in underneath the covering cap and pools. Please look out for this if you plan on buying a car similar to this one.',
      priceToFix: 1500,
      rating: 4,
      area: 'drivetrain',
      year: 1990,
      faultLogged: '2018-04-27T10:28:32.645Z'
    }
  ]
}

//MOCK PRICE / YEAR DATA

const mockPrices = [250, 4500, 50, 700];
const mockYears = [1999, 2004, 2006, 2015];

module.exports = {
  mockFaultsData, 
  sortedFaultsData,
  mockPrices,
  mockYears
};