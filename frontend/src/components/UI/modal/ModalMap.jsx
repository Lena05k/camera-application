import {
  YMaps,
  Map,
  FullscreenControl,
  GeolocationControl,
  TypeSelector,
  ZoomControl,
} from '@pbe/react-yandex-maps';
import React from 'react';

const ModalMap = () => (
  <YMaps className="rounded">
    <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
      <FullscreenControl />
      <GeolocationControl options={{ float: 'right' }} />
      <ZoomControl options={{ float: 'right' }} />
      <TypeSelector options={{ float: 'right' }} />
    </Map>
  </YMaps>
);

export default ModalMap;
