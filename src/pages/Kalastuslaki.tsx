import MainLayout from '../components/MainLayoutComp';
import KalastuslakiComp from '../components/KalastuslakiComp';
import React, { useCallback } from 'react';
import Footer from "./Footer";

const Kalastuslaki: React.FC = () => {

  const footer = useCallback(
    (openPopover: (type: "maps" | "fish") => void) =>
      <Footer openPopover={openPopover} />,
    []
  );

  return (
      <MainLayout title="Fisumobi" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', letterSpacing: '2px', fontStyle: 'italic' }}> - Kalastuslaki</span>} footer={footer}>
           <KalastuslakiComp /> 
      </MainLayout>
  );
};
 
export default Kalastuslaki;