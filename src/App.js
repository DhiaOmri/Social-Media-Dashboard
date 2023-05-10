import Header from "./components/header";
import CardList from "./components/cardlist";
import CardList2 from "./components/cardlist2";
import { Grid, Typography } from "@mui/material";

import "./style/style.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Grid sx={{ maxWidth: "1400px", margin: "50px auto" }}>
        <section>
          <CardList></CardList>
        </section>
        <section>
          <CardList2></CardList2>
        </section>
      </Grid>
      <Typography
        textAlign={"center"}
        fontSize={11}
        color={"var(--text-color)"}
      >
        Challenge by
        <a
          color={"var(--text-color2)"}
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </Typography>
    </div>
  );
}

export default App;
