import {GenderHome} from "../components/GenderHome/GenderHome";
import homeImageMan from '../img/home-man.png'
import homeImageWoman from '../img/home-woman.png'




export const Home = () => {
  return(
    <div>
      <GenderHome
        image={homeImageMan}
        text={'man'}
      />
      <GenderHome
        image={homeImageWoman}
        text={'woman'}
      />
    </div>
  )
}