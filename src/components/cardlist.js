import React, { Component } from "react";
import SingleCard from "./singlecard";
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default class CardList extends Component {
  render() {
    return (
      <Grid
        container
        gap={4}
        flexWrap={{ lg: "nowrap" }}
        justifyContent={"center"}
      >
        <Grid md={3}>
          <SingleCard
            socialLogo={<FacebookIcon color={"primary"} fontSize="medium" />}
            socialName={"@nathanf"}
            followers={1987}
            followersToday={["up", 12]}
            bgTopColor={"var(--facebook)"}
          ></SingleCard>
        </Grid>
        <Grid md={3}>
          <SingleCard
            socialLogo={<TwitterIcon color={"primary"} fontSize="medium" />}
            socialName={"@nathanf"}
            followers={1500}
            followersToday={["up", 99]}
            bgTopColor={"var(--twitter)"}
          ></SingleCard>
        </Grid>
        <Grid md={3}>
          <SingleCard
            socialLogo={
              <InstagramIcon
                //   color={"secondary"}
                fontSize="medium"
                sx={{
                  color: "var(--instagram-middle)",
                }}
              />
            }
            socialName={"@nathanf"}
            followers={"11k"}
            followersToday={["up", 1099]}
            bgTopColor={
              "linear-gradient(225deg,var(--instagram-end),var(--instagram-middle) 50.91%,var(--instagram-start) 100%)"
            }
          ></SingleCard>
        </Grid>
        <Grid md={3}>
          <SingleCard
            socialLogo={
              <YouTubeIcon sx={{ color: "var(--youtube)" }} fontSize="medium" />
            }
            socialName={"@nathanf"}
            followers={8239}
            followersToday={["down", 144]}
            bgTopColor={"var(--youtube)"}
          ></SingleCard>
        </Grid>
      </Grid>
    );
  }
}
