// import React, { useState } from "react";

// const Analyzer = () => {
//   const [text, setText] = useState("");
//   const [stats, setStats] = useState({
//     wordCount: 0,
//     charCount: 0,
//     charCountWithoutSpaces: 0,
//     paragraphCount: 0,
//     sentenceCount: 0,
//     spacesCount: 0,
//     runTime: 0,
//   });

//   const analyzeText = () => {
//     const startTime = performance.now(); // Start runtime measurement

//     const trimmedText = text.trim();

//     // Character count (with spaces)
//     const charCount = trimmedText.length;
//     // Character count (without spaces)
//     const charCountWithoutSpaces = trimmedText.replace(/\s/g, "").length;

//     // Word count
//     const wordCount =
//       trimmedText.length > 0 ? trimmedText.split(/\s+/).length : 0;

//     // Paragraph count (split on newlines, filter out empty ones)
//     const paragraphCount = trimmedText.replace(/\n$/gm, "").split(/\n/).length; //.split(/\n+/).filter(Boolean).length;

//     // Sentence count (split on . ? ! and remove empty results)
//     const sentenceCount = trimmedText.match(/[^.!?]+[.!?]+["']?\s*/g).length; //.split(/[.!?]+/).filter(Boolean).length;

//     const endTime = performance.now(); // End runtime measurement

//     const runTime = (endTime - startTime).toFixed(4); // Time in milliseconds (ms)

//     const spacesCount = trimmedText.match(/ /g).length;

//     setStats({
//       wordCount,
//       charCount,
//       charCountWithoutSpaces,
//       paragraphCount,
//       sentenceCount,
//       spacesCount,
//       runTime,
//     });
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
//       <h2>Text Analyzer</h2>
//       <textarea
//         rows="10"
//         cols="60"
//         placeholder="Type or paste your text here..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         style={{ width: "100%", padding: "10px" }}
//       />
//       <button
//         onClick={analyzeText}
//         style={{ marginTop: "10px", padding: "10px 20px" }}
//       >
//         Analyze Text
//       </button>

//       <h3>Results:</h3>
//       <ul>
//         <li>
//           <strong>Words:</strong> {stats.wordCount}
//         </li>
//         <li>
//           <strong>Characters:</strong> {stats.charCount}
//         </li>
//         <li>
//           <strong>Characters Without Spaces:</strong>{" "}
//           {stats.charCountWithoutSpaces}
//         </li>
//         <li>
//           <strong>Paragraphs:</strong> {stats.paragraphCount}
//         </li>
//         <li>
//           <strong>Sentences:</strong> {stats.sentenceCount}
//         </li>
//         <li>
//           <strong>Spaces:</strong> {stats.spacesCount}
//         </li>
//         <li>
//           <strong>Run Time:</strong> {stats.runTime} ms
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Analyzer;

//////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";

// const Analyzer = () => {
//   const [text, setText] = useState("");
//   const [stats, setStats] = useState({
//     wordCount: 0,
//     charCount: 0,
//     charCountWithoutSpaces: 0,
//     paragraphCount: 0,
//     sentenceCount: 0,
//     spacesCount: 0,
//     arabicWordCount: 0,
//     arabicCharCount: 0,
//     runTime: 0,
//   });

//   const analyzeText = () => {
//     const startTime = performance.now(); // Start runtime measurement

//     const trimmedText = text.trim();

//     // Character count (with spaces)
//     const charCount = trimmedText.length;
//     // Character count (without spaces)
//     const charCountWithoutSpaces = trimmedText.replace(/\s/g, "").length;

//     // Word count
//     const wordCount =
//       trimmedText.length > 0 ? trimmedText.split(/\s+/).length : 0;

//     // Paragraph count
//     const paragraphCount = trimmedText.replace(/\n$/gm, "").split(/\n/).length;

//     // Sentence count
//     const sentenceMatch = trimmedText.match(/[^.!?]+[.!?]+["']?\s*/g);
//     const sentenceCount = sentenceMatch ? sentenceMatch.length : 0;

//     // Spaces count
//     const spacesMatch = trimmedText.match(/ /g);
//     const spacesCount = spacesMatch ? spacesMatch.length : 0;

//     // Arabic characters count
//     const arabicChars = trimmedText.match(/[\u0600-\u06FF]/g);
//     const arabicCharCount = arabicChars ? arabicChars.length : 0;

