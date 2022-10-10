import { IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import { add, logoFacebook, logoInstagram, logoTwitter, logoVimeo, share, fileTrayFullOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { ViewAll } from '../components/ViewAll';
import { Year } from '../components/Year';
import { useAgeStore } from '../store/ageStore';
import './Home.scss';

const Home: React.FC = () => {

  const [show, setShow] = useState(false);
  const [present, dismiss] = useIonAlert()

  const [full, setFull] = useState<boolean>(false);

  useEffect(() => {
    //ask birth
    present({
      mode: 'ios',
      backdropDismiss: false,
      header: '생일을 입력해주세요',
      inputs: [
        {
          name: 'birth',
          type: 'date',
          placeholder: '생일을 입력해주세요'
        }
      ],
      buttons: [
        {
          text: '취소',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: '확인',
          handler: ({ birth }) => {
            console.log('Confirm Ok', birth);
            useAgeStore.setState({ birth: new Date(birth) });

            // useAgeStore.setState({ birth: birth });
            setShow(true);
          }
        }
      ]
    })
  }, [])

  return (
    <IonPage className='home'>
      <IonHeader mode='ios'>
        <IonToolbar>
          <IonTitle>Weeks Left</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {show &&
          <div className="container">

            <div className="full" style={full ? undefined : { display: 'none' }}>
              <ViewAll></ViewAll>
            </div>

            <div className="years" style={full ? { display: 'none' } : undefined}>
              {Array.from(Array(100).keys()).map((year, index) => {
                return (
                  <Year key={index} index={index}></Year>
                )
              })}
            </div>

          </div>
        }
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => setFull(!full)}>
            <IonIcon icon={fileTrayFullOutline} />
          </IonFabButton>
          <IonFabList side="top">
            {/* <IonFabButton><IonIcon icon={logoInstagram} /></IonFabButton> */}
            {/* <IonFabButton><IonIcon icon={logoTwitter} /></IonFabButton> */}
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage >
  );
};

export default Home;
