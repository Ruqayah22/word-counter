import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language"; // 🌐 Language Icon
// import HomeIcon from "@mui/icons-material/Home";
// import PersonIcon from "@mui/icons-material/Person";
// import SettingsIcon from "@mui/icons-material/Settings";
// import CountApp from "./CountApp";

const LanguageRadialMenu = ({ setLanguage }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  // const handleItemClick = (lang) => {
  //   console.log(`Selected language: ${lang}`);
  //   setOpen(false); // Close the menu after selecting
  // };

  const handleItemClick = (lang) => {
    setLanguage(lang); // Set shared language
    setOpen(false);
  };

  // // Languages or actions you want to show
  // const items = [
  //   { label: "en", icon: <HomeIcon /> },
  //   { label: "ar", icon: <PersonIcon /> },
  //   { label: "tr", icon: <SettingsIcon /> },
  // ];
  const items = ["en", "ar", 0]; //, "tr"
  const radius = 90; // Distance of icons from center

  return (
    <Box
      sx={{
        position: "relative",
        width: "100px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ml: 2,
      }}
    >
      {/* Language Icon Button (main trigger) */}
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        sx={{ mr: 2, backgroundColor: "#031B29", color: "white" }}
        // aria-controls={open ? "basic-menu" : undefined}
        // aria-haspopup="true"
        // aria-expanded={open ? "true" : undefined}
        onClick={toggleMenu}
      >
        <LanguageIcon sx={{ fontSize: "40px" }} />
      </IconButton>

      {/* Circular Animated Menu */}
      {items.map((item, index) => {
        const angle =
          (200 + (index * 75) / (items.length - 1)) * (Math.PI / 175); // Half-circle (180° to 270°)
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <IconButton
            key={item} //{item.label}
            onClick={() => handleItemClick(item)} //handleItemClick(item.label)
            // onClick={() => item !== 0 && handleItemClick(item)}
            sx={{
              position: "absolute",
              bottom: open ? `calc(30% + ${y}px)` : "50%", // Open position vs center
              left: open ? `calc(50% + ${x}px)` : "50%",
              width: "40px",
              height: "40px",
              backgroundColor: "#053042",
              color: "white",
              fontSize: "22px",
              fontWeight: "bold",
              border: "1.5px solid white",
              transform: open
                ? "translate(-50%, -50%) scale(1)"
                : "translate(-50%, -50%) scale(0.5)",
              opacity: open ? 1 : 0,
              transition: "all 0.4s ease",
              transitionDelay: open ? `${index * 0.1}s` : "0s", // Staggered delay
              "&:hover": { backgroundColor: "#075161" },
              zIndex: 5,
            }}
          >
            {/* {item.label} */}
            {item}
            {/* {item === 0 ? <CountApp /> : item} */}
          </IconButton>
        );
      })}
    </Box>
  );
};

export default LanguageRadialMenu;