//     // Arabic word count
//     const arabicWords = trimmedText
//       .split(/\s+/)
//       .filter((word) => /[\u0600-\u06FF]/.test(word));
//     const arabicWordCount = arabicWords.length;

//     const endTime = performance.now(); // End runtime measurement

//     const runTime = (endTime - startTime).toFixed(4); // Time in milliseconds (ms)

//     // Update state
//     setStats({
//       wordCount,
//       charCount,
//       charCountWithoutSpaces,
//       paragraphCount,
//       sentenceCount,
//       spacesCount,
//       arabicWordCount,
//       arabicCharCount,
//       runTime,
//     });
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
//       <h2>Text Analyzer (English & Arabic)</h2>
//       <textarea
//         rows="10"
//         cols="60"
//         placeholder="Type or paste your text here..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         style={{ width: "100%", padding: "10px" }}
//       />
//       <button
//         onClick={analyzeText}
//         style={{ marginTop: "10px", padding: "10px 20px" }}
//       >
//         Analyze Text
//       </button>

//       <h3>Results:</h3>
//       <ul>
//         <li>
//           <strong>Words:</strong> {stats.wordCount}
//         </li>
//         <li>
//           <strong>Characters (with spaces):</strong> {stats.charCount}
//         </li>
//         <li>
//           <strong>Characters (without spaces):</strong>{" "}
//           {stats.charCountWithoutSpaces}
//         </li>
//         <li>
//           <strong>Paragraphs:</strong> {stats.paragraphCount}
//         </li>
//         <li>
//           <strong>Sentences:</strong> {stats.sentenceCount}
//         </li>
//         <li>
//           <strong>Spaces:</strong> {stats.spacesCount}
//         </li>
//         <li>
//           <strong>Arabic Words:</strong> {stats.arabicWordCount}
//         </li>
//         <li>
//           <strong>Arabic Characters:</strong> {stats.arabicCharCount}
//         </li>
//         <li>
//           <strong>Run Time:</strong> {stats.runTime} ms
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Analyzer;

//////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";

// const Analyzer = () => {
//   const [text, setText] = useState("");
//   const [language, setLanguage] = useState("en"); // Default language
//   const [stats, setStats] = useState({
//     wordCount: 0,
//     charCount: 0,
//     charCountWithoutSpaces: 0,
//     paragraphCount: 0,
//     sentenceCount: 0,
//     spacesCount: 0,
//     arabicWordCount: 0,
//     arabicCharCount: 0,
//     runTime: 0,
//   });

//   const labels = {
//     en: {
//       words: "Words",
//       characters: "Characters (with spaces)",
//       charactersWithoutSpaces: "Characters (without spaces)",
//       paragraphs: "Paragraphs",
//       sentences: "Sentences",
//       spaces: "Spaces",
//       arabicWords: "Arabic Words",
//       arabicChars: "Arabic Characters",
//       runTime: "Run Time",
//       analyze: "Analyze Text",
//       title: "Text Analyzer (English & Arabic)",
//     },
//     ar: {
//       words: "عدد الكلمات",
//       characters: "عدد الأحرف (بما في ذلك المسافات)",
//       charactersWithoutSpaces: "عدد الأحرف (بدون مسافات)",
//       paragraphs: "عدد الفقرات",
//       sentences: "عدد الجمل",
//       spaces: "عدد المسافات",
//       arabicWords: "عدد الكلمات العربية",
//       arabicChars: "عدد الأحرف العربية",
//       runTime: "مدة التشغيل",
//       analyze: "تحليل النص",
//       title: "محلل النص (العربية والإنجليزية)",
//     },
//   };

//   const analyzeText = () => {
//     const startTime = performance.now(); // Start runtime measurement

//     const trimmedText = text.trim();

//     // Character count (with spaces)
//     const charCount = trimmedText.length;
//     // Character count (without spaces)
//     const charCountWithoutSpaces = trimmedText.replace(/\s/g, "").length;

//     // Word count
//     const wordCount =
//       trimmedText.length > 0 ? trimmedText.split(/\s+/).length : 0;

//     // Paragraph count
//     const paragraphCount = trimmedText
//       .replace(/\n$/gm, "")
//       .split(/\n/)
//       .filter(Boolean).length;

//     // Sentence count
//     const sentenceMatch = trimmedText.match(/[^.!?]+[.!?]+["']?\s*/g);
//     const sentenceCount = sentenceMatch ? sentenceMatch.length : 0;

