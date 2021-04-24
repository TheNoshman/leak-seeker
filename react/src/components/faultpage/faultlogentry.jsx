import '../../css/faultpage.css';

const FaultLogEntry = () => {
  return (
    <div className="log-fault-container">
      <form className="log-forms-container">
        <label>
          Reg:
          <input type="text" name="name" />
        </label>
        <label>
          Make:
          <input type="text" name="name" />
        </label>
        <label>
          Model:
          <input type="text" name="name" />
        </label>
        <label>
          Year:
          <input type="text" name="name" />
        </label>
        <label>
          Fault summary:
          <input type="text" name="name" />
        </label>

        <label>
          Area of fault:
          <select value={''} onChange={() => console.log('x')}>
            <option value="interior">Interior</option>
            <option value="bodywork">Bodywork</option>
            <option value="engine">Engine</option>
            <option value="drivetrain">Drivetrain</option>
          </select>
        </label>

        <label for="male">
          Male: <input type="radio" id="male" name="gender" value="male" />
        </label>

        <label for="female">
          Female:{' '}
          <input type="radio" id="female" name="gender" value="female" />
        </label>
        <label for="other">
          Other: <input type="radio" id="other" name="gender" value="other" />
        </label>

        <label>
          Fault description:
          <textarea value={''} onChange={() => console.log('x')} />
        </label>

        <input type="submit" value="Submit" />
        <input type="reset" />
      </form>
    </div>
  );
};

export default FaultLogEntry;
