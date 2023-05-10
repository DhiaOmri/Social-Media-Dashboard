import React, { Component } from "react";
import SingleCard2 from "./singlecard2";
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default class CardList2 extends Component {
  render() {
    return (
      <Grid>
        <h2>Overview - Today</h2>
        <Grid
          container
          gap={4}
          flexWrap={{ lg: "nowrap" }}
          justifyContent={"center"}
        >
          {" "}
          <Grid md={3}>
            <SingleCard2
              socialLogo={<FacebookIcon color={"primary"} fontSize="medium" />}
              socialName={"Page Views"}
              followers={87}
              followersToday={["up", 3]}
              bgTopColor={"var(--facebook)"}
            ></SingleCard2>
          </Grid>
          <Grid md={3}>
            <SingleCard2
              socialLogo={<FacebookIcon color={"primary"} fontSize="medium" />}
              socialName={"Likes"}
              followers={52}
              followersToday={["down", 2]}
              bgTopColor={"var(--twitter)"}
            ></SingleCard2>
          </Grid>{" "}
          <Grid md={3}>
            <SingleCard2
              socialLogo={
                <InstagramIcon
                  //   color={"secondary"}
                  fontSize="medium"
                  sx={{
                    color: "var(--instagram-middle)",
                  }}
                />
              }
              socialName={"Likes"}
              followers={"5468"}
              followersToday={["up", 2257]}
              bgTopColor={
                "linear-gradient(225deg,var(--instagram-end),var(--instagram-middle) 50.91%,var(--instagram-start) 100%)"
              }
            ></SingleCard2>
          </Grid>{" "}
          <Grid md={3}>
            <SingleCard2
              socialLogo={
                <InstagramIcon
                  sx={{
                    color: "var(--instagram-middle)",
                  }}
                  fontSize="medium"
                />
              }
              socialName={"Profile Views"}
              followers={"52k"}
              followersToday={["up", 1375]}
              bgTopColor={"var(--youtube)"}
            ></SingleCard2>
          </Grid>
        </Grid>
        <Grid
          mt={4}
          container
          gap={4}
          flexWrap={{ lg: "nowrap" }}
          justifyContent={"center"}
        >
          {" "}
          <Grid md={3}>
            <SingleCard2
              socialLogo={
                <TwitterIcon
                  sx={{ color: "var(--twitter)" }}
                  fontSize="medium"
                />
              }
              socialName={"Page Views"}
              followers={87}
              followersToday={["up", 3]}
              bgTopColor={"var(--facebook)"}
            ></SingleCard2>
          </Grid>
          <Grid md={3}>
            <SingleCard2
              socialLogo={
                <TwitterIcon
                  sx={{ color: "var(--twitter)" }}
                  fontSize="medium"
                />
              }
              socialName={"Likes"}
              followers={52}
              followersToday={["down", 2]}
              bgTopColor={"var(--twitter)"}
            ></SingleCard2>
          </Grid>{" "}
          <Grid md={3}>
            <SingleCard2
              socialLogo={
                <YouTubeIcon
                  fontSize="medium"
                  sx={{ color: "var(--youtube)" }}
                />
              }
              socialName={"Likes"}
              followers={"5468"}
              followersToday={["up", 2257]}
              bgTopColor={
                "linear-gradient(225deg,var(--instagram-end),var(--instagram-middle) 50.91%,var(--instagram-start) 100%)"
              }
            ></SingleCard2>
          </Grid>{" "}
          <Grid md={3}>
            <SingleCard2
              socialLogo={
                <YouTubeIcon
                  sx={{ color: "var(--youtube)" }}
                  fontSize="medium"
                />
              }
              socialName={"Profile Views"}
              followers={"52k"}
              followersToday={["up", 1375]}
              bgTopColor={"var(--youtube)"}
            ></SingleCard2>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
