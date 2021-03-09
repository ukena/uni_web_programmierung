import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter, IonRow, IonCol, IonGrid } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import MapContainer from '../components/MapContainer';
import './Home.css';

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
        <IonGrid>
        <IonRow>
            <IonCol>
              <IonTitle>Containern-App</IonTitle><br />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
            </IonCol>
          </IonRow>
        </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <MapContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
