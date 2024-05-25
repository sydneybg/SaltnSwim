import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUserLocations, deleteUserLocation } from '../../store/locations';
import OpenModalButton from '../OpenModalButton/OpenModalButton';
import DeleteConfirmationModal from '../DeleteModal/DeleteConfirmationModal';

const MyLocations = () => {
  const dispatch = useDispatch();


  const userLocations = useSelector(state => state.locations.userLocations);
  // const [currentLocationId, setCurrentLocationId] = useState(null);


  useEffect(() => {
    dispatch(fetchUserLocations());
  }, [dispatch]);


  const handleDelete = (locationId) => {
    dispatch(deleteUserLocation(locationId));
  };



  return (
    <div className="my-locations-page">
      <h1>My Locations</h1>
      <Link to="/locations/new" className="create-location-button">Create Location</Link>
      <div className="locations-grid">
        {userLocations.map(location => (
          <div key={location.id} className="location-tile">
            <div className="location-image">
              <img src={location.image} alt={location.name} />
            </div>
            <div className="location-details">
              <h2>{location.name}</h2>
              <p>{location.description}</p>
              <Link to={`/locations/${location.id}/edit`}>Edit</Link>
              <OpenModalButton
                buttonText="Delete"
                modalComponent={
                  <DeleteConfirmationModal
                    onDelete={() => handleDelete(location.id)}
                    itemName={location.name}
                    itemType="location"
                  />
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyLocations;
