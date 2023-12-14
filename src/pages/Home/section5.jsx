import gradiant5 from '../../assets/gradient/gradient5.png';
import linkedin from '../../assets/linkedin.svg';
import insta from '../../assets/insta.svg';
import mail from '../../assets/mail.svg';

const Section5 = () => {
  return (
    <div className="relative flex justify-center items-center h-[70vh] overflow-hidden">
      <div className="relative flex justify-center items-center h-5/6 w-11/12">
        <div className="flex justify-center items-center flex-col">
          CONTACT
          <div className="flex justify-center items-center space-x-4">
            <img src={linkedin} alt="linkedin" />
            <img src={insta} alt="insta" />
            <img src={mail} alt="mail" />
          </div>
        </div>
        <div className="absolute bottom-0 flex justify-between w-full">
          <h5>GITHUB LINK</h5> <h5>TOP PAGE</h5>
          <h5>FIGMA PROJECT</h5>
        </div>
      </div>

      <img
        src={gradiant5}
        alt="gradiant5"
        className="absolute -bottom-36 right-0"
      />
    </div>
  );
};

export default Section5;
