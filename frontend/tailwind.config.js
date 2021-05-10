module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        slider: "slide 2s ease out infinite",
      },
      backgroundColor: {
        facebook: "#3B5998",
        instagram: "#D93174",
        pinterest: "#CB2027",
        primary: "#42B549",
        twitter: "#00ACED",
      },
      borderColor: {
        primary: "#42B549",
      },
      borderRadius: {
        "10px": "10px",
      },
      boxShadow: {
        primary: "2px 1px 1px 2px rgba(66, 181, 73, 0.7)",
      },
      flex: {
        "col-1": '1 1 25rem',
        "col-2": '2 1 50rem',
      },
      fontFamily: {
        body: "Roboto",
      },
      gridTemplateRows: {
        signup: "1fr 4fr 1fr",
      },
      height: {
        "40px": "40px",
        "56px": "56px",
        "80px": "80px",
        "150px": "150px",
        card: "300px",
        "330px": "330px",
      },
      inset: {
        "30px": "30px",
      },
      keyframes: {
        slide: {
          "20%": {
            transform: "translateY(100%)",
          },
          "50%": {
            transform: "translateY(0%)",
          }
        },
      },
      margin: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
        xxl: "96px",
      },
      minHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        "480px": "480px",
      },
      minWidth: {
        '1': '1rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
      },
      outline: {
        primary: "#42B549",
      },
      ringColor: {
        primary: "#42B549",
      },
      screens: {
        xxl: { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
      },
      textColor: {
        facebook: "#3B5998",
        primary: "#42B549",
      },
      width: {
        xxl: "1535px",
        xl: "1279px",
        lg: "1023px",
        md: "767px",
        sm: "639px",
        banner: "960px",
        "176px": "176px",
        "234px": "234px",
        "135px": "135px",
        "1174px": "1174px",
        "full-2": "200%",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["hover", "focus", "checked"],
      fontWeight: ["hover", "focus"],
      outline: ["hover", "focus"],
      ringColor: ["hover", "active", "focus"],
      translate: ["active", "group-hover"],
    },
  },
  plugins: [],
};
