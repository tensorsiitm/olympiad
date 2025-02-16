import React, { useState, useEffect } from "react";

const StudentSearch = () => {
  const [students, setStudents] = useState([]);
  const [studentID, setStudentID] = useState("");
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const SHEET_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSuunt0ZgVnnEDv3QHmzyAglqX5DFulp_fR7LC5J20YNhAvQEsTF9m93m5mXA5Y31dxycDPAadGXvdy/pub?output=csv";

  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        const response = await fetch(SHEET_URL);
        const text = await response.text();
        const rows = text.split("\n").map((row) => row.split(","));
        const headers = rows[0].map((h) => h.trim());
        const data = rows.slice(1).map((row) => {
          return headers.reduce((obj, header, index) => {
            obj[header] = row[index]?.trim() || "";
            return obj;
          }, {});
        });

        setStudents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSheetData();
  }, []);

  const handleSearch = () => {
    if (!name || !studentClass || !studentID) {
      setError("All fields are required.");
      return;
    }
    setError("");
    setLoading(true);

    const student = students.find(
      (s) => s["Student ID"]?.trim() === studentID.trim()
    );

    setTimeout(() => {
      setSelectedStudent(student || null);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="flex flex-col font-sans items-center justify-center min-h-screen bg-green-100 p-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-6 border border-green-300">
        <h2 className="text-2xl font-semibold text-green-700 text-center">
          TENSORS JR.OLYMPIAD RESULTS
        </h2>

        {/* Input Fields */}
        <div className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Enter Class"
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
            className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Enter Student ID"
            value={studentID}
            onChange={(e) => setStudentID(e.target.value)}
            className="student-id w-full p-3 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
        >
          Search
        </button>

        {/* Loading Message */}
        {loading && <p className="text-center text-gray-600 mt-3">Loading...</p>}

        {/* Display Result */}
        {selectedStudent ? (
  <div className="mt-6 p-4 border border-green-300 rounded-lg shadow-md bg-green-50">
    <h3 className="text-xl font-semibold text-green-800">
      {selectedStudent["Name of Student"]?.toUpperCase()}
    </h3>

    <p className="text-green-700">
      <strong>Student ID:</strong> {selectedStudent["Student ID"]}
    </p>
    <p className="text-green-700">
      <strong>Class:</strong> {selectedStudent["Class"]}
    </p>
    <p className="text-green-700">
      <strong>MODE OF EXAMINATION:</strong> {selectedStudent["Mode"]}
    </p>
    <p className="text-green-700">
      <strong>Mark:</strong> {selectedStudent["Mark"]}
    </p>
    <p className="text-green-700">
      <strong>OVERALL RANK:</strong> {selectedStudent["RANK"]}
    </p>

    {/* Default Success Message */}
    <div className="mt-4 p-3 bg-green-200 text-green-800 font-semibold text-center rounded-lg shadow-md">
      🎉 Congratulations! You have secured a qualifying mark in this examination. 🎉
    </div>

    {/* Special Message for Top 3 Ranks */}
    {["1", "2", "3"].includes(selectedStudent["RANK"]) && (
      <div className="mt-4 p-3 bg-yellow-200 text-yellow-900 font-bold text-center rounded-lg shadow-md">
        🏆 Exceptional Performance! You ranked {selectedStudent["RANK"]}.  
        You did an excellent job! Keep up the great work! 🚀
      </div>
    )}
  </div>
) : (
  studentID &&
  !loading && (
    <p className="text-red-500 text-center mt-3">
      Student not found. Please check the Student ID.
    </p>
  )
)}

      </div>
    </div>
  );
};

export default StudentSearch;
