import React from 'react';
import { useDispatch } from 'react-redux';
import { types } from 'src/state/Reducers/Map';
import Transportation from 'src/interfaces/Map/Transportation';

interface MarkerItemProps {
    isUser?: boolean;
    transportation?: Transportation;
}

const MarkerItem: React.FC<MarkerItemProps> = (props: MarkerItemProps): JSX.Element => {
    const dispatch = useDispatch();

    const handleClick = (): void => {
        if (!props.transportation) {
            return;
        }

        dispatch({
            type: types.MARKER_CHOOSEN,
            payload: props.transportation,
        });
        dispatch({
            type: types.TOGGLE_POPUP,
            payload: true,
        });
    };

    return (
        <button style={{ border: 'none', background: 'none', cursor: 'pointer' }} onClick={handleClick}>
            <img src="/media/location.svg" width={50} height={50} alt="map pin" />
        </button>
    );
};

export default MarkerItem;
