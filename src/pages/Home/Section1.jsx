import {useContext} from 'react';
import {CursorContext} from '../../components/Cursor/cursor';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import insta from '../../assets/insta.svg';
import arrow from '../../assets/arrow.svg';

const Section1 = () => {
  const {onEnterCursor, onLeaveCursor} = useContext(CursorContext);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative flex justify-center items-center h-5/6 w-11/12  bg-black/10 rounded-xl">
        <p className="absolute top-6 left-6 select-none">
          Site designed by me.
        </p>

        <div className="text-center select-none max-w-2xl">
          <h2
            className="text-3xl"
            onMouseEnter={onEnterCursor}
            onMouseLeave={onLeaveCursor}
          >
            creative developer*
          </h2>
          <h1
            className="text-9xl tracking-widest"
            onMouseEnter={onEnterCursor}
            onMouseLeave={onLeaveCursor}
          >
            AURELIEN FAVREL
          </h1>
        </div>

        <div className="absolute bottom-6 left-6 flex flex-col select-none">
          <a
            href="https://www.linkedin.com/in/aurelien-favrel-24983b28b/"
            rel="noreferrer"
            target="_blank"
            className="hover:scale-105"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://github.com/Exileurt"
            rel="noreferrer"
            target="_blank"
            className="hover:scale-105"
          >
            <img src={github} alt="github" />
          </a>
          <a
            href="https://www.instagram.com/aurelien.fav/"
            rel="noreferrer"
            target="_blank"
            className="hover:scale-105"
          >
            <img src={insta} alt="insta" />
          </a>
        </div>

        <div className="absolute flex bottom-6 right-6 items-end select-none">
          <span className="pr-6 leading-3">Scroll down</span>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
