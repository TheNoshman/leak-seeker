import { Doughnut } from 'react-chartjs-2';
import '../../css/faultpage.css';
import { priceAverager, yearAverager, areaAverager } from '../../service/service-api';
import { useState } from 'react';

const RightDataDisplay = ({ allFaultsObject }) => {
  const [dataType, setDataType] = useState('');

  const faultsByPrice = allFaultsObject[0].faults.map((el) => el.priceToFix);
  const faultsByArea = allFaultsObject[0].faults.map((el) => el.area);
  const faultsByYear = allFaultsObject[0].faults.map((el) => el.year);

  const price = priceAverager(faultsByPrice);
  const areas = areaAverager(faultsByArea)
  const years = yearAverager(faultsByYear)

  console.log('PRICES ', price);

  const data = {
    labels: ['£10-100', '£100-£500', '£500-1000', '£1000 +'],

    datasets: [
      {
        data: price,
        backgroundColor: ['#90e0ef', '#00b4d8', '#0077b6', '#03045e'],
        borderColor: ['#90e0ef', '#00b4d8', '#0077b6', '#03045e'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="data-container col glass">
      {allFaultsObject.length > 0 && (
        <div>
          <h2>X data</h2>
          <Doughnut data={data} width={400} height={400} />
          <div>
            <p>Problem areas</p>
            <p>Average repair price</p>
            <p>Number of faults by year</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightDataDisplay;
