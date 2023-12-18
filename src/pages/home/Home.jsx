import "./Home.scss"
import Featured from "../../components/featured/Featured"
import TrustedBy from "../../components/trustedBy/TrustedBy"
import Slide from "../../components/Slide/Slide"

const Home = () => {
  return (
    <div>
      <Featured></Featured>
      <TrustedBy></TrustedBy>
      <Slide></Slide>
    </div>
  )
}
export default Home