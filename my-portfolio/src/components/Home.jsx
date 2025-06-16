import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="hello-desc">
          <h1>Hi,</h1>
          <h1>
            I'm <span>Conor.</span>
          </h1>
          <h1>A full stack web developer.</h1>
        </div>
      </div>
      <div className="image-container">
        <div className="image">
          <img
            src="/images/headshot-peaks.jpg"
            alt="Conor's Photo"
          />
        </div>
      </div>
    </>
  );
};

export default Home;