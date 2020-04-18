import Coordinates from '../interfaces/Coordinates';
import { ViewportProps } from 'react-map-gl';

export const defaultUserCoordinates: Coordinates = {
    latitude: 0,
    longitude: 0,
};

export const defaultViewport: ViewportProps = {
    width: 0,
    height: 900,
    latitude: 0,
    longitude: 0,
    altitude: 0,
    zoom: 17,
    maxZoom: 24,
    minZoom: 0,
    pitch: 0,
    maxPitch: 0,
    minPitch: 0,
    bearing: 0,
};
