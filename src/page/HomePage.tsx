
import Logo from '../components/Logo';
import '../styles/HomePage.scss'
import '../styles/Logo.scss'

const HomePage: React.FC = () => {
  return (
   <div className='backgroundHome'>
    <p className='homeText'></p>
    <Logo/>
  </div>
    );
};
export default HomePage;
