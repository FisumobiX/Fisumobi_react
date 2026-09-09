import EtusivunKuva from '../components/HomeComp';
import MainLayout from '../components/MainLayoutComp';
import React, { useCallback } from 'react';
import Footer from "./Footer";

const Home: React.FC = () => {

  const footer = useCallback(
    (openPopover: (type: "maps" | "fish") => void) =>
      <Footer openPopover={openPopover} />,
    []
  );

  return (
    <MainLayout title="Fisumobi" footer={footer}>
      <EtusivunKuva />
    </MainLayout>
  );
}

export default Home;