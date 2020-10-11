module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans JP", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
        questrial: ["Questrial", "sans-serif"]
      },
      height: {
        "75": "75vh",
        "90": "90vh"
      },
      width: {
        "75": "75vw"
      }
    },
    colors: {
      primary: "#002c73",
      secondary: "#ffd009"
    }
  },
  variants: {},
  plugins: [],
}
