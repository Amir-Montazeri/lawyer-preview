'use client';
import '../assets/styles.css';
import { useRef } from 'react';
import { GrClose } from 'react-icons/gr';

import useAlertStore from '../store-manager';

function AlertUi() {
  const { getAlert, putAlert, omitAlert } = useAlertStore(),
    alertBoxRef = useRef<HTMLDivElement>(null);

  const handleClicks = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!alertBoxRef.current?.contains(e.target)) {
      omitAlert();
    }
  };

  return (
    getAlert() && (
      <section className="alert-container" onClick={handleClicks}>
        <div className="alert-box" ref={alertBoxRef}>
          <div onClick={omitAlert} className="alert-cancel-container">
            <GrClose />
          </div>
          <div className="alert-title-container">
            <h2 className="alert-title-text">{getAlert()?.title}</h2>
          </div>
          <div className="alert-description-container">
            <p className="alert-description-text">{getAlert()?.description}</p>
          </div>
          <div className="alert-button-container">{getAlert()?.buttons}</div>
        </div>
      </section>
    )
  );
}

export default AlertUi;
