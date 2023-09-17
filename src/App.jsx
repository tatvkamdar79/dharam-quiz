import { useEffect, useState } from "react";
import Line from "./components/Line";
import team from "./assets/icon.jpg";
import ScoreValues from "./components/ScoreValues";
import QuestionCard from "./components/QuestionCard";
import Timer from "./components/Timer";
import round1 from "./rounds/round1.json";
import round2 from "./rounds/round2.json";
import round3 from "./rounds/round3.json";
import round4 from "./rounds/round4.json";
import round5 from "./rounds/round5.json";
import round6 from "./rounds/round6.json";
import round7 from "./rounds/round7.json";
import BhaktiComponent from "./components/BhaktiComponent";

function App() {
  const [hovered, setHovered] = useState(false);
  const [duration, setDuration] = useState(0);

  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [team3Score, setTeam3Score] = useState(0);
  const [team4Score, setTeam4Score] = useState(0);

  const [round, setRound] = useState({});
  const [roundNumber, setRoundNumber] = useState(1);
  const [teamNumber, setTeamNumber] = useState(0);
  const [bhakti, setBhakti] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleInputChange = (e) => {
    setDuration(parseInt(e.target.value, 10));
  };
  const nextTeam = () => {
    if (teamNumber === 3) {
      return;
    } else {
      setTeamNumber((teamNumber) => teamNumber + 1);
    }
  };
  const prevTeam = () => {
    if (teamNumber === 0) {
      return;
    } else {
      setTeamNumber((teamNumber) => teamNumber - 1);
    }
  };
  const increaseScore = (team, score) => {
    if (team === 1) {
      setTeam1Score((team1Score) => {
        if (score === -9999999) return 0;
        if (team1Score + score < 0) return;
        if (team1Score + score > 140) return team1Score;
        return team1Score + score;
      });
    }
    if (team === 2) {
      setTeam2Score((team2Score) => {
        if (score === -9999999) return 0;
        if (team2Score + score < 0) return;
        if (team2Score + score > 140) return team2Score;
        return team2Score + score;
      });
    }
    if (team === 3) {
      setTeam3Score((team3Score) => {
        if (score === -9999999) return 0;
        if (team3Score + score < 0) return;
        if (team3Score + score > 140) return team3Score;
        return team3Score + score;
      });
    }
    if (team === 4) {
      setTeam4Score((team4Score) => {
        if (score === -9999999) return 0;
        if (team4Score + score < 0) return;
        if (team4Score + score > 140) return team4Score;
        return team4Score + score;
      });
    }
  };
  useEffect(() => {
    if (roundNumber === 1) {
      setRound(round1);
    }
    if (roundNumber === 2) {
      setRound(round2);
    }
    if (roundNumber === 3) {
      setRound(round3);
    }
    if (roundNumber === 4) {
      setRound(round4);
    }
    if (roundNumber === 5) {
      setRound(round5);
    }
    if (roundNumber === 6) {
      setRound(round6);
    }
    if (roundNumber === 7) {
      setRound(round7);
    }
  }, [roundNumber]);

  return (
    <div className="w-full h-screen flex">
      <section
        className={`h-screen w-[85%] ${
          hovered && "w-[50%]"
        } bg-gradient-to-r from-amber-200 via-amber-200 to-amber-100 transition-all duration-500`}
      >
        <div className="w-full flex justify-evenly gap-x-10 my-3">
          <p className="text-5xl text-center text-gray-600 font-semibold font-mono">
            R O U N D -{" "}
            {[1, 4, 6].includes(roundNumber) && `${roundNumber} प्रश्न उत्तर`}
            {roundNumber === 3 && `${roundNumber} दृश्य पहचानो`}
            {[2, 5].includes(roundNumber) && `${roundNumber} हाँ या ना`}
          </p>
          <p className="text-5xl text-center text-gray-600 font-semibold font-mono">
            T E A M - {teamNumber + 1} {teamNumber + 1 === 1 && "प्रथमानुयोग"}
            {teamNumber + 1 === 2 && "करणानुयोग"}
            {teamNumber + 1 === 3 && "चरणानुयोग"}
            {teamNumber + 1 === 4 && "द्रव्यानुयोग"}
          </p>
        </div>
        <Line thickness={1} />
        <div className="flex justify-between place-items-center my-4">
          <Timer duration={duration} />
          <div className="flex flex-row-reverse gap-x-6 p-3 text-white">
            <div className="flex gap-x-2">
              <button
                className="px-3 py-2 bg-gray-500 rounded-lg"
                onClick={() =>
                  setRoundNumber((roundNumber) =>
                    roundNumber > 1 ? roundNumber - 1 : 1
                  )
                }
              >
                Prev Round
              </button>
              <button
                className="px-3 py-2 bg-gray-500 rounded-lg"
                onClick={() =>
                  setRoundNumber((roundNumber) =>
                    roundNumber < 6 ? roundNumber + 1 : roundNumber + 0
                  )
                }
              >
                Next Round
              </button>
            </div>
            <div className="flex gap-x-2">
              <button
                onClick={prevTeam}
                className="text-xl px-3 py-2 rounded-md bg-cyan-500 text-white"
              >
                Prev Team
              </button>
              <button
                onClick={nextTeam}
                className="text-xl px-3 py-2 rounded-md bg-cyan-500 text-white"
              >
                Next Team
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                className="px-3 py-1 border text-white rounded-lg bg-green-500"
                onClick={() => setDuration(20)}
              >
                20
              </button>
              <button
                className="px-3 py-1 border text-white rounded-lg bg-orange-500"
                onClick={() => setDuration(30)}
              >
                30
              </button>
              <button
                className="px-3 py-1 border text-white rounded-lg bg-red-600"
                onClick={() => setDuration(40)}
              >
                40
              </button>
              <button
                className="px-3 py-1 border text-white rounded-lg bg-gray-800"
                onClick={() => setDuration(10)}
              >
                Start
              </button>
              <button
                className="px-3 py-1 border text-white rounded-lg bg-gray-800"
                onClick={() => setDuration(0)}
              >
                Stop
              </button>
              <button
                onClick={() => setBhakti((bhakti) => !bhakti)}
                className="px-3 py-1 border text-white rounded-lg bg-gray-800"
              >
                Bhakti Round
              </button>
              {bhakti && (
                <div className="absolute top-0 left-0 w-screen h-screen bg-gray-400 z-50">
                  <BhaktiComponent
                    roundNumber={roundNumber}
                    setBhakti={setBhakti}
                    key={roundNumber}
                  />
                </div>
              )}
            </div>
            <input
              type="number"
              className="w-40 h-10 px-2 py-1 border-2 border-gray-500 outline-none rounded-md bg-inherit text-gray-900"
              value={duration}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <QuestionCard
          teamNumber={teamNumber}
          setDuration={setDuration}
          round={round}
          roundNumber={roundNumber}
        />
      </section>
      <section
        className={`h-screen w-[15%] ${
          hovered && "w-[50%]"
        } transition-all duration-500 bg-gradient-to-r from-amber-100 via-amber-100 to-amber-200 border-l-4 border-gray-300`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className="w-full text-center text-4xl font-semibold my-3 text-orange-600">
          मोक्ष मार्ग
        </p>
        <Line thickness={1} />
        <div className="w-full flex justify-evenly place-items-center mt-4">
          <div
            className={`relative flex flex-col-reverse h-[80vh] overflow-visible ${
              hovered
                ? "w-2 bg-white bg-opacity-70"
                : "w-0 bg-white bg-opacity-50"
            } rounded-full transition-all duration-500 text-orange-700 text-xl`}
          >
            <p
              className={`${
                hovered ? "w-64 h-10" : "w-0 h-0"
              } absolute bottom bottom-[25%] -left-16 font-semibold overflow-hidden`}
            >
              सम्यकत्व प्राप्ति
            </p>
            <p
              className={`${
                hovered ? "w-64 h-10" : "w-0 h-0"
              } absolute bottom bottom-[50%] -left-16 font-semibold overflow-hidden`}
            >
              प्रमत् अप्रमत् दशा
            </p>
            <p
              className={`${
                hovered ? "w-64 h-10" : "w-0 h-0"
              } absolute bottom bottom-[75%] -left-16 font-semibold overflow-hidden`}
            >
              केवलज्ञान प्राप्ति
            </p>
            <p
              className={`${
                hovered ? "w-64 h-10" : "w-0 h-0"
              } absolute bottom bottom-[95%] -left-16 font-semibold overflow-hidden`}
            >
              मोक्ष
            </p>
          </div>

          <div
            className={`relative flex flex-col-reverse h-[80vh] w-10 overflow-visible ${
              hovered
                ? "bg-orange-500 bg-opacity-100"
                : "bg-orange-400 bg-opacity-50"
            } rounded-full transition-all duration-500`}
          >
            <img
              src={team}
              className={`rounded-full w-10 h-10 p-0.5 relative bottom-[${Math.round(
                (team1Score / 140) * 100
              )}%] transition-all duration-700`}
              alt="Team 1"
            />
          </div>
          <div
            className={`relative flex flex-col-reverse h-[80vh] w-10 overflow-visible ${
              hovered
                ? "bg-orange-500 bg-opacity-100"
                : "bg-orange-400 bg-opacity-50"
            } rounded-full transition-all duration-500`}
          >
            <img
              src={team}
              className={`rounded-full w-10 h-10 p-0.5 relative bottom-[${Math.round(
                (team2Score / 140) * 100
              )}%] transition-all duration-700`}
              alt="Team 1"
            />
          </div>
          <div
            className={`relative flex flex-col-reverse h-[80vh] w-10 overflow-visible ${
              hovered
                ? "bg-orange-500 bg-opacity-100"
                : "bg-orange-400 bg-opacity-50"
            } rounded-full transition-all duration-500`}
          >
            <img
              src={team}
              className={`rounded-full w-10 h-10 p-0.5 relative bottom-[${Math.round(
                (team3Score / 140) * 100
              )}%] transition-all duration-700`}
              alt="Team 1"
            />
          </div>
          <div
            className={`relative flex flex-col-reverse h-[80vh] w-10 overflow-visible ${
              hovered
                ? "bg-orange-500 bg-opacity-100"
                : "bg-orange-400 bg-opacity-50"
            } rounded-full transition-all duration-500`}
          >
            <img
              src={team}
              className={`rounded-full w-10 h-10 p-0.5 relative bottom-[${Math.round(
                (team4Score / 140) * 100
              )}%] transition-all duration-700`}
              alt="Team 1"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 place-items-center justify-center my-2 gap-y-2">
          <button
            onClick={() => increaseScore(teamNumber + 1, 10)}
            className="w-14 px-2 py-1 border rounded-md bg-gray-800 text-white"
          >
            +10
          </button>
          <button
            onClick={() => increaseScore(teamNumber + 1, 15)}
            className="w-14 px-2 py-1 border rounded-md bg-gray-800 text-white"
          >
            +15
          </button>
          <button
            onClick={() => increaseScore(teamNumber + 1, 20)}
            className="w-14 px-2 py-1 border rounded-md bg-gray-800 text-white"
          >
            +20
          </button>
          <button
            onClick={() => increaseScore(teamNumber + 1, -5)}
            className="w-14 px-2 py-1 border rounded-md bg-gray-800 text-white"
          >
            -5
          </button>
          <button
            onClick={() => increaseScore(teamNumber + 1, -10)}
            className="w-14 px-2 py-1 border rounded-md bg-gray-800 text-white"
          >
            -10
          </button>
          <button
            onClick={() => increaseScore(teamNumber + 1, -9999999)}
            className="w-14 px-2 py-1 border rounded-md bg-gray-800 text-white"
          >
            0
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
