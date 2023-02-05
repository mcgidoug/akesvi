import { style } from "@vanilla-extract/css"
import { media } from "./ui.css"

export const homepageBackgroundWrapper = style({
  position: "relative",
  zIndex: -1,
  opacity: "10%",
  top: "-2rem",
})

export const homepageBackgroundImage = style({
  position: "absolute",
  display: "none",
  "@media": {
    [media.small]: {
      display: "initial",
    },
  },
})