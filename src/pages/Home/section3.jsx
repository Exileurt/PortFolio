import link from '../../assets/link.svg';

const section3 = () => {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="flex justify-between h-5/6 w-11/12">
        <div className="flex flex-col justify-center items-end w-1/2">
          <div className="flex justify-between items-center w-full h-28 border-b p-10 font-light">
            <h3>
              01. <span className="ml-12">Armenian learning website.</span>
            </h3>
            <img src={link} alt="link" />
          </div>
          <div className="flex justify-between items-center w-full h-28 border-b p-10">
            <h3>
              01. <span className="ml-12">Porsche website.</span>
            </h3>
            <img src={link} alt="link" />
          </div>
          <div className="flex justify-between items-center w-full h-28 border-b p-10">
            <h3>
              01. <span className="ml-12">Garrytus website.</span>
            </h3>
            <img src={link} alt="link" />
          </div>
          <a href="#" className="mt-2 text-right">
            MORE.
          </a>
        </div>

        <h2 className="playfair text-6xl">Portfolio.</h2>
      </div>
    </div>
  );
};

export default section3;
