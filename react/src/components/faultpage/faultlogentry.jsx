import '../../css/faultpage.css';
import { useState } from 'react';
import { saveFaultToDatabase } from '../../service/service-api';

const FaultLogEntry = ({setLinkType, setSearchedReg}) => {
  const [formCompleted, setFormCompleted] = useState(false);
  const [newFaultObject, setNewFaultObject] = useState({
    reg: '',
    make: '',
    model: '',
    summary: '',
    description: '',
    year: '',
    area: '',
    priceToFix: '',
    faultLogged: Date.now(),
    rating: 0,
  });

  const inputHandler = (event) =>
    setNewFaultObject({
      ...newFaultObject,
      [event.target.name]: event.target.value,
    });

  const onSearchSubmit = async (event) => {
    event.preventDefault();

    if (!newFaultObject.reg || !newFaultObject.make || !newFaultObject.model) {
      alert('Please fill in the form above');
      return;
    } else {
      const faultsArray = [
        {
          summary: newFaultObject.summary,
          description: newFaultObject.description,
          priceToFix: newFaultObject.priceToFix,
          rating: newFaultObject.rating,
          year: newFaultObject.year,
          faultLogged: newFaultObject.faultLogged,
        },
      ];
      const completeObject = {
        reg: newFaultObject.reg,
        make: newFaultObject.make,
        model: newFaultObject.model,
        faults: faultsArray,
      };
      console.log('SEARCH -> NEXT STEP', completeObject);
      await saveFaultToDatabase(completeObject);
      console.log('kjbfasilbgasjb')
      setFormCompleted(true);
      setSearchedReg(completeObject.reg)
      // GET RID OF WELCOME PAGE
      // RENDER MAIN PAGE
    }
  };

  const backToFaults = () => {

    setLinkType('fault-display')}

  return (

    <div className="log-fault-container">
    {!formCompleted ?
      <form className="log-forms-container glass" onSubmit={onSearchSubmit}>
        <label>
          Reg:
          <input
            type="text"
            name="reg"
            value={newFaultObject.reg}
            placeholder="Enter your registration number..."
            onChange={(event) => inputHandler(event)}
          />
        </label>
        <label>
          Make:
          <input
            type="text"
            name="make"
            value={newFaultObject.make}
            placeholder="Enter the vehicle manufacturer..."
            onChange={(event) => inputHandler(event)}
          />
        </label>
        <label>
          Model:
          <input
            type="text"
            name="model"
            value={newFaultObject.model}
            placeholder="Enter the model of your vehicle..."
            onChange={(event) => inputHandler(event)}
          />
        </label>

        <label>
          Year:
          <input
            type="number"
            name="year"
            value={newFaultObject.year}
            onChange={(event) => inputHandler(event)}
            min="1950"
            step="1"
            max="2021"
          ></input>
        </label>

        <label>
          Fault summary:
          <input
            type="text"
            name="summary"
            value={newFaultObject.summary}
            placeholder="What is the fault?"
            onChange={(event) => inputHandler(event)}
          />
        </label>

        <label>
          Area of fault:
          <select
            name="area"
            value={newFaultObject.area}
            onChange={(event) => inputHandler(event)}
          >
            <option value="interior">Interior</option>
            <option value="bodywork">Bodywork</option>
            <option value="engine">Engine</option>
            <option value="drivetrain">Drivetrain</option>
          </select>
        </label>

        <label>
          Cost to repair: £
          <input
            type="number"
            name="priceToFix"
            value={newFaultObject.priceToFix}
            onChange={(event) => inputHandler(event)}
            min="0"
            step="50"
            max="5000"
          ></input>
        </label>

        <label>
          Fault description:
          <textarea
            name="description"
            placeholder="Please enter a short description of the fault..."
            rows="4"
            cols="50"
            value={newFaultObject.description}
            onChange={(event) => inputHandler(event)}
          />
        </label>

      <label>Upload images of fault:
</label>
  <input type="file" id="myFile" name="filename"></input>


        <input type="submit" value="Submit" />
        <input type="reset" />

      </form>
    :
    <div>
      <p>DONE</p>
      <button
      onClick={(() => backToFaults())}>Okay</button>
      </div>
  }
    </div>
  );
};

export default FaultLogEntry;
