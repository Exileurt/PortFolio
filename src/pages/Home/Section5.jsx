import gradiant5 from '../../assets/gradient/gradient5.png';
import linkedin from '../../assets/linkedin.svg';
import insta from '../../assets/insta.svg';
import mail from '../../assets/mail.svg';

const Section5 = () => {
  const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };

  return (
    <div className="relative flex justify-center items-center h-[70vh] overflow-hidden">
      <div className="relative flex justify-center items-center h-5/6 w-11/12 z-10">
        <div className="flex justify-center items-center flex-col select-none">
          CONTACT
          <div className="flex justify-center items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/aurelien-favrel-24983b28b/"
              rel="noreferrer"
              target="_blank"
              className="hover:scale-105"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <a
              href="https://www.instagram.com/aurelien.fav/"
              rel="noreferrer"
              target="_blank"
              className="hover:scale-105"
            >
              <img src={insta} alt="insta" />
            </a>
            <a
              href='href="mailto:email@example.com"'
              rel="noreferrer"
              target="_blank"
            >
              <img src={mail} alt="mail" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 flex justify-between w-full">
          <a
            href="https://github.com/Exileurt/PortFolio"
            className="hover:scale-105"
          >
            <h5>GITHUB LINK</h5>
          </a>
          <button onClick={scrollToTop} className="hover:scale-105">
            <h5>TOP PAGE</h5>
          </button>
          <a
            href="https://www.figma.com/file/yDJFET4wSM8MxDw3LiCYDV/PortFolio?type=design&node-id=0%3A1&mode=design&t=157VTOEz2q1exnq6-1"
            rel="noreferrer"
            target="_blank"
            className="hover:scale-105"
          >
            <h5>FIGMA PROJECT</h5>
          </a>
        </div>
      </div>

      <img
        src={gradiant5}
        alt="gradiant5"
        className="absolute -bottom-36 right-0 -z-0"
      />
    </div>
  );
};

export default Section5;
