import { Doughnut } from 'react-chartjs-2';
import '../../css/faultpage.css';

const RightDataDisplay = ({ allFaultsObject }) => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
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
            <p>EXTRA STATS</p>
            <p>EXTRA STATS</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightDataDisplay;
