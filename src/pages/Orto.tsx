import MainLayout from '../components/MainLayoutComp';
import  KarttaComp  from '../components/OrtoComp';
import { FaHouse,  FaMap , FaFish, FaChartSimple, FaCloudSunRain } from 'react-icons/fa6';
import { useHistory } from 'react-router-dom';

const Kalakartta: React.FC = () => {
  
  const history = useHistory(); 

  const footer = (openPopover: (type: "maps" | "fish") => void) => (
    <div className="footer">
      <FaHouse className="footer_icon" color="#6f6f6f" onClick={() => history.replace("/folder/Home")}/>  
      <FaMap className="footer_icon" onClick={() => openPopover("maps")} color="#1E90FF"/> 
      <FaFish className="footer_icon" onClick={() => openPopover("fish")} color="#1E90FF"/>
      <FaChartSimple className="footer_icon" onClick={() => history.replace("/folder/Stat")} color="#1E90FF"/> 
      <FaCloudSunRain className="footer_icon" onClick={() => history.replace("/folder/Weather")} color="#1E90FF"/>
    </div>
  );

  return (
      <MainLayout title="Fisumobix" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', letterSpacing: '2px', fontStyle: 'italic' }}> - Kalakartta</span>} footer={footer}>
           <KarttaComp />
      </MainLayout>
  );
};

  
export default Kalakartta;