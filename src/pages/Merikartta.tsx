import MerikarttaComp from '../components/MerikarttaComp';
import MainLayout from '../components/MainLayoutComp';
import React, { useCallback, useState } from 'react';
import '../components/themeComp/KarttaComp.css';
import Footer from "./Footer";
import { FaGear } from 'react-icons/fa6';


const Merikartta: React.FC = () => {

    const [settingsOpen, setSettingsOpen] = useState(false);
   
    const footer = useCallback(
      (openPopover: (type: "maps" | "fish") => void) =>
        <Footer openPopover={openPopover}  />,
      []
    );
 

  return (
      <MainLayout title="Fisumobi" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', letterSpacing: '2px', fontStyle: 'italic' }}> - Merikartat<button className={`settings-close-btn`} onClick={() => setSettingsOpen(true)}><FaGear /></button ></span>} footer={footer}>
           <MerikarttaComp apiKey='1bea131c-2337-47de-97f6-ffe630787f79' settingsOpen={settingsOpen} setSettingsOpen={setSettingsOpen} /> 
      </MainLayout>
  );
};

  
export default Merikartta;