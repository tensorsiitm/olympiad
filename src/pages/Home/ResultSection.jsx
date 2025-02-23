import React from "react";

const students = [
  {
    class: "10th",
    topStudents: [
      { rank: 1, name: "Aaryan P", marks: 193, school: "Taluk Samajam HSS Punalur", photo: "Aaryan.jpg" },
      { rank: 2, name: "Athmaj", marks: 192, school: "Mode:Online", photo: "image.png" },
      { rank: 3, name: "Muhammed Rashid", marks: 191, school: "Mode:Online", photo: "image.png" },
    ],
  },
  {
    class: "9th",
    topStudents: [
      { rank: 1, name: "Goutham Sankar", marks: 285, school: "M.T.M Senior Secondary", photo: "gautham.jpg" },
      { rank: 2, name: "Sarang S", marks: 274, school: "St. Thomas Residential School", photo: "saarang.jpg" },
      { rank: 3, name: "S Advika", marks: 272, school: "St. Thomas Residential School", photo: "advika.png" },
    ],
  },
  {
    class: "8th",
    topStudents: [
      { rank: 1, name: "Haeda Fathima", marks: 281, school: "Mode:Online", photo: "haedha.jpg" },
      { rank: 2, name: "K.Harishree ", marks: 270, school: "St. Thomas Residential School", photo: "rank2.jpg" },
      { rank: 3, name: "Abhinav Suresh Kumar", marks: 269, school: "Mode:Online", photo: "abhinav.jpg" },
    ],
  },
];

const ResultSection = () => {
  return (
    <div id="results" className="flex justify-center items-center min-h-screen  p-5">
      <div className="bg-gradient-to-b from-[#0fa487] to-[#053a30]  rounded-3xl w-full max-w-7xl text-white py-10 px-5 shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-10">Jr. OLYMPIAD TENSORS 2025 - RESULTS</h2>
        
        {students.map((group, index) => (
          <div key={index} className="mb-14">
            <h3 className="text-3xl font-semibold text-center text-white mb-8">{group.class} Class Toppers</h3>
            
            <div className="flex flex-col items-center">
              {/* First Prize - Highlighted */}
              <div className="bg-white text-black rounded-lg shadow-xl p-6 w-72 text-center relative transform scale-110">
                <span className="absolute top-2 left-2 bg-yellow-500 text-white px-3 py-1 text-sm font-semibold rounded-full">
                  Rank #1 🏆
                </span>
                <img
                  src={group.topStudents[0].photo}
                  alt={group.topStudents[0].name}
                  className="w-36 h-36 mx-auto rounded-full border-4 border-yellow-500 object-cover"
                />
                <h4 className="text-2xl font-bold mt-4">{group.topStudents[0].name}</h4>
                <p className="text-gray-600 text-lg">{group.topStudents[0].school}</p>
                <p className="text-green-700 font-semibold text-lg">Marks: {group.topStudents[0].marks}</p>
              </div>

              {/* Second & Third Prize - Below First */}
              <div className="flex flex-wrap justify-center gap-8 mt-6">
                {group.topStudents.slice(1).map((student, idx) => (
                  <div key={idx} className="bg-white text-black rounded-lg shadow-md p-5 w-56 text-center relative">
                    <span className={`absolute top-2 left-2 px-3 py-1 text-sm font-semibold rounded-full 
                      ${student.rank === 2 ? "bg-gray-400" : "bg-orange-500"} text-white`}>
                      Rank #{student.rank} {student.rank === 2 ? "🥈" : "🥉"}
                    </span>
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="w-28 h-28 mx-auto rounded-full border-4 border-gray-400 object-cover"
                    />
                    <h4 className="text-lg font-bold mt-3">{student.name}</h4>
                    <p className="text-gray-600 text-sm">{student.school}</p>
                    <p className="text-green-700 font-semibold text-md">Marks: {student.marks}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultSection;
