import React, { useState, useEffect } from "react";

const BhaktiComponent = ({ roundNumber, setBhakti }) => {
  const [img, setImg] = useState(false);
  const [positions, setPositions] = useState([
    { top: 45, left: 45 },
    { top: 45, left: 45 },
    { top: 45, left: 45 },
    { top: 45, left: 45 },
    { top: 45, left: 45 },
    { top: 45, left: 45 },
    { top: 45, left: 45 },
    { top: 45, left: 45 },
    { top: 45, left: 45 },
    { top: 45, left: 45 },
  ]);

  const shuffle = () => {
    const randomPositions = [];

    const minGap = 5; // Minimum gap between coordinates

    for (let i = 0; i < 10; i++) {
      let top, left;
      do {
        top = Math.random() * (90 - 5) + 5;
        left = Math.random() * (90 - 5) + 5;
      } while (
        randomPositions.some(
          ({ top: prevTop, left: prevLeft }) =>
            Math.abs(prevTop - top) < minGap ||
            Math.abs(prevLeft - left) < minGap
        )
      );

      randomPositions.push({ top, left });
    }

    setPositions(randomPositions);
  };

  useEffect(() => {
    setTimeout(() => {
      shuffle();
    }, 500);
  }, []);

  const shuffled = [
    ["अमर", "वीतराग", "में", "तेरी", "धन्य", "कहानी", "वाणी", "जग", "धन्य"],
    [
      "थारा",
      "गयो",
      "रंगमा",
      "प्रभु",
      "ही",
      "रंगी",
      "रंगमा",
      "रे",
      "रंगी",
      "रंगमा",
    ],
    ["प्रभुवार", "तुम्हारा", "रोम", "नाम", "से", "निकले", "रोम"],
    [
      "खरे",
      "मार्ग",
      "की",
      "मुक्ति",
      "गुंडे",
      "फूलडा",
      "कुंदकुंद",
      "सीमंधर",
      "एनी",
    ],
    [
      "मैं",
      "हूं",
      "पर",
      "की",
      "ज्ञानानंद",
      "स्वयं",
      "स्वभावी",
      "पूर्ण",
      "अपने",
      "में",
    ],
    [
      "वनमें",
      "जाके",
      "ऐसे",
      "राग",
      "देखे",
      "मैं",
      "मुनीवर",
      "द्वेष",
      "तन",
      "नहीं",
    ],
    [
      "वनमें",
      "जाके",
      "ऐसे",
      "राग",
      "देखे",
      "मैं",
      "मुनीवर",
      "द्वेष",
      "तन",
      "नहीं",
    ],
  ];

  return (
    <div>
      <div className="flex">
        <button
          onClick={() => setImg((img) => !img)}
          className="px-3 py-1 border text-white rounded-lg bg-orange-500"
        >
          Show Bhakti
        </button>
        <button
          onClick={shuffle}
          className="px-3 py-1 border text-white rounded-lg bg-orange-500"
        >
          Shuffle
        </button>
        <button
          onClick={() => setBhakti(false)}
          className="px-3 py-1 border text-white rounded-lg bg-orange-500"
        >
          Close
        </button>
        <p>{roundNumber}</p>
      </div>
      {!img && (
        <div className="">
          {shuffled[roundNumber - 1].map((word, index) => (
            <p
              className="absolute text-5xl p-3 border text-white rounded-lg bg-amber-600 transition-all duration-[0.75s]"
              style={{
                top: `${positions[index]?.top}%`,
                left: `${positions[index]?.left}%`,
              }}
              key={index}
            >
              {word}
            </p>
          ))}
        </div>
      )}
      {img && (
        <img
          src={`/bhakti/${roundNumber}.jpeg`}
          className="w-screen h-screen"
        />
      )}
    </div>
  );
};

export default BhaktiComponent;
