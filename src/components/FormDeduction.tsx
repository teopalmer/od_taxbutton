import React, { useState } from 'react';

import StartButton from './StartButton';
import YearlyTax from './YearlyTax';
import SalaryInput from './SalaryInput';

let salaryInMonth = 0;

const MAX_TAX = 260000;

const getDeductionList = (taxDeduction: number, rest: number, numberOfYear: number) => {

  const taxList = new Array(Math.round(numberOfYear)).fill(Math.round(taxDeduction));

  if (rest !== 0) {
    taxList.push(Math.round(rest));
  }

  return taxList;
};

const TaxSection: React.FC = () => {
  const [deductionList, setList] = useState<Array<number>>([]);

  const onChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setList([]);
    salaryInMonth = +evt.target.value;
  }

  const showDeduction = () => {

    if (salaryInMonth < 10000) {
      setList([]);
      return;
    }

      const taxByYear = (salaryInMonth * 12) * 0.13;
      const rest = MAX_TAX % taxByYear;
      const numberOfYears = (MAX_TAX - rest) / taxByYear;
      const taxList = getDeductionList(taxByYear, rest, numberOfYears);

      setList(taxList);
  };

  const empty = () => ``;

  return (
    <form
      action="#"
      className="form-deduction"
    >
      <label className="form-deduction__title" htmlFor="salary">
        Ваша зарплата в месяц
      </label>
      <SalaryInput
        className={'form-deduction__sum'}
        isRequired={true}
        name={'salary'}
        onChange={onChangeInput}
        placeHolder={'Введите данные'}
        type={'number'}
      />
      <p className="form-deduction__action"
         onClick={showDeduction}>Рассчитать</p>
      {deductionList.length !== 0 && (
        <YearlyTax
          deductionList={deductionList}
        />
      )}

      <div className="form-deduction__container-decrease">
        <strong className="form-deduction__title">
          Что уменьшаем?
        </strong>
        <div className="form-deduction__group-buttons">
          <StartButton
            className={`form-deduction__button-pay`}
            isVisibleTitle={true}
            onClick={empty}
            prefix={`decrease button--decrease-active`}
            title={`Платёж`}
          />
          <StartButton
            isVisibleTitle={true}
            onClick={empty}
            prefix={`decrease`}
            title={`Срок`}
          />
        </div>
      </div>
      <StartButton
        className={`form-deduction__button-submit`}
        isVisibleTitle={true}
        onClick={empty}
        prefix={`add`}
        title={`Добавить`}
        type={`submit`}
      />
    </form>
  );
};

export default TaxSection;
