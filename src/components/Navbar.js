import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
// import TranslateIcon from "@mui/icons-material/Translate";
import LanguageRadialMenu from "./LanguageRadialMenu";
import WbAutoIcon from "@mui/icons-material/WbAuto";


const Navbar = ({ language, setLanguage }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: "#031B29" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 1, ml: 3 }}
          >
            {/* <TranslateIcon sx={{ fontSize: "35px" }} /> */}
            <WbAutoIcon sx={{ fontSize: "35px" }} />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              // ml: 3
              textAlign: "center",
            }}
          >
            Counter
          </Typography>

          <LanguageRadialMenu language={language} setLanguage={setLanguage} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
