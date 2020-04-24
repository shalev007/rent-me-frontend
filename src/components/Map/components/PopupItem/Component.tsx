import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../state/RootState';
import { Link } from 'react-router-dom';

const PopupItem: React.SFC = (): JSX.Element => {
    const selectedMarker = useSelector((state: RootState) => state.map.selectedMarker);
    const showPopup = useSelector((state: RootState) => state.map.showPopup);

    return (
        <div>
            {showPopup && (
                <div>
                    <div className="car-images">
                        <img src={selectedMarker.seller.vehicles[0].media[0].url} alt="car" />
                    </div>
                    <div className="seller-details">
                        <div>
                            <h4>Seller Details</h4>
                            <p>{`${selectedMarker.seller['first-name']} ${selectedMarker.seller['last-name']}`}</p>
                            <p>
                                {`
                                    Daily: ${selectedMarker.seller.vehicles[0].prices['full-day']} 
                                    Hourly: ${selectedMarker.seller.vehicles[0].prices['hourly']}
                                `}
                            </p>
                        </div>
                        <div className="booking-page">
                            <Link to="/booking">Book Car</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupItem;
