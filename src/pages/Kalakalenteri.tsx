import KalakalenteriComp from '../components/KalakalenteriComp';
import MainLayout from '../components/MainLayoutComp';
import React, { useCallback } from 'react';
import Footer from "./Footer";

const Kalakalenteri: React.FC = () => {
  

  const footer = useCallback(
    (openPopover: (type: "maps" | "fish") => void) =>
      <Footer openPopover={openPopover} />,
    []
  );

  return (
      <MainLayout title="Fisumobi" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', paddingLeft: '0', letterSpacing: '2px', fontStyle: 'italic' }}> - Kalakalenteri</span>} footer={footer}>
           <KalakalenteriComp /> 
      </MainLayout>
  );
};

  
export default Kalakalenteri;