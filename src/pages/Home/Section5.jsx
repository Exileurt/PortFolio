import {useContext} from 'react';
import {CursorContext} from '../../components/Cursor/cursor';
import linkedin from '../../assets/linkedin.svg';
import insta from '../../assets/insta.svg';
import mail from '../../assets/mail.svg';

const Section5 = () => {
  const {onEnterCursor, onLeaveCursor} = useContext(CursorContext);
  const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };

  return (
    <div className="relative flex justify-center items-center h-[70vh] overflow-hidden">
      <div className="relative flex justify-center items-center h-5/6 w-11/12">
        <div
          className="flex justify-center items-center flex-col select-none"
          onMouseEnter={onEnterCursor}
          onMouseLeave={onLeaveCursor}
        >
          CONTACT
          <div className="flex justify-center items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/aurelien-favrel-24983b28b/"
              rel="noreferrer"
              target="_blank"
              className="hover:scale-105"
              onMouseEnter={onEnterCursor}
              onMouseLeave={onLeaveCursor}
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <a
              href="https://www.instagram.com/aurelien.fav/"
              rel="noreferrer"
              target="_blank"
              className="hover:scale-105"
              onMouseEnter={onEnterCursor}
              onMouseLeave={onLeaveCursor}
            >
              <img src={insta} alt="insta" />
            </a>
            <a
              href='href="mailto:email@example.com"'
              rel="noreferrer"
              target="_blank"
              onMouseEnter={onEnterCursor}
              onMouseLeave={onLeaveCursor}
            >
              <img src={mail} alt="mail" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 flex justify-between w-full">
          <a
            href="https://github.com/Exileurt/PortFolio"
            className="hover:scale-105"
            onMouseEnter={onEnterCursor}
            onMouseLeave={onLeaveCursor}
          >
            <h5>GITHUB LINK</h5>
          </a>
          <button
            onClick={scrollToTop}
            className="hover:scale-105"
            onMouseEnter={onEnterCursor}
            onMouseLeave={onLeaveCursor}
          >
            <h5>TOP PAGE</h5>
          </button>
          <a
            href="https://www.figma.com/file/yDJFET4wSM8MxDw3LiCYDV/PortFolio?type=design&node-id=0%3A1&mode=design&t=157VTOEz2q1exnq6-1"
            rel="noreferrer"
            target="_blank"
            className="hover:scale-105"
            onMouseEnter={onEnterCursor}
            onMouseLeave={onLeaveCursor}
          >
            <h5>FIGMA PROJECT</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section5;
