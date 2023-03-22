import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            dark: "#26A4FF",
            light: "#F8F8FE",
            main: '#4640DE',
        },
    },
    typography: {
        h1: {
          fontSize: "3.5rem",
          color:"#25324B",
          lineHeight: "4rem",
          fontWeight:"bold",
        },
        h2: {
          fontSize: "2.5rem",
          lineHeight: "4rem",
          color:"#25324B",
          fontWeight:"bold",
        },
        h3: {
          fontSize: "2rem",
          lineHeight: "3.5rem",
          color:"#25324B",
          fontWeight:"bold",
        },
        subtitle:{
          fontSize:"1.8rem",
          lineHeight:"3rem",
          color:"#25324B",
        },
        p:{
          fontSize:"1.3rem",
          lineHeight:"2.5rem",
          color:"#25324B",
        },
        '@media (max-width:600px)': {
          h2: {
            fontSize: "2rem",
            lineHeight: "3.8rem",
          },
          h3: {
            fontSize: "1.8rem",
            lineHeight: "3rem",
          },
          subtitle:{
            fontSize:"1.3rem",
            lineHeight:"2.5rem",
          },
        },
      },
      button:{
        primary:{
          background: `#673AB7`,borderRadius:"50px",padding:"10px 30px"
        },
        ghost:{
          background: `#fff`, color:'black',borderRadius:"50px",padding:"10px 30px"
        }
      }
});

export default theme;