//     // Spaces count
//     const spacesMatch = trimmedText.match(/ /g);
//     const spacesCount = spacesMatch ? spacesMatch.length : 0;

//     // Arabic characters count
//     const arabicChars = trimmedText.match(/[\u0600-\u06FF]/g);
//     const arabicCharCount = arabicChars ? arabicChars.length : 0;

//     // Arabic word count
//     const arabicWords = trimmedText
//       .split(/\s+/)
//       .filter((word) => /[\u0600-\u06FF]/.test(word));
//     const arabicWordCount = arabicWords.length;

//     const endTime = performance.now(); // End runtime measurement
//     const runTime = (endTime - startTime).toFixed(4); // Time in milliseconds (ms)

//     // Update state
//     setStats({
//       wordCount,
//       charCount,
//       charCountWithoutSpaces,
//       paragraphCount,
//       sentenceCount,
//       spacesCount,
//       arabicWordCount,
//       arabicCharCount,
//       runTime,
//     });
//   };

//   return (
//     <div
//       style={{
//         padding: "20px",
//         maxWidth: "600px",
//         margin: "0 auto",
//         direction: language === "ar" ? "rtl" : "ltr",
//         textAlign: language === "ar" ? "right" : "left",
//       }}
//     >
//       <h2>{labels[language].title}</h2>
//       <textarea
//         rows="10"
//         cols="60"
//         placeholder="Type or paste your text here..."
//         value={text}
//         onChange={(e) => {
//           const inputText = e.target.value;
//           setText(inputText);
//           // Detect Arabic language dynamically
//           if (/[\u0600-\u06FF]/.test(inputText)) {
//             setLanguage("ar");
//           } else {
//             setLanguage("en");
//           }
//         }}
//         style={{ width: "100%", padding: "10px", resize: "vertical" }}
//       />
//       <button
//         onClick={analyzeText}
//         style={{ marginTop: "10px", padding: "10px 20px", cursor: "pointer" }}
//       >
//         {labels[language].analyze}
//       </button>

//       <h3>{language === "ar" ? "النتائج" : "Results"}:</h3>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         <li>
//           <strong>{labels[language].words}:</strong> {stats.wordCount}
//         </li>
//         <li>
//           <strong>{labels[language].characters}:</strong> {stats.charCount}
//         </li>
//         <li>
//           <strong>{labels[language].charactersWithoutSpaces}:</strong>{" "}
//           {stats.charCountWithoutSpaces}
//         </li>
//         <li>
//           <strong>{labels[language].paragraphs}:</strong> {stats.paragraphCount}
//         </li>
//         <li>
//           <strong>{labels[language].sentences}:</strong> {stats.sentenceCount}
//         </li>
//         <li>
//           <strong>{labels[language].spaces}:</strong> {stats.spacesCount}
//         </li>
//         <li>
//           <strong>{labels[language].arabicWords}:</strong>{" "}
//           {stats.arabicWordCount}
//         </li>
//         <li>
//           <strong>{labels[language].arabicChars}:</strong>{" "}
//           {stats.arabicCharCount}
//         </li>
//         <li>
//           <strong>{labels[language].runTime}:</strong> {stats.runTime} ms
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Analyzer;


import React, { useState } from "react";

const Analyzer = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("en"); // Default language is English
  const [stats, setStats] = useState({
    wordCount: 0,
    charCount: 0,
    charCountWithoutSpaces: 0,
    paragraphCount: 0,
    sentenceCount: 0,
    spacesCount: 0,
    arabicWordCount: 0,
    arabicCharCount: 0,
    runTime: 0,
  });

  // Labels for both languages
  const labels = {
    en: {
      words: "Words",
      characters: "Characters (with spaces)",
      charactersWithoutSpaces: "Characters (without spaces)",
      paragraphs: "Paragraphs",
      sentences: "Sentences",
      spaces: "Spaces",
      arabicWords: "Arabic Words",
      arabicChars: "Arabic Characters",
      runTime: "Run Time",
      analyze: "Analyze Text",
      title: "Text Analyzer (English & Arabic)",
      switch: "Switch to Arabic",
    },
    ar: {
      words: "عدد الكلمات",
      characters: "عدد الأحرف (بما في ذلك المسافات)",
      charactersWithoutSpaces: "عدد الأحرف (بدون مسافات)",
      paragraphs: "عدد الفقرات",
      sentences: "عدد الجمل",
      spaces: "عدد المسافات",
      arabicWords: "عدد الكلمات العربية",
      arabicChars: "عدد الأحرف العربية",
      runTime: "مدة التشغيل",
      analyze: "تحليل النص",
      title: "محلل النص (العربية والإنجليزية)",
      switch: "التبديل إلى الإنجليزية",
    },
  };

