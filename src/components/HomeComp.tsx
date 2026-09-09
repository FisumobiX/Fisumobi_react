import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';

interface  ContainerProps { }

const EtusivunKuva: React.FC<ContainerProps> = () => {
  
  const [imgUrl, setImgUrl] = useState<string>("");
  useEffect(() => {
    async function loadImage() {
      const url = await getImgUrl();
      setImgUrl(url);
    }
    loadImage();
  }, []);

    return (  
         <div style={photoContainer} >     
            <img src={imgUrl} style={img} alt='kuva'/>
         </div>        
    );
};
const photoContainer: CSSProperties = {
    width: '100%',
    maxWidth: '1200px',
    height: 'calc(100vh - 112px)',
    margin: '0 auto',
    overflow: 'hidden',
    backgroundSize: 'cover',             
    backgroundRepeat: 'no-repeat',       
    backgroundPosition: 'center', 
  };

  const img= {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  };

async function getImgUrl() {
    let path = "", season = "", imageRate = 0;
    switch (new Date().getMonth() + 1) {
        case 12: case 1: case 2: case 3:
            path = "/winter";
            season = "w";
            imageRate = 16;
            break;
        case 4: case 5:
            path = "/spring";
            season = "sp";
            imageRate = 20;
            break;
        case 6: case 7: case 8: case 9:
            path = "/summer";
            season = "s";
            imageRate = 66;
            break;
        case 10: case 11:
            path = "/autumn";
            season = "a";
            imageRate = 16;
            break;
    }
    const imgNro = Math.floor(Math.random() * imageRate) + 1;
    const url = `${import.meta.env.BASE_URL}images${path}/${season}${imgNro}.jpg`.replace(/\/+/g, '/');
    return url;
  }

export default EtusivunKuva;