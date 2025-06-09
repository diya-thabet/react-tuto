import "./form.css";

export default function Form() {
  return (
    <div className="form">
      <form>
        <label htmlFor="name">name:</label>
        <input type="text" id="name" />

        <label htmlFor="number">number:</label>
        <input type="text" id="number" />

        <label htmlFor="age">age:</label>
        <input type="text" id="age" />

        <label htmlFor="salary">salary:</label>
        <select id="salary">
          <option value="">Select</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
