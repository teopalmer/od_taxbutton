import React from 'react';

import Checkbox from './Checkbox';

type Props = {
  deductionList: number[];
}

const format = (deduction: number) => {
  return deduction
  .toString()
  .replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ');
};

const getLabelCheckbox = (deduction: number, year: number) => {
  return (
    <>
      <span className="checkbox__sum">
        {`${format(deduction)} рублей `}
      </span>
      <span className="checkbox__year">
        в{year === 1 ? "о" : ""} {year + 1}-{[1, 5, 6, 7].includes(year) ? "ой" :
          (year === 2 ? "ий" : "ый")} год
      </span>
    </>
  );
};

const YearlyTax: React.FC<Props> = ({ deductionList }: Props) => {
  return (
    <div className="early-pay">
      <label className="early-pay__label">
        Итого можете внести в качестве досрочных:
      </label>
      {deductionList.map((deduction, i) => {
        return (
            <Checkbox
                key={`${deduction}-${i}`}
                isDisabled={false}
                className={`early-pay__checkbox`}>
              {getLabelCheckbox(deduction, i)}
            </Checkbox>
        );
      })}
    </div>
  );
};

export default YearlyTax;
