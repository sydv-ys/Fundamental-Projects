import data from "./data";

const App = () => {
  return (
    <main className="main">
      {data.map(({ id, name, age, image }) => {
        return (
          <div className="container">
            <h3 className="container h3">users</h3>
            <div key={id} className="person">
              <img className="person img" src={image} alt="" />
              <h4 className="person h4">{name}</h4>
              <p className="person p">{age}</p>
            </div>
          </div>
        );
      })}
    </main>
  );
};
export default App;
