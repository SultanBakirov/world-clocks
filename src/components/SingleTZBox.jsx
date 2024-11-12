const SingleTZBox = ({ id, zoneName, zoneTime, handleDeletedTZ }) => {
  return (
    <div className="single-timezone">
      <span onClick={() => handleDeletedTZ(id)}>X</span>
      <h3 className="single-clock">{zoneName}</h3>
      <div>{zoneTime}</div>
    </div>
  );
};

export default SingleTZBox;
