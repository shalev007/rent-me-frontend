import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../state/RootState';

const PopupItem: React.SFC = (): JSX.Element => {
    const mapState = useSelector((state: RootState) => state.map);

    return (
        <div>
            <p>{mapState.selectedMarker.coordinates.longitude}</p>
        </div>
    );
};

export default PopupItem;
