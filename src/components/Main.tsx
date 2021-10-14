import React, { useState } from 'react';

import { ScreenType } from '../shared/consts';

import Button from './Button';
import TaxDeduction from './TaxDeduction';

const Main: React.FC = () => {

  const [screen, setScreen] = useState(ScreenType.Start);

  const openPopup = () => {
    setScreen(ScreenType.Popup);
  };

  const closePopup = () => {
    setScreen(ScreenType.Start);
  };

  return (
    <div className={`main main--${screen}`}>
      <div className={`main__wrapper main__wrapper--${screen}`}>
        {screen === ScreenType.Start && (
          <Button
            isVisibleTitle={true}
            onClick={openPopup}
            prefix={`open-popup`}
            title={`Налоговый вычет`}
          />
        )}
        {screen === ScreenType.Popup && (
          <TaxDeduction
            onClosePopup={closePopup}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
