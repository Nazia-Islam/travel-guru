import React, { useState } from 'react';
import {
    GoogleMap,
    useLoadScript,
    Marker,
} from "@react-google-maps/api";
import { useParams } from 'react-router-dom';
import fakedata from '../../fakedata';

const mapContainerStyle={
width: "500px",
height: "600px",
};
  
const Map = () => {
    const hotelLocation = useParams();
    const [mapLocation, setMapLocation] = useState(fakedata);
    const gMaplocation = mapLocation.find(loc => (loc.key === hotelLocation.key));
    const [hotels, setHotel] = useState(fakedata);
    const filterHotels = hotels.filter(hotel => (hotel.location === hotelLocation.key));
    console.log(gMaplocation);

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyCDnTMSM6H57Q-F_xeY3SY1zvDjT4p6iis',
     
    });
    
    if(loadError) return "Error loading Maps";
    if(!isLoaded) return "Loading Maps";

    return (
    <div>
      <GoogleMap 
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={{lat:gMaplocation.lat, lng:gMaplocation.lng}}
      >
        <Marker 
            position={{lat:gMaplocation.lat, lng:gMaplocation.lng}}
            icon={{
                url: "https://www.flaticon.com/svg/static/icons/svg/1673/1673188.svg",
                scaledSize: new window.google.maps.Size(30, 30),
            }}
            title={gMaplocation.name}
            labelStyle={{background: '#fff'}}
        ></Marker>
        {
          filterHotels.map(hotel => (
            <Marker
              position={{lat:hotel.hlat, lng:hotel.hlng}}
              label={hotel.price}
            ></Marker>
          ))
        }
      </GoogleMap>
    </div>
    );
};

export default Map;