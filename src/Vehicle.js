const Vehicle = ({ name }) => {
  return (
    <div>
      <div className="App">
        '
        <section>
          <h1>{name}</h1>
          <dl>
            <dt>number of wheels</dt>
            <dd>{name === "bike" ? "two" : "four"}</dd>
            <dt> milege</dt>
            <dd>{name === "bike" ? "60" : "22"}</dd>
            <dt>color </dt>
            <dd>{name === "bike" ? "black" : "white"}</dd>
          </dl>
        </section>
      </div>
    </div>
  );
};

export default Vehicle;
