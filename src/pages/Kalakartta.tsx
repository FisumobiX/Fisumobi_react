import MainLayout from '../components/MainLayoutComp';
import KarttaComp  from '../components/KalakarttaComp';
import React, { useCallback } from 'react';
import Footer from "./Footer";

const Kalakartta: React.FC = () => {

  const footer = useCallback(
    (openPopover: (type: "maps" | "fish") => void) =>
      <Footer openPopover={openPopover} />,
    []
  );

  return (
    <MainLayout title="Fisumobi" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', letterSpacing: '2px', fontStyle: 'italic' }}> - Kalakartta</span>} footer={footer}>
      <KarttaComp  />
    </MainLayout>
  );
}

  
export default Kalakartta;