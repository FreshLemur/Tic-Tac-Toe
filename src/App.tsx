import { useState } from "react";
import "./App.css";
import OSVG from "./OSVG";
import XSVG from "./XSVG";

export default function App() {
  const [ticTacToeCounter, setTicTacToeCounter] = useState<number>(1);

  const [firstt, setFirstt] = useState<any>();
  const [secondd, setSecondd] = useState<any>();
  const [thirdd, setThirdd] = useState<any>();
  const [fourthh, setFourthh] = useState<any>();
  const [fifthh, setFifthh] = useState<any>();
  const [sixthh, setSixthh] = useState<any>();
  const [seventhh, setSeventhh] = useState<any>();
  const [eighthh, setEighthh] = useState<any>();
  const [ninthh, setNinthh] = useState<any>();

  const [isFirstClicked, setIsFirstClicked] = useState<boolean>(false);
  const [isSecondClicked, setIsSecondClicked] = useState<boolean>(false);
  const [isThirdClicked, setIsThirdClicked] = useState<boolean>(false);
  const [isFourthClicked, setIsFourthClicked] = useState<boolean>(false);
  const [isFifthClicked, setIsFifthClicked] = useState<boolean>(false);
  const [isSixthClicked, setIsSixthClicked] = useState<boolean>(false);
  const [isSeventhClicked, setIsSeventhClicked] = useState<boolean>(false);
  const [isEighthClicked, setIsEighthClicked] = useState<boolean>(false);
  const [isNinethClicked, setisNinethClicked] = useState<boolean>(false);

  const first = () => {
    const isMove = ticTacToeCounter;
    console.log(isMove);

    if (isFirstClicked) return;

    if (isMove === 1) {
      setFirstt(<XSVG />);
      setTicTacToeCounter(ticTacToeCounter - 1);
      setIsFirstClicked(true);
      return;
    }
    if (isMove === 0) {
      setFirstt(<OSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsFirstClicked(true);
      return;
    }
  };

  const second = () => {
    const isMove = ticTacToeCounter;
    console.log(isMove);

    if (isSecondClicked) return;

    if (isMove === 1) {
      setSecondd(<XSVG />);
      setTicTacToeCounter(ticTacToeCounter - 1);
      setIsSecondClicked(true);
      return;
    }
    if (isMove === 0) {
      setSecondd(<OSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsSecondClicked(true);
      return;
    }
  };

  const third = () => {
    const isMove = ticTacToeCounter;
    console.log(isMove);

    if (isThirdClicked) return;

    if (isMove === 1) {
      setThirdd(<XSVG />);
      setTicTacToeCounter(ticTacToeCounter - 1);
      setIsThirdClicked(true);
      return;
    }
    if (isMove === 0) {
      setThirdd(<OSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsThirdClicked(true);
      return;
    }
  };

  const fourth = () => {
    const isMove = ticTacToeCounter;
    console.log(isMove);

    if (isFourthClicked) return;

    if (isMove === 1) {
      setFourthh(<XSVG />);
      setTicTacToeCounter(ticTacToeCounter - 1);
      setIsFourthClicked(true);
      return;
    }
    if (isMove === 0) {
      setFourthh(<OSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsFourthClicked(true);
      return;
    }
  };

  const fifth = () => {
    const isMove = ticTacToeCounter;
    console.log(isMove);

    if (isFifthClicked) return;

    if (isMove === 1) {
      setFifthh(<XSVG />);
      setTicTacToeCounter(ticTacToeCounter - 1);
      setIsFifthClicked(true);
      return;
    }
    if (isMove === 0) {
      setFifthh(<OSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsFifthClicked(true);
      return;
    }
  };

  const sixth = () => {
    const isMove = ticTacToeCounter;
    console.log(isMove);

    if (isSixthClicked) return;

    if (isMove === 1) {
      setSixthh(<XSVG />);
      setTicTacToeCounter(ticTacToeCounter - 1);
      setIsSixthClicked(true);
      return;
    }
    if (isMove === 0) {
      setSixthh(<OSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsSixthClicked(true);
      return;
    }
  };

  const seventh = () => {
    const isMove = ticTacToeCounter;
    console.log(isMove);

    if (isSeventhClicked) return;

    if (isMove === 1) {
      setSeventhh(<XSVG />);
      setTicTacToeCounter(ticTacToeCounter - 1);
      setIsSeventhClicked(true);
      return;
    }
    if (isMove === 0) {
      setSeventhh(<OSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsSeventhClicked(true);
      return;
    }
  };

  const eighth = () => {
    const isMove = ticTacToeCounter;
    console.log(isMove);

    if (isEighthClicked) return;

    if (isMove === 1) {
      setEighthh(<XSVG />);
      setTicTacToeCounter(ticTacToeCounter - 1);
      setIsEighthClicked(true);
      return;
    }
    if (isMove === 0) {
      setEighthh(<OSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsEighthClicked(true);
      return;
    }
  };

  const ninth = () => {
    const isMove = ticTacToeCounter;
    console.log(isMove);

    if (isNinethClicked) return;

    if (isMove === 1) {
      setNinthh(<XSVG />);
      setTicTacToeCounter(ticTacToeCounter - 1);
      setisNinethClicked(true);
      return;
    }
    if (isMove === 0) {
      setNinthh(<OSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setisNinethClicked(true);
      return;
    }
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <section>
          <div className="container first" onClick={() => first()}>
            {firstt}
          </div>
          <div className="container fourth" onClick={() => fourth()}>
            {fourthh}
          </div>
          <div className="container seventh" onClick={() => seventh()}>
            {seventhh}
          </div>
        </section>
        <section>
          <div className="container second" onClick={() => second()}>
            {secondd}
          </div>
          <div className="container fifth" onClick={() => fifth()}>
            {fifthh}
          </div>
          <div className="container eighth" onClick={() => eighth()}>
            {eighthh}
          </div>
        </section>
        <section>
          <div className="container third" onClick={() => third()}>
            {thirdd}
          </div>
          <div className="container sixth" onClick={() => sixth()}>
            {sixthh}
          </div>
          <div className="container ninth" onClick={() => ninth()}>
            {ninthh}
          </div>
        </section>
      </div>
    </div>
  );
}
