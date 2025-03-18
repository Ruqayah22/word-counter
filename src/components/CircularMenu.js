import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import MailIcon from "@mui/icons-material/Mail";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import VideocamIcon from "@mui/icons-material/Videocam";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

export default function CircularMenu() {
  const [open, setOpen] = useState(false);
  
  const icons = [
    <HomeIcon />,
    <PersonIcon />,
    <SettingsIcon />,
    <MailIcon />,
    <VpnKeyIcon />,
    <VideocamIcon />,
    <SportsEsportsIcon />,
    <CameraAltIcon />,
  ];

  const radius = 100; // Radius of the circular layout

  

  return (
    <Box
      sx={{
        position: "relative",
        width: "250px",
        height: "250px",
        margin: "100px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Toggle Button */}
      <IconButton
        onClick={() => setOpen((prev) => !prev)}
        sx={{
          width: "60px",
          height: "60px",
          backgroundColor: "#fff",
          borderRadius: "50%",
          boxShadow: "0 0 8px rgba(0,0,0,0.15)",
          zIndex: 10,
          transition: "transform 0.5s",
          transform: open ? "rotate(315deg)" : "rotate(0deg)",
        }}
      >
        <AddIcon sx={{ fontSize: "2rem" }} />
      </IconButton>

      {/* Circular Menu Items */}
      {icons.map((icon, index) => {
        const angle = (360 / icons.length) * index; // Spread evenly in a circle
        const angleInRadians = (angle * Math.PI) / 180;
        const x = radius * Math.cos(angleInRadians);
        const y = radius * Math.sin(angleInRadians);

        return (
          <IconButton
            key={index}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "50px",
              height: "50px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              boxShadow: "0 0 6px rgba(0,0,0,0.1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#333",
              transform: open ? `translate(${x}px, ${y}px)` : "translate(0, 0)",
              opacity: open ? 1 : 0,
              transition: "transform 0.5s ease, opacity 0.5s ease",
              transitionDelay: `${index * 0.05}s`, // Staggered effect
            }}
          >
            {icon}
          </IconButton>
        );
      })}
    </Box>
  );
}
