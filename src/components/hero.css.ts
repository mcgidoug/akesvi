import { style } from "@vanilla-extract/css"
import { media } from "./ui.css"

export const homepageBackgroundWrapper = style({
  position: "relative",
  opacity: "10%",
  top: "-2rem",
})

export const homepageBackgroundImage = style({
  display: "none",
  "@media": {
    [media.small]: {
      position: "absolute",
      display: "initial",
      objectFit: "cover",
      minHeight: "60vh",
    },
  },
})