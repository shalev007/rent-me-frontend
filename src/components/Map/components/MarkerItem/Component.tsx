import React from 'react';

interface MarkerItemProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const MarkerItem: React.FC<MarkerItemProps> = (props: MarkerItemProps): JSX.Element => {
    return (
        <button style={{ border: 'none', background: 'none', cursor: 'pointer' }} onClick={props.onClick}>
            <img src="/media/location.svg" width={50} height={50} alt="map pin" />
        </button>
    );
};

export default MarkerItem;