//   // Analyze text function
//   const analyzeText = () => {
//     const startTime = performance.now(); // Start timer

//     const trimmedText = text.trim();

//     const charCount = trimmedText.length;
//     const charCountWithoutSpaces = trimmedText.replace(/\s/g, "").length;
//     const wordCount =
//       trimmedText.length > 0 ? trimmedText.split(/\s+/).length : 0;
//     const paragraphCount = trimmedText
//       .replace(/\n$/gm, "")
//       .split(/\n/)
//       .filter(Boolean).length;
//     const sentenceMatch = trimmedText.match(/[^.!?]+[.!?]+["']?\s*/g);
//     const sentenceCount = sentenceMatch ? sentenceMatch.length : 0;
//     const spacesMatch = trimmedText.match(/ /g);
//     const spacesCount = spacesMatch ? spacesMatch.length : 0;
//     const arabicChars = trimmedText.match(/[\u0600-\u06FF]/g);
//     const arabicCharCount = arabicChars ? arabicChars.length : 0;
//     const arabicWords = trimmedText
//       .split(/\s+/)
//       .filter((word) => /[\u0600-\u06FF]/.test(word));
//     const arabicWordCount = arabicWords.length;

//     const endTime = performance.now(); // End timer
//     const runTime = (endTime - startTime).toFixed(4); // Milliseconds

//     // Update state
//     setStats({
//       wordCount,
//       charCount,
//       charCountWithoutSpaces,
//       paragraphCount,
//       sentenceCount,
//       spacesCount,
//       arabicWordCount,
//       arabicCharCount,
//       runTime,
//     });
//   };

// const analyzeText = () => {
//   const startTime = performance.now(); // Start runtime measurement

//   const trimmedText = text.trim();

//   let charCount = 0;
//   let charCountWithoutSpaces = 0;
//   let wordCount = 0;
//   let paragraphCount = 0;
//   let sentenceCount = 0;
//   let spacesCount = 0;
//   let arabicWordCount = 0;
//   let arabicCharCount = 0;

//   // Paragraph count
//   paragraphCount = trimmedText
//     .replace(/\n$/gm, "")
//     .split(/\n/)
//     .filter(Boolean).length;

//   // Sentence count (basic detection)
//   const sentenceMatch = trimmedText.match(/[^.!?]+[.!?]+["']?\s*/g);
//   sentenceCount = sentenceMatch ? sentenceMatch.length : 0;

//   // Spaces count
//   const spacesMatch = trimmedText.match(/ /g);
//   spacesCount = spacesMatch ? spacesMatch.length : 0;

//   // Counting based on selected language
//   if (language === "en") {
//     // English Characters and Words Only
//     const englishChars = trimmedText; //.match(/[a-zA-Z]/g);
//     charCount = englishChars ? englishChars.length : 0;

    

//     const englishWords = trimmedText.split(/\s+/); //.match(/\b[a-zA-Z]+\b/g);
//     wordCount = englishWords ? englishWords.length : 0;

//     // Characters without spaces (count only English letters, exclude spaces)
//     charCountWithoutSpaces = charCount;
//   }

//   if (language === "ar") {
//     // Arabic Characters and Words Only
//     const arabicChars = trimmedText.match(/[\u0600-\u06FF]/g);
//     arabicCharCount = arabicChars ? arabicChars.length : 0;

//     const arabicWords = trimmedText.match(/[\u0600-\u06FF]+/g);
//     arabicWordCount = arabicWords ? arabicWords.length : 0;

//     // Set total character counts only for Arabic
//     charCount = arabicCharCount;
//     wordCount = arabicWordCount;
//     charCountWithoutSpaces = arabicChars ? arabicChars.length : 0;
//   }

//   const endTime = performance.now(); // End runtime measurement
//   const runTime = (endTime - startTime).toFixed(4); // Time in milliseconds (ms)

