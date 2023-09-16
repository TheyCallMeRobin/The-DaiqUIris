import React, { useState } from 'react';
import './ImportButton.scss';

const ImportButton = () => {
    const [fileFinderVisible, setFileFinderVisible] = useState(false);

    const toggleFileFinder = () => {
        setFileFinderVisible(!fileFinderVisible);
    };

    return (
        <div className="import-button-container">
            <button className="import-button" onClick={toggleFileFinder}>
                Import
            </button>
            {fileFinderVisible && (
                <div className="fileFinder">
                    <td>whatever file finder should open up</td>
                </div>
            )}
        </div>
    );
};

export default ImportButton;
