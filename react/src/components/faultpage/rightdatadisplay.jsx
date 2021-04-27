import { Doughnut } from 'react-chartjs-2';
import '../../css/faultpage.css';
import {
  priceAverager,
  yearAverager,
  areaAverager,
} from '../../service/service-api';
import { useState } from 'react';

const RightDataDisplay = ({ allFaultsObject }) => {
  const faultsByPrice = allFaultsObject[0].faults.map((el) => el.priceToFix);
  const faultsByArea = allFaultsObject[0].faults.map((el) => el.area);
  const faultsByYear = allFaultsObject[0].faults.map((el) => el.year);

  const prices = priceAverager(faultsByPrice);
  const areas = areaAverager(faultsByArea);
  const years = yearAverager(faultsByYear);

  const priceStats = ['£10-100', '£100-£500', '£500-1000', '£1000 +'];
  const areaStats = ['Interior', 'Bodywork', 'Engine', 'Drivetrain'];
  const yearStats = ["Pre-1990's", '1990-2000', '2000-2010', '2010 >'];

  const [dataType, setDataType] = useState([areaStats, 'Problem area', areas]);

  console.log('AREAS = ', areas)

  const data = {
    labels: dataType[0],

    datasets: [
      {
        label: dataType[1],
        data: dataType[2],
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
          <h2>{dataType[1]} data</h2>
          <Doughnut data={data} width={400} height={400} />
          <div className="stats">
            <a
              onClick={() => setDataType([areaStats, 'Problem area', areas])}
              href="#"
              className="data-choice-btn"
            >
              <div className="icn">
                <i class="fas fa-car-crash fa-lg"></i>
              </div>
              Problem areas
            </a>

            <a
              onClick={() =>
                setDataType([priceStats, 'Average Repair Price', prices])
              }
              href="#"
              className="data-choice-btn"
            >
              <div className="icn">
                <i class="fas fa-dollar-sign fa-lg"></i>
              </div>
              Average repair price
            </a>

            <a
              onClick={() =>
                setDataType([yearStats, 'Faults Sorted By Year', years])
              }
              href="#"
              className="data-choice-btn"
            >
              <div className="icn">
                <i class="far fa-calendar-alt fa-lg"></i>
              </div>
              Number of faults by year
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightDataDisplay;
