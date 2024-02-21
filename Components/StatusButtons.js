import React from 'react';

const StatusButtons = ({ onStatusChange }) => {
  return (
    <div>
      <button onClick={() => onStatusChange('Pending')}>Set as Pending</button>
      <button onClick={() => onStatusChange('In Progress')}>Set as In Progress</button>
      <button onClick={() => onStatusChange('Resolved')}>Set as Resolved</button>
    </div>
  );
};

export default StatusButtons;