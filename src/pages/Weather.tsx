import WeatherComp from '../components/WeatherComp';
import MainLayout from '../components/MainLayoutComp';
import React, { useCallback } from 'react';
import Footer from "./Footer";

const Weather: React.FC = () => {
 
  const footer = useCallback(
    (openPopover: (type: "maps" | "fish") => void) =>
      <Footer openPopover={openPopover} />,
    []
  );

  return (
    <MainLayout title="Fisumobi" pagetitle={<span style={{ fontSize: '0.9rem', color: '#007aff', letterSpacing: '2px', fontStyle: 'italic' }}> - Säätiedot</span>} footer={footer}>
      <WeatherComp />
    </MainLayout>
  );
}

export default Weather;