import { Grid, styled } from "@mui/material";
import React from "react";

interface ITecnologiesProps {
  children?: React.ReactNode;
}

const Img = styled("img")({ width: 40, height: 40 });
/* const PROXIMITY = 10;
const CONTAINER = document.getElementsByClassName(".container"); */

/* const CONFIG = {
  proximity: 40,
  spread: 80,
  blur: 20,
  gap: 32,
  vertical: false,
  opacity: 0,
}; */

export const Tecnologies: React.FC<ITecnologiesProps> = () => {
  /* const CARDS = document.querySelectorAll("article");
  document.body.addEventListener("pointermove", (event: PointerEvent) => {
    for (const CARD of CARDS) {
      // Check the card against the proximity and then start updating
      const CARD_BOUNDS = CARD.getBoundingClientRect();
      // Get distance between pointer and outerbounds of card
      if (
        event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
        event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
        event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
        event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
      ) {
        // If within proximity set the active opacity
        CARD.style.setProperty("--active", 1);
      } else {
        CARD.style.setProperty("--active", CONFIG.opacity);
      }
      const CARD_CENTER = [
        CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
        CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
      ];

      let ANGLE =
        (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
          180) /
        Math.PI;
      ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
      CARD.style.setProperty("--start", ANGLE + 90);
    }
  });
 */
  return (
    <Grid container justifyContent={"space-between"} mb={2}>
      <Grid item>
        <Img src="./tecnologies/html5.svg" loading="lazy" />
      </Grid>
      <Grid item>
        <Img src="./tecnologies/css.svg" loading="lazy" />
      </Grid>
      <Grid item>
        <Img src="./tecnologies/bootstrap.svg" loading="lazy" />
      </Grid>
      <Grid item>
        <Img src="./tecnologies/tailwindcss.svg" loading="lazy" />
      </Grid>
      <Grid item>
        <Img src="./tecnologies/javascript.svg" loading="lazy" />
      </Grid>
      <Grid item>
        <Img src="./tecnologies/typescript.svg" loading="lazy" />
      </Grid>
      <Grid item>
        <Img src="./tecnologies/nodejs.svg" loading="lazy" />
      </Grid>
      <Grid item>
        <Img src="./tecnologies/react.svg" loading="lazy" />
      </Grid>
      <Grid item>
        <Img src="./tecnologies/Express.js.dark.svg" loading="lazy" />
      </Grid>
      <Grid item>
        <Img src="./tecnologies/nestjs.svg" />
      </Grid>
      <Grid item>
        <Img src="./tecnologies/postgresql.svg" />
      </Grid>
      <Grid item>
        <Img src="./tecnologies/mysql.svg" />
      </Grid>
      <Grid item>
        <Img src="./tecnologies/mongodb.svg" />
      </Grid>
      <Grid item>
        <Img src="./tecnologies/materialui.svg" />
      </Grid>
      <Grid item>
        <Img src="./tecnologies/docker.svg" />
      </Grid>
      <Grid item>
        <Img src="./tecnologies/linux.svg" />
      </Grid>
    </Grid>
    /*  <div className="container">
      <article></article>
      <article></article>
    </div> */
  );
};