//   // Update state
//   setStats({
//     wordCount,
//     charCount,
//     charCountWithoutSpaces,
//     paragraphCount,
//     sentenceCount,
//     spacesCount,
//     arabicWordCount,
//     arabicCharCount,
//     runTime,
//   });
// };
const analyzeText = (inputText) => {
  const startTime = performance.now(); // Start measuring time

  const trimmedText = inputText.trim();

  // Character count (with spaces)
  const charCount = trimmedText.length;
  // Character count (without spaces)
  const charCountWithoutSpaces = trimmedText.replace(/\s/g, "").length;
  // Word count
  const wordCount =
    trimmedText.length > 0 ? trimmedText.split(/\s+/).length : 0;
  // Paragraph count
  const paragraphCount = trimmedText
    .replace(/\n$/gm, "")
    .split(/\n/)
    .filter(Boolean).length;
  // Sentence count
  const sentenceMatch = trimmedText.match(/[^.!?]+[.!?]+["']?\s*/g);
  const sentenceCount = sentenceMatch ? sentenceMatch.length : 0;
  // Spaces count
  const spacesMatch = trimmedText.match(/ /g);
  const spacesCount = spacesMatch ? spacesMatch.length : 0;
  // Arabic word and char count
  const arabicChars = trimmedText.match(/[\u0600-\u06FF]/g);
  const arabicCharCount = arabicChars ? arabicChars.length : 0;
  const arabicWords = trimmedText
    .split(/\s+/)
    .filter((word) => /[\u0600-\u06FF]/.test(word));
  const arabicWordCount = arabicWords.length;

  const endTime = performance.now(); // End measuring time
  const runTime = (endTime - startTime).toFixed(4); // Time in milliseconds

  // Update stats
  setStats({
    wordCount,
    charCount,
    charCountWithoutSpaces,
    paragraphCount,
    sentenceCount,
    spacesCount,
    arabicWordCount,
    arabicCharCount,
    runTime,
  });
};



  // Toggle language function
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ar" : "en"));
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        direction: language === "ar" ? "rtl" : "ltr",
        textAlign: language === "ar" ? "right" : "left",
      }}
    >
      <h2>{labels[language].title}</h2>

      {/* Language Switch Button */}
      <button
        onClick={toggleLanguage}
        style={{
          padding: "8px 16px",
          marginBottom: "10px",
          cursor: "pointer",
          float: language === "ar" ? "left" : "right",
        }}
      >
        {labels[language].switch}
      </button>

      {/* Textarea for input */}
      <textarea
        rows="10"
        cols="60"
        placeholder={
          language === "ar"
            ? "أدخل نصك هنا..."
            : "Type or paste your text here..."
        }
        value={text}
        // onChange={(e) => setText(e.target.value)} // Just set text, no auto language detection
        onChange={(e) => {
          setText(e.target.value); // Update text state
          analyzeText(e.target.value); // Run analysis with the new value
        }}
        style={{
          width: "100%",
          padding: "10px",
          resize: "vertical",
          marginBottom: "10px",
        }}
      />

      {/* Analyze Button */}
      <button
        onClick={analyzeText}
        style={{ marginTop: "10px", padding: "10px 20px", cursor: "pointer" }}
      >
        {labels[language].analyze}
      </button>

      {/* Results */}
      <h3>{language === "ar" ? "النتائج" : "Results"}:</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <strong>{labels[language].words}:</strong> {stats.wordCount}
        </li>
        <li>
          <strong>{labels[language].characters}:</strong> {stats.charCount}
        </li>
        <li>
          <strong>{labels[language].charactersWithoutSpaces}:</strong>{" "}
          {stats.charCountWithoutSpaces}
        </li>
        <li>
          <strong>{labels[language].paragraphs}:</strong> {stats.paragraphCount}
        </li>
        <li>
          <strong>{labels[language].sentences}:</strong> {stats.sentenceCount}
        </li>
        <li>
          <strong>{labels[language].spaces}:</strong> {stats.spacesCount}
        </li>
        {/* <li>
          <strong>{labels[language].arabicWords}:</strong>{" "}
          {stats.arabicWordCount}
        </li>
        <li>
          <strong>{labels[language].arabicChars}:</strong>{" "}
          {stats.arabicCharCount}
        </li> */}
        <li>
          <strong>{labels[language].runTime}:</strong> {stats.runTime} ms
        </li>
      </ul>
    </div>
  );
};

export default Analyzer;
