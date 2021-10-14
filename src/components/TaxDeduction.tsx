import React from 'react';

import Button from './Button';
import FormDeduction from './FormDeduction';

type Props = {
  onClosePopup: () => void;
}

const TaxDeduction: React.FC<Props> = ({ onClosePopup }: Props) => {
  return (
    <section className="tax-deduction">
      <h1 className="tax-deduction__title">
        Налоговый вычет
      </h1>
      <Button
        className={`tax-deduction__button-close-popup`}
        isVisibleTitle={false}
        onClick={onClosePopup}
        prefix={`close-popup`}
        title={`Закрыть попап`}
      />
      <p className="tax-deduction__description">
        Используйте налоговый вычет чтобы погасить ипотеку досрочно.
        Размер налогового вычета составляет не более 13% от своего официального годового дохода.
      </p>

      <FormDeduction />

    </section>
  );
};

export default TaxDeduction;
