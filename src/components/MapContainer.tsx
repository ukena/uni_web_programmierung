import './MapContainer.css';
import React, { useState } from 'react';


import { IonButton, IonIcon} from '@ionic/react';
import { star } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter } from '@ionic/react';

interface ContainerProps { }

const MapContainer: React.FC<ContainerProps> = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <div className="container">
     <div id="header">
       {/*
   <div id="content">Karte (Testversion)</div>
   <div id="osm">© <a href="http://www.openstreetmap.org">OpenStreetMap</a>
     und <a href="http://www.openstreetmap.org/copyright">Mitwirkende</a>,
     <a href="http://creativecommons.org/licenses/by-sa/2.0/deed.de">CC-BY-SA</a>
   </div>
   */}
  </div>
  <div id="map">
  </div>
    </div>
  );
};

export default MapContainer;