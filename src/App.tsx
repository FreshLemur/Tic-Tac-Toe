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

  const endGame = () => {
    if (ticTacToeCounter === 10) {
      setTicTacToeCounter(1);
      setFirstt(null);
      setSecondd(null);
      setThirdd(null);
      setFourthh(null);
      setFifthh(null);
      setSixthh(null);
      setSeventhh(null);
      setEighthh(null);
      setNinthh(null);

      setIsFirstClicked(false);
      setIsSecondClicked(false);
      setIsThirdClicked(false);
      setIsFourthClicked(false);
      setIsFifthClicked(false);
      setIsSixthClicked(false);
      setIsSeventhClicked(false);
      setIsEighthClicked(false);
      setisNinethClicked(false);
    }
  };
  endGame();

  const first = () => {
    if (isFirstClicked) return;

    if (
      ticTacToeCounter === 1 ||
      ticTacToeCounter === 3 ||
      ticTacToeCounter === 5 ||
      ticTacToeCounter === 7 ||
      ticTacToeCounter === 9
    ) {
      setFirstt(<XSVG />);
      setIsFirstClicked(true);
      setTicTacToeCounter(ticTacToeCounter + 1);
      return;
    }
    if (
      ticTacToeCounter === 2 ||
      ticTacToeCounter === 4 ||
      ticTacToeCounter === 6 ||
      ticTacToeCounter === 8 ||
      ticTacToeCounter === 10
    ) {
      setFirstt(<OSVG />);
      setIsFirstClicked(true);
      setTicTacToeCounter(ticTacToeCounter + 1);
      return;
    }
  };

  const second = () => {
    if (isSecondClicked) return;

    if (
      ticTacToeCounter === 1 ||
      ticTacToeCounter === 3 ||
      ticTacToeCounter === 5 ||
      ticTacToeCounter === 7 ||
      ticTacToeCounter === 9
    ) {
      setSecondd(<XSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsSecondClicked(true);

      return;
    }
    if (
      ticTacToeCounter === 2 ||
      ticTacToeCounter === 4 ||
      ticTacToeCounter === 6 ||
      ticTacToeCounter === 8 ||
      ticTacToeCounter === 10
    ) {
      setSecondd(<OSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsSecondClicked(true);
      return;
    }
  };

  const third = () => {
    if (isThirdClicked) return;

    if (
      ticTacToeCounter === 1 ||
      ticTacToeCounter === 3 ||
      ticTacToeCounter === 5 ||
      ticTacToeCounter === 7 ||
      ticTacToeCounter === 9
    ) {
      setThirdd(<XSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsThirdClicked(true);
      return;
    }
    if (
      ticTacToeCounter === 2 ||
      ticTacToeCounter === 4 ||
      ticTacToeCounter === 6 ||
      ticTacToeCounter === 8 ||
      ticTacToeCounter === 10
    ) {
      setThirdd(<OSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsThirdClicked(true);
      return;
    }
  };

  const fourth = () => {
    if (isFourthClicked) return;

    if (
      ticTacToeCounter === 1 ||
      ticTacToeCounter === 3 ||
      ticTacToeCounter === 5 ||
      ticTacToeCounter === 7 ||
      ticTacToeCounter === 9
    ) {
      setFourthh(<XSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsFourthClicked(true);
      return;
    }
    if (
      ticTacToeCounter === 2 ||
      ticTacToeCounter === 4 ||
      ticTacToeCounter === 6 ||
      ticTacToeCounter === 8 ||
      ticTacToeCounter === 10
    ) {
      setFourthh(<OSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsFourthClicked(true);
      return;
    }
  };

  const fifth = () => {
    if (isFifthClicked) return;

    if (
      ticTacToeCounter === 1 ||
      ticTacToeCounter === 3 ||
      ticTacToeCounter === 5 ||
      ticTacToeCounter === 7 ||
      ticTacToeCounter === 9
    ) {
      setFifthh(<XSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsFifthClicked(true);
      return;
    }
    if (
      ticTacToeCounter === 2 ||
      ticTacToeCounter === 4 ||
      ticTacToeCounter === 6 ||
      ticTacToeCounter === 8 ||
      ticTacToeCounter === 10
    ) {
      setFifthh(<OSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsFifthClicked(true);
      return;
    }
  };

  const sixth = () => {
    if (isSixthClicked) return;

    if (
      ticTacToeCounter === 1 ||
      ticTacToeCounter === 3 ||
      ticTacToeCounter === 5 ||
      ticTacToeCounter === 7 ||
      ticTacToeCounter === 9
    ) {
      setSixthh(<XSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsSixthClicked(true);
      return;
    }
    if (
      ticTacToeCounter === 2 ||
      ticTacToeCounter === 4 ||
      ticTacToeCounter === 6 ||
      ticTacToeCounter === 8 ||
      ticTacToeCounter === 10
    ) {
      setSixthh(<OSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsSixthClicked(true);
      return;
    }
  };

  const seventh = () => {
    if (isSeventhClicked) return;

    if (
      ticTacToeCounter === 1 ||
      ticTacToeCounter === 3 ||
      ticTacToeCounter === 5 ||
      ticTacToeCounter === 7 ||
      ticTacToeCounter === 9
    ) {
      setSeventhh(<XSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsSeventhClicked(true);
      return;
    }
    if (
      ticTacToeCounter === 2 ||
      ticTacToeCounter === 4 ||
      ticTacToeCounter === 6 ||
      ticTacToeCounter === 8 ||
      ticTacToeCounter === 10
    ) {
      setSeventhh(<OSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsSeventhClicked(true);
      return;
    }
  };

  const eighth = () => {
    if (isEighthClicked) return;

    if (
      ticTacToeCounter === 1 ||
      ticTacToeCounter === 3 ||
      ticTacToeCounter === 5 ||
      ticTacToeCounter === 7 ||
      ticTacToeCounter === 9
    ) {
      setEighthh(<XSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsEighthClicked(true);
      return;
    }
    if (
      ticTacToeCounter === 2 ||
      ticTacToeCounter === 4 ||
      ticTacToeCounter === 6 ||
      ticTacToeCounter === 8 ||
      ticTacToeCounter === 10
    ) {
      setEighthh(<OSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setIsEighthClicked(true);
      return;
    }
  };

  const ninth = () => {
    if (isNinethClicked) return;

    if (
      ticTacToeCounter === 1 ||
      ticTacToeCounter === 3 ||
      ticTacToeCounter === 5 ||
      ticTacToeCounter === 7 ||
      ticTacToeCounter === 9
    ) {
      setNinthh(<XSVG />);
      setTicTacToeCounter(ticTacToeCounter + 1);
      setisNinethClicked(true);
      return;
    }
    if (
      ticTacToeCounter === 2 ||
      ticTacToeCounter === 4 ||
      ticTacToeCounter === 6 ||
      ticTacToeCounter === 8 ||
      ticTacToeCounter === 10
    ) {
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
