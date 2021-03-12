export function egalwie() {

    const getPosition = async (position: { coords: { latitude: any; longitude: any; }; }) => {
        console.log(position.coords.latitude, position.coords.longitude);
    };

    const getPermission = async () => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition);}


    };

    return {
      getPermission
    };
  }