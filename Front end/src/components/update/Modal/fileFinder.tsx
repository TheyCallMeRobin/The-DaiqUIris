import './fileFinder.scss'
import React, { useState } from 'react';
import FileFinder from '/Users/zacharyduncan/Desktop/The-DaiqUIris/Front end/src/assets/fileFinder.png';

const fileFinder = () => (
  
  
    
  <div className="modal-outline">
    <div className="modal-content">
        <div className='top-header'>
            <div className='title'>Import EEG File</div>
        </div>
        <br></br>
        <div className='line'></div>
        <div className= 'file-shower'>
          <div className='text'>Please import a file</div>
        </div>
        <img className= 'file-finder-button' src = {FileFinder}/>
        <div className='preprossesing-options-text'>Preprossesing</div>
        <div className='preprossesing-options'>
          <table>
            <tr>
              <td>
          <button className='filter-button'>Filters ▼</button>
              </td>
              <td>
          <button className='filter-button'>Amp: 5µV ▼</button>
              </td>
            </tr>
          </table>
        </div>
      <button className='import-buttons'> 
        Visualize
      </button>
    </div>
  </div>
);

export default fileFinder;
