import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../state/RootState';

const PopupItem: React.SFC = (): JSX.Element => {
    const name = useSelector((state: RootState) => state.map.name);

    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default PopupItem;
