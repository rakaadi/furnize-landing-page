module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    "./src/components/**/*.tsx",
    "./src/components/**/*.ts",
    "./src/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        questrial: ["Questrial", "sans-serif"],
        courgette: ["Courgette", "cursive"]
      },
      fontSize: {
        ss: "0.5rem"
      },
      height: {
        "13": "3.25rem",
        "14": "3.5rem",
        "10vw": "10vw",
        "20vw": "20vw",
        "75": "75vh",
        "90": "90vh"
      },
      width: {
        "75": "75vw"
      },
      colors: {
        blueLogo: "#002c73",
        yellowLogo: "#ffd009"
      },
      outline: {
        yellow: "1px solid #ffd009"
      }
    }
  },
  variants: {},
  plugins: [],
}
