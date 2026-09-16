import MaastokartatComp from '../components/MaastokarttaComp';
import MainLayout from '../components/MainLayoutComp';
import React, { useCallback } from 'react';
import Footer from "./Footer";

const Maastokartat: React.FC = () => {

  const footer = useCallback(
    (openPopover: (type: "maps" | "fish") => void) =>
      <Footer openPopover={openPopover} />,
    []
  );

  return (
    <MainLayout title="Fisumobi" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', letterSpacing: '2px', fontStyle: 'italic' }}> - Maastokartta</span>} footer={footer}>
      <MaastokartatComp apiKey='1bea131c-2337-47de-97f6-ffe630787f79' />
    </MainLayout>
  );
}
  
export default Maastokartat;