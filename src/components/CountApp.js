import React, { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  // IconButton,
  Typography,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
// import LanguageIcon from "@mui/icons-material/Language";

const CountApp = ({ language }) => {
  const [text, setText] = useState("");
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
  const [keywordStats, setKeywordStats] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // You can adjust this

  // Labels for both languages
  const labels = {
    en: {
      words: "Words",
      characters: "Characters",
      charactersWithoutSpaces: "Characters (without spaces)",
      paragraphs: "Paragraphs",
      sentences: "Sentences",
      spaces: "Spaces",
      runTime: "Run Time",
      title: "Word Counter",
    },
    ar: {
      words: "عدد الكلمات",
      characters: "عدد الأحرف",
      charactersWithoutSpaces: "عدد الأحرف (بدون مسافات)",
      paragraphs: " الفقرات",
      sentences: " الجمل",
      spaces: " المسافات",
      runTime: "مدة التشغيل",
      title: "عداد الكلمات",
    },
  };

  const analyzeText = (inputText) => {
    const startTime = performance.now(); // Start measuring time

    const trimmedText = inputText; //.trim();

    // Character count (with spaces)
    const charCount = trimmedText.length;

    // Character count (without spaces)
    const charCountWithoutSpaces = trimmedText.replace(/\s/g, "").length;

    // Word count
    // const wordCount =
    //   trimmedText.length > 0 ? trimmedText.split(/\s+/).length : 0;
    const trimmedTextO = trimmedText.trim();
    // const wordCount =
    //   trimmedTextO.length > 0
    //     ? trimmedTextO.split(/[^\p{L}\p{N}]+/u).filter(Boolean).length
    //     : 0;
    // const wordCount =
    //   trimmedTextO.length > 0
    //     ? trimmedTextO.split(/[^-\w\u0600-\u06FF]+/u).filter(Boolean).length
    //     : 0;
    // const wordCount =
    //   trimmedTextO.length > 0
    //     ? trimmedTextO.split(/[^\p{L}\p{N}_-]+/u).filter(Boolean).length
    //     : 0;
    const wordCount =
      trimmedTextO.length > 0
        ? trimmedTextO
            .split(/\s+/) // Split by spaces/newlines
            .filter(Boolean) // Remove empty
            .filter((word) => /[\p{L}\p{N}]/u.test(word)).length // Keep if contains letters or digits
        : 0;

    // Paragraph count
    const paragraphCount = trimmedText
      .replace(/\n$/gm, "")
      .split(/\n/)
      .filter(Boolean).length;

    // Sentence count
    // const sentenceMatch = trimmedText.match(/[^.!?]+[.!?]+["']?\s*/g); // .split(". "); //.match(/[^.!?]+[.!?]+["']?\s*/g);
    // const sentenceCount = sentenceMatch ? sentenceMatch.length : 0;

    // const sentenceMatch = trimmedTextO
    // .match(
    //   /[^.!?\n]+(?:[.!?]+(?:['")\]]+)?|\n|$)/g
    // );
    // // .match(
    // //   /[^.!?\\n]+(?:[.!?]+(?:['")\\]]+)?)(?=\s|$)/g
    // // );
    // const sentenceCount = sentenceMatch ? sentenceMatch.length : 0;

    // const sentenceMatch = trimmedText.match(
    //   /[^.!?]*[\p{L}\p{N}]+[^.!?]*[.!?]+(?:['")\]]+)?/gu
    // );
    // const sentenceCount = sentenceMatch ? sentenceMatch.length : 0;

    // const sentenceMatch = trimmedText.match(/[^.]+(?:\.(?=\s|$))/g);
    // const sentenceCount = sentenceMatch
    //   ? sentenceMatch.filter((s) => s.trim().length > 0).length
    //   : 0;

    // // Match sentences ending with a period
    // let sentenceMatch = trimmedText.match(/\b[^.]+?\.(?=\s|$)/g) || [];

    // // Trim the text to check for remaining content
    // const remainingText = trimmedText.replace(/\b[^.]+?\.(?=\s|$)/g, "").trim();

    // // Check if there's leftover meaningful content (contains letters/numbers)
    // if (remainingText.length > 0 && /[\p{L}\p{N}]/u.test(remainingText)) {
    //   sentenceMatch.push(remainingText); // Count it as a sentence
    // }

    // const sentenceCount = sentenceMatch.length;

    // const sentenceMatch = trimmedText.match(/[^.!?]*[.!?]+(?:['")\]]+)?/gu);
    // const sentenceCount = sentenceMatch ? sentenceMatch.length : 0;

    // // Step 1: Match sentences that end properly with . ! ? and followed by space, end, or newline
    // let sentenceMatch =
    //   trimmedText.match(/[^.!?\n]*[\p{L}\p{N}]+[^.!?\n]*[.!?](?=\s|$|\n)/gu) ||
    //   [];

    // {/*start lines */}
    // // Step 2: Remove matched sentences from text
    // let remainingText = trimmedText
    //   .replace(/[^.!?\n]*[\p{L}\p{N}]+[^.!?\n]*[.!?](?=\s|$|\n)/gu, "")
    //   .trim();

    // // Step 3: Handle remaining lines separated by newlines as sentences
    // const remainingLines = remainingText
    //   .split(/\n+/)
    //   .map((line) => line.trim())
    //   .filter((line) => /[\p{L}\p{N}]/u.test(line));

    // // Add these lines to sentence count if they are meaningful
    // sentenceMatch.push(...remainingLines);

    // // ✅ Final sentence count
    // const sentenceCount = sentenceMatch.length;
    // {/* end  lines */}

    // {/*start lines */}
    // Step 1: Match sentences ending properly with . ! ?
    let sentenceMatch =
      trimmedText.match(/[^.!?\n]*[\p{L}\p{N}]+[^.!?\n]*[.!?](?=\s|$|\n)/gu) ||
      [];

    // Step 2: Remove matched sentences to analyze leftover
    let remainingText = trimmedText
      .replace(/[^.!?\n]*[\p{L}\p{N}]+[^.!?\n]*[.!?](?=\s|$|\n)/gu, "")
      .trim();

    // Step 3: Split remaining text by newlines
    const remainingLines = remainingText
      .split(/\n+/) // Split by newline
      .map((line) => line.trim()) // Trim each line
      .filter(
        (line) =>
          line.length > 0 && // Not empty
          (/[\p{L}\p{N}]/u.test(line) || // Contains letters or digits
            /^[^a-zA-Z0-9\u0600-\u06FF]+$/.test(line)) // OR only symbols
      );

    // Step 4: Add remaining lines to sentence count
    sentenceMatch.push(...remainingLines);

    // ✅ Final sentence count
    const sentenceCount = sentenceMatch.length;

    // {/* end  lines */}

    // Spaces count
    const spacesMatch = trimmedText.match(/ /g);
    const spacesCount = spacesMatch ? spacesMatch.length : 0;
    // // Arabic word and char count
    // const arabicChars = trimmedText.match(/[\u0600-\u06FF]/g);
    // const arabicCharCount = arabicChars ? arabicChars.length : 0;
    // const arabicWords = trimmedText
    //   .split(/\s+/)
    //   .filter((word) => /[\u0600-\u06FF]/.test(word));
    // const arabicWordCount = arabicWords.length;

    // ✅ Count word frequency (keywords)
    const wordFrequency = countWordFrequency(trimmedText);

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
      // arabicWordCount,
      // arabicCharCount,
      runTime,
    });

    // ✅ Set the keyword stats for the table
    setKeywordStats(wordFrequency);
  };

  // const countWordFrequency = (text) => {
  //   const words = text
  //     .toLowerCase() // Make it case-insensitive
  //     .match(/[\p{L}\p{N}_-]+/gu); // Match words (letters, numbers, underscores, hyphens)

  //   const wordCounts = {};

  //   if (words) {
  //     words.forEach((word) => {
  //       wordCounts[word] = (wordCounts[word] || 0) + 1; // Count word occurrences
  //     });
  //   }

  //   // Convert object to array and sort descending by count
  //   return Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);
  // };

  const countWordFrequency = (text) => {
    const words = text
      .toLowerCase() // Case insensitive
      .match(/[\p{L}\p{N}_-]+/gu); // Words with letters, digits, _ and -

    const wordCounts = {};

    if (words) {
      words.forEach((word) => {
        wordCounts[word] = (wordCounts[word] || 0) + 1; // Count each word
      });
    }

    const totalWords = words ? words.length : 0;

    // Convert to array and calculate percentage
    return Object.entries(wordCounts)
      .map(([word, count]) => [
        word,
        count,
        ((count / totalWords) * 100).toFixed(2),
      ]) // [word, count, percentage]
      .sort((a, b) => b[1] - a[1]); // Sort by count descending
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        direction: language === "ar" ? "rtl" : "ltr",
        textAlign: language === "ar" ? "right" : "left",
      }}
    >
      <Typography
        variant="h3"
        component="div"
        sx={{
          flexGrow: 1,
          fontWeight: "bold",
          mt: 6,
          mb: 4,
          textAlign: "center",
          color: "#031B29",
        }}
      >
        {/* Word Counter */}
        {labels[language].title}
      </Typography>
      <Textarea
        color="primary"
        disabled={false}
        minRows={3}
        // placeholder="Type or Paste Your text..."
        placeholder={
          language === "ar"
            ? "أدخل نصك هنا..."
            : "Type or paste your text here..."
        }
        value={text}
        size="lg"
        variant="soft"
        sx={{ mb: "25px" }}
        onChange={(e) => {
          setText(e.target.value); // Update text state
          analyzeText(e.target.value); // Run analysis with the new value
        }}
      />
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
          gap: 3,
          textAlign: "center",
        }}
      >
        <Card
          sx={{
            border: "2px solid #A1BBCB", // Border width and color
            borderRadius: "10px", // Optional: Rounded corners
          }}
        >
          <CardActionArea
            // onClick={() => setSelectedCard(selectedCard)}
            // data-active={selectedCard === selectedCard ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h6" component="div">
                {labels[language].words}:
              </Typography>
              <Typography variant="h5" color="text.secondary">
                {stats.wordCount}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            border: "2px solid #A1BBCB", // Border width and color
            borderRadius: "10px", // Optional: Rounded corners
          }}
        >
          <CardActionArea
            // onClick={() => setSelectedCard(selectedCard)}
            // data-active={selectedCard === selectedCard ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h6" component="div">
                {labels[language].characters}:
              </Typography>
              <Typography variant="h5" color="text.secondary">
                {stats.charCount}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            border: "2px solid #A1BBCB", // Border width and color
            borderRadius: "10px", // Optional: Rounded corners
          }}
        >
          <CardActionArea
            // onClick={() => setSelectedCard(index)}
            // data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h6" component="div">
                {labels[language].charactersWithoutSpaces}:
              </Typography>
              <Typography variant="h5" color="text.secondary">
                {stats.charCountWithoutSpaces}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            border: "2px solid #A1BBCB", // Border width and color
            borderRadius: "10px", // Optional: Rounded corners
          }}
        >
          <CardActionArea
            // onClick={() => setSelectedCard(index)}
            // data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h6" component="div">
                {labels[language].paragraphs}:
              </Typography>
              <Typography variant="h5" color="text.secondary">
                {stats.paragraphCount}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            border: "2px solid #A1BBCB", // Border width and color
            borderRadius: "10px", // Optional: Rounded corners
          }}
        >
          <CardActionArea
            // onClick={() => setSelectedCard(index)}
            // data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h6" component="div">
                {labels[language].sentences}:
              </Typography>
              <Typography variant="h5" color="text.secondary">
                {stats.sentenceCount}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            border: "2px solid #A1BBCB", // Border width and color
            borderRadius: "10px", // Optional: Rounded corners
          }}
        >
          <CardActionArea
            // onClick={() => setSelectedCard(index)}
            // data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h6" component="div">
                {labels[language].spaces}:
              </Typography>
              <Typography variant="h5" color="text.secondary">
                {stats.spacesCount}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* <Box display="flex" justifyContent="center" alignItems="center" sx={{}}>
          
          <CircularProgress
            variant="determinate"
            value={100}
            sx={{}}
            
          />
          <Typography position="absolute">{stats.runTime} ms</Typography>
        </Box> */}
       
      </Box>

      <Card
        sx={{
          border: "2px solid #A1BBCB",
          borderRadius: "10px",
          gridColumn: "1 / -1", // Take full width of the grid
          mb: "30px",
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            sx={{ mb: 2, textAlign: "center", color: "#136391" }}
          >
            {language === "ar" ? "أكثر الكلمات تكراراً" : "Most Used Keywords"}
          </Typography>

          <TableContainer
            component={Paper}
            sx={{
              maxHeight: "400px", // Scrollable area
              overflowY: "auto",
              direction: language === "ar" ? "rtl" : "ltr",
            }}
          >
            <Table stickyHeader size="medium" aria-label="word frequency table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      backgroundColor: "#F5F5F5",
                      color: "#136391",
                    }}
                    align="center"
                  >
                    {language === "ar" ? "الكلمة" : "Word"}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      backgroundColor: "#F5F5F5",
                      color: "#136391",
                    }}
                    align="center"
                  >
                    {language === "ar" ? "التكرار" : "Count"}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      backgroundColor: "#F5F5F5",
                      color: "#136391",
                    }}
                    align="center"
                  >
                    {language === "ar" ? "النسبة المئوية" : "Percentage"}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {keywordStats
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(([word, count, percentage], index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{word}</TableCell>
                      <TableCell align="center">{count}</TableCell>
                      <TableCell align="center">{percentage}%</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>

        {/* Pagination control */}
        <TablePagination
          component="div"
          count={keywordStats.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 50]} // You can adjust options
          labelRowsPerPage={
            language === "ar" ? "عدد الصفوف:" : "Rows per page:"
          }
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} ${language === "ar" ? "من" : "of"} ${
              count !== -1 ? count : `more than ${to}`
            }`
          }
          // sx={{
          //   "& .MuiTablePagination-toolbar": {
          //     color: "#136391", // Change text color
          //   },
          //   "& .MuiTablePagination-selectLabel": {
          //     color: "#136391", // Label color
          //   },
          //   "& .MuiTablePagination-displayedRows": {
          //     color: "#136391", // Displayed rows color
          //   },
          //   "& .MuiTablePagination-actions button": {
          //     color: "#136391", // Buttons (next/prev) color
          //   },
          // }}
          sx={{
            "& .MuiTablePagination-toolbar": {
              color: "#136391", // Text color (whole toolbar)
            },
            "& .MuiTablePagination-selectLabel": {
              color: "#136391", // "Rows per page" label
            },
            "& .MuiTablePagination-displayedRows": {
              color: "#136391", // "1-5 of 20"
            },
            "& .MuiTablePagination-actions button": {
              color: "#136391", // Arrows color
            },
            "& .MuiInputBase-root": {
              color: "#136391", // Dropdown selected value color
            },
            "& .MuiSvgIcon-root": {
              color: "#136391", // Arrow icon color
            },
          }}
          // SelectProps={{
          //   native: false, // ✅ Use MUI Select (not native)
          // }}
          // sx={{
          //   "& .MuiTablePagination-toolbar": {
          //     color: "#136391", // Toolbar text color
          //   },
          //   "& .MuiTablePagination-selectLabel": {
          //     color: "#136391", // Label "Rows per page"
          //   },
          //   "& .MuiTablePagination-displayedRows": {
          //     color: "#136391", // "1-5 of 30"
          //   },
          //   "& .MuiTablePagination-actions button": {
          //     color: "#136391", // Arrows color
          //   },
          //   "& .MuiInputBase-root": {
          //     color: "#136391", // Selected value color
          //   },
          //   "& .MuiSvgIcon-root": {
          //     color: "#136391", // Arrow icon color
          //   },
          //   "& .MuiSelect-select": {
          //     color: "#136391", // Selected number color (before opening)
          //   },
          //   "& .MuiMenuItem-root": {
          //     color: "#136391", // Dropdown items
          //     "&:hover": {
          //       backgroundColor: "#E0F7FA", // Hover color for dropdown items
          //     },
          //   },
          // }}
        />
      </Card>
      {/* <Table stickyHeader size="small" aria-label="word frequency table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontWeight: "bold", backgroundColor: "#F5F5F5" }}
              align="center"
            >
              {language === "ar" ? "الكلمة" : "Word"}
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", backgroundColor: "#F5F5F5" }}
              align="center"
            >
              {language === "ar" ? "التكرار" : "Count"}
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", backgroundColor: "#F5F5F5" }}
              align="center"
            >
              {language === "ar" ? "النسبة المئوية" : "Percentage"}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {keywordStats.map(([word, count, percentage], index) => (
            <TableRow key={index}>
              <TableCell align="center">{word}</TableCell>
              <TableCell align="center">{count}</TableCell>
              <TableCell align="center">{percentage}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
    </Container>
  );
};

export default CountApp;
