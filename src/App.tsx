import { useEffect, useState } from "react";
import "./App.css";
import OSVG from "./OSVG";
import XSVG from "./XSVG";

export default function App() {
  const [ticTacToeCounter, setTicTacToeCounter] = useState<number>(1);
  const [xWinCounter, setXWinCounter] = useState<number>(0);
  const [oWinCounter, setOWinCounter] = useState<number>(0);

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

  const [firstForWin, setFirstForWin] = useState<number>();
  const [secondForWin, setSecondForWin] = useState<number>();
  const [thirdForWin, setThirdForWin] = useState<number>();
  const [fourthForWin, setFourthForWin] = useState<number>();
  const [fifthForWin, setFifthForWin] = useState<number>();
  const [sixthForWin, setSixthForWin] = useState<number>();
  const [seventhForWin, setSeventhForWin] = useState<number>();
  const [eighthForWin, setEighthForWin] = useState<number>();
  const [ninethForWin, setNinethForWin] = useState<number>();

  const endGame = () => {
    console.log(firstForWin);
    console.log(fourthForWin);
    console.log(seventhForWin);

    // If x Winned
    if (firstForWin === 1 && secondForWin === 1 && thirdForWin === 1) {
      alert("x WIN");
      setXWinCounter(xWinCounter + 1);
      end();
    }
    if (firstForWin === 1 && fourthForWin === 1 && seventhForWin === 1) {
      alert("x WIN");
      setXWinCounter(xWinCounter + 1);
      end();
    }
    if (firstForWin === 1 && fifthForWin === 1 && ninethForWin === 1) {
      alert("x WIN");
      setXWinCounter(xWinCounter + 1);
      end();
    }
    if (seventhForWin === 1 && eighthForWin === 1 && ninethForWin === 1) {
      alert("x WIN");
      setXWinCounter(xWinCounter + 1);
      end();
    }
    if (thirdForWin === 1 && sixthForWin === 1 && ninethForWin === 1) {
      alert("x WIN");
      setXWinCounter(xWinCounter + 1);
      end();
    }
    if (thirdForWin === 1 && fifthForWin === 1 && seventhForWin === 1) {
      alert("x WIN");
      setXWinCounter(xWinCounter + 1);
      end();
    }
    if (secondForWin === 1 && fifthForWin === 1 && eighthForWin === 1) {
      alert("x WIN");
      setXWinCounter(xWinCounter + 1);
      end();
    }
    if (fourthForWin === 1 && fifthForWin === 1 && sixthForWin === 1) {
      alert("x WIN");
      setXWinCounter(xWinCounter + 1);
      end();
    }

    // If O Winned
    if (firstForWin === 0 && secondForWin === 0 && thirdForWin === 0) {
      alert("o WIN");
      setOWinCounter(oWinCounter + 1);
      end();
    }
    if (firstForWin === 0 && fourthForWin === 0 && seventhForWin === 0) {
      alert("o WIN");
      setOWinCounter(oWinCounter + 1);
      end();
    }
    if (firstForWin === 0 && fifthForWin === 0 && ninethForWin === 0) {
      alert("o WIN");
      setOWinCounter(oWinCounter + 1);
      end();
    }
    if (seventhForWin === 0 && eighthForWin === 0 && ninethForWin === 0) {
      alert("o WIN");
      setOWinCounter(oWinCounter + 1);
      end();
    }
    if (thirdForWin === 0 && sixthForWin === 0 && ninethForWin === 0) {
      alert("o WIN");
      setOWinCounter(oWinCounter + 1);
      end();
    }
    if (thirdForWin === 0 && fifthForWin === 0 && seventhForWin === 0) {
      alert("o WIN");
      setOWinCounter(oWinCounter + 1);
      end();
    }
    if (secondForWin === 0 && fifthForWin === 0 && eighthForWin === 0) {
      alert("o WIN");
      setOWinCounter(oWinCounter + 1);
      end();
    }
    if (fourthForWin === 0 && fifthForWin === 0 && sixthForWin === 0) {
      alert("o WIN");
      setOWinCounter(oWinCounter + 1);
      end();
    }

    if (ticTacToeCounter === 10) {
      end();
    }
  };

  const end = () => {
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
  };

  useEffect(() => {
    endGame();
  }, [
    firstForWin,
    secondForWin,
    thirdForWin,
    fourthForWin,
    fifthForWin,
    sixthForWin,
    seventhForWin,
    eighthForWin,
    ninethForWin,
  ]); // виклик функції endGame при зміні цих станів

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
      setFirstForWin(1);

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
      setFirstForWin(0);
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
      setSecondForWin(1);

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
      setSecondForWin(0);
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
      setThirdForWin(1);

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
      setThirdForWin(0);
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
      setFourthForWin(1);
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
      setFourthForWin(0);
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
      setFifthForWin(1);
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
      setFifthForWin(0);
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
      setSixthForWin(1);
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
      setSixthForWin(0);
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
      setSeventhForWin(1);
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
      setSeventhForWin(0);
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
      setEighthForWin(1);
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
      setEighthForWin(0);
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
      setNinethForWin(1);
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
      setNinethForWin(0);
      return;
    }
  };

  return (
    <div className="App">
      <h1 className="NumberOfXWins">
        Number of ✖️ wins
        <br />
        ⬇️
        <br />
        <span>{xWinCounter}</span>
      </h1>
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
      <h1 className="NumberOfOWins">
        Number of ⭕ wins
        <br />
        ⬇️
        <br />
        <span>{oWinCounter}</span>
      </h1>
    </div>
  );
}
