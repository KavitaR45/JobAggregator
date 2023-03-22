import { useTheme } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import SearchBox from "./searchbox";
export default function Banner(props) {

    const theme = useTheme();
    return (
        <section
            style={{ background: theme.palette.primary.light, paddingTop: "50px" }}>
            <Grid container alignItems="center" justifyContent="space-around">
                <Grid item md={10} sm={12} lg={5} >
                    <h1 style={{ ...theme.typography.h1 }}>{props.title}</h1>
                    <p style={{ ...theme.typography.p }}>{props.para}</p>
                    <SearchBox />
                    <p style={{ ...theme.typography.p }}>Popular: UI Designer, UX Researcher, Android, Admin</p>
                </Grid>
                <Grid item md={0} lg={5} className='person-display-none'>
                    <img src={props.img} style={{ width: "100%" }} />
                </Grid>
            </Grid>
        </section>
    );
}
