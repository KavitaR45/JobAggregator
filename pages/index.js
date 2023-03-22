import Banner from '@/components/banner'
import { useTheme } from "@material-ui/styles";

export default function Home() {
  const theme = useTheme();
  const BannerData={
    title:<>Discover <br />more than <br /><span style={{ color: theme.palette.primary.dark }}>5000+ Jobs</span> </>,
    para:'Great platform for the job seeker that searching for new career heights and passionate about startups',
    img:"/images/banner/banner.png"
  }
  return (
    <>
        <Banner {...BannerData}/>
    </>
  )
}
