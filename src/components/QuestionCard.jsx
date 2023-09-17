import React, { useEffect, useState } from "react";
import round1 from "../rounds/round1.json";
import round2 from "../rounds/round2.json";
import round3 from "../rounds/round3.json";
import round4 from "../rounds/round4.json";
import round5 from "../rounds/round5.json";
import round6 from "../rounds/round6.json";
import round7 from "../rounds/round7.json";
import Line from "./Line";

const QuestionCard = ({ teamNumber, setDuration, round, roundNumber }) => {
  const [selected, setSelected] = useState(false);
  const [revealAnswer, setRevelAnswer] = useState(false);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [imageAns, setImgAns] = useState("");

  // const round2Questions = round2;
  // const round3Questions = round3;
  // const round4Questions = round4;
  return (
    <div className="w-full">
      {selected ? (
        <section className="w-full h-[77vh] flex flex-col gap-y-10 py-10 px-10 place-items-center text-gray-700 overflow-y-scroll">
          <p className="text-7xl font-semibold text-center leading-[90px]">
            {roundNumber === 3 ? "Identify The Image" : question}
          </p>
          {roundNumber === 3 && (
            <img
              src={question}
              alt="Question Image"
              className="w-[800px] max-h-[700px]"
            />
          )}
          {revealAnswer && (
            <>
              <Line thickness={1} />
              <p className="text-5xl font-semibold text-center leading-[90px] text-green-600">
                <span className="text-4xl">A.</span>
                {roundNumber !== 3 && answer}
                {roundNumber === 3 && imageAns}
              </p>
              {roundNumber === 3 && (
                <img src={answer} alt="Answer Image" className="w-[800px]" />
              )}
            </>
          )}
          <div className="w-full h-full flex flex-row-reverse place-items-end gap-x-3">
            <button
              onClick={() => setRevelAnswer((revealAnswer) => !revealAnswer)}
              className="text-2xl px-4 py-2 rounded-md bg-green-500 text-white"
            >
              Reveal Answer
            </button>
            <button
              onClick={() => {
                setQuestion(null);
                setAnswer(null);
                setRevelAnswer(false);
                setImgAns("");
                setSelected(false);
                setDuration(0);
              }}
              className="text-2xl px-4 py-2 rounded-md bg-gray-700 text-white"
            >
              Back
            </button>
          </div>
        </section>
      ) : (
        <section className="w-full h-[81.5%] grid grid-cols-4 text-white place-items-center justify-center">
          <div
            onClick={() => {
              if (roundNumber === 3) {
                setQuestion(round[teamNumber].e1.qimg);
                setAnswer(round[teamNumber].e1.aimg);
                setImgAns(round[teamNumber].e1.a);
                setSelected(true);
                setDuration(20);
              } else {
                setQuestion(round[teamNumber].e1.q);
                setAnswer(round[teamNumber].e1.a);
                setSelected(true);
                setDuration(20);
              }
            }}
            className="w-96 h-64 flex flex-col justify-center place-items-center gap-y-4 rounded-2xl border-2 border-white text-6xl font-semibold font-mono hover:scale-105 transition-all cursor-pointer bg-green-500"
          >
            Easy 1<p className=" text-gray-800 text-4xl">20 sec</p>
          </div>
          <div
            onClick={() => {
              if (roundNumber === 3) {
                setQuestion(round[teamNumber].e2.qimg);
                setAnswer(round[teamNumber].e2.aimg);
                setImgAns(round[teamNumber].e2.a);
                setSelected(true);
                setDuration(20);
              } else {
                setQuestion(round[teamNumber].e2.q);
                setAnswer(round[teamNumber].e2.a);
                setSelected(true);
                setDuration(20);
              }
            }}
            className="w-96 h-64 flex flex-col justify-center place-items-center gap-y-4 rounded-2xl border-2 border-white text-6xl font-semibold font-mono hover:scale-105 transition-all cursor-pointer bg-green-500"
          >
            Easy 2<p className=" text-gray-800 text-4xl">20 sec</p>
          </div>
          <div
            onClick={() => {
              if (roundNumber === 3) {
                setQuestion(round[teamNumber].m.qimg);
                setAnswer(round[teamNumber].m.aimg);
                setImgAns(round[teamNumber].m.a);
                setSelected(true);
                setDuration(30);
              } else {
                setQuestion(round[teamNumber].m.q);
                setAnswer(round[teamNumber].m.a);
                setSelected(true);
                setDuration(30);
              }
            }}
            className="w-96 h-64 flex flex-col justify-center place-items-center gap-y-4 rounded-2xl border-2 border-white text-6xl font-semibold font-mono hover:scale-105 transition-all cursor-pointer bg-orange-500"
          >
            Medium
            <p className="text-4xl text-gray-800 ">30 sec</p>
          </div>
          <div
            onClick={() => {
              if (roundNumber === 3) {
                setQuestion(round[teamNumber].h.qimg);
                setAnswer(round[teamNumber].h.aimg);
                setImgAns(round[teamNumber].h.a);
                setSelected(true);
                setDuration(40);
              } else {
                setQuestion(round[teamNumber].h.q);
                setAnswer(round[teamNumber].h.a);
                setSelected(true);
                setDuration(40);
              }
            }}
            className="w-96 h-64 flex flex-col justify-center place-items-center gap-y-4 rounded-2xl border-2 border-white text-6xl font-semibold font-mono hover:scale-105 transition-all cursor-pointer bg-red-600"
          >
            Hard
            <p className="text-4xl text-gray-800 ">40 sec</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default QuestionCard;
