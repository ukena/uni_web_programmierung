import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter, IonRow, IonCol, IonGrid } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import MapContainer from '../components/MapContainer';
import './Home.css';
import { egalwie } from '../hooks/tom';

import { IonButton, IonIcon} from '@ionic/react';
import { star } from 'ionicons/icons';

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const {getPermission} = egalwie();
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
        <IonGrid>
        <IonRow>
            <IonCol>
              <IonTitle>Containern-App</IonTitle><br />
            </IonCol>

    <IonButton onClick={() => getPermission()}>
      <IonIcon slot="icon-only" icon={star} />
    </IonButton>
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
