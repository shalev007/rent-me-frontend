const getCurrentUserLocation = (): Promise<Position> => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            throw new Error('please enable geolocation services');
        }
        return navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => reject(error),
        );
    });
};
export default getCurrentUserLocation;
