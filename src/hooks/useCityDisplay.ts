 import { useState, useEffect } from 'react';

export const useCityDisplay = (fullName: string) => {
  const [displayName, setDisplayName] = useState(fullName);

  useEffect(() => {
    if (window.innerWidth < 500) {
      setDisplayName(fullName.slice(0, 8));
    }else if(window.innerWidth >= 500 || window.innerWidth < 600){
      setDisplayName(fullName.slice(0, 10));
    }else if(window.innerWidth >= 600 || window.innerWidth < 700){
      setDisplayName(fullName.slice(0, 12));
    }else if(window.innerWidth >= 700 || window.innerWidth < 800){
      setDisplayName(fullName.slice(0, 14));
    }else {
      setDisplayName(fullName);
    }
  }, [fullName]);

  return displayName;
};
