import { Doughnut } from 'react-chartjs-2';
import '../../css/faultpage.css';
import {averager} from '../../service/service-api'

const RightDataDisplay = ({ allFaultsObject }) => {

  const faultsByPrice = allFaultsObject[0].faults.map((el) => el.priceToFix)
  const faultsByArea = () => allFaultsObject[0].faults.map((el) => el.area)
  const faultsByYear = () => allFaultsObject[0].faults.map((el) => el.year)

  const price = averager(faultsByPrice)
  // const areas = averager(faultsByArea)
  // const years = averager(faultsByYear)

  console.log('PRICES ',price)



  const data = {
    labels: ['£10-100', '£100-£300', '£300-500', '£500 +'],

    datasets: [
      {
        label: 'Problem Areas',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="data-container col glass">
      {allFaultsObject.length > 0 && (
        <div>
          <Doughnut
            data={data}
            width={400}
            height={400}
          />
          <div>
            <p>Largest problem area: {allFaultsObject[0].faults[0].area}</p>
            <p>AVERAGE FIX PRICE</p>
            <p>MOST COMMON AREA FOR PROBLEM</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightDataDisplay;
