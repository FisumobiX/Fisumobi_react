import MainLayout from '../components/MainLayoutComp';
import KeskiSuomiComp from '../components/KeskiSuomiComp';
import React, { useCallback } from 'react';
import Footer from "./Footer";

const KeskiSuomi: React.FC = () => {

  const footer = useCallback(
    (openPopover: (type: "maps" | "fish") => void) =>
      <Footer openPopover={openPopover} />,
    []
  );

 
  return (
      <MainLayout title="Fisumobi" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', letterSpacing: '2px', fontStyle: 'italic' }}> - Kalastuspaikat</span>} footer={footer}>
           <KeskiSuomiComp /> 
      </MainLayout>
  );
};

  
export default KeskiSuomi;