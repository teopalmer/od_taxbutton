import React, { useState } from 'react';

import Button from './Button';
import YearlyTax from './YearlyTax';
import Input from './Input';
let salaryInMonth = 0;

const MAX_TAX_DEDUCTION = 260000;

const getDeductionList = (taxDeduction: number, rest: number, numberOfYear: number) => {

  const taxDeductionList = new Array(Math.round(numberOfYear)).fill(Math.round(taxDeduction));

  if (rest !== 0) {
    taxDeductionList.push(Math.round(rest));
  }

  return taxDeductionList;
};

const FormDeduction: React.FC = () => {
  const [deductionList, setDeductionList] = useState<Array<number>>([]);

  const onChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setDeductionList([]);
    salaryInMonth = +evt.target.value;
  }


  const showDeduction = () => {
    console.log("salary is %d", salaryInMonth);
    if (salaryInMonth < 10000) {
      setDeductionList([]);
      return;
    }

      const taxDeductionInYear = (salaryInMonth * 12) * 0.13;
      const rest = MAX_TAX_DEDUCTION % taxDeductionInYear;
      const numberOfYears = (MAX_TAX_DEDUCTION - rest) / taxDeductionInYear;
      const taxDeductionList = getDeductionList(taxDeductionInYear, rest, numberOfYears);

      setDeductionList(taxDeductionList);
  };

  const emptyFunc = () => `Empty`;

  return (
    <form
      action="#"
      className="form-deduction"
    >
      <label className="form-deduction__title" htmlFor="salary">
        Ваша зарплата в месяц
      </label>
      <Input
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
          <Button
            className={`form-deduction__button-pay`}
            isVisibleTitle={true}
            onClick={emptyFunc}
            prefix={`decrease button--decrease-active`}
            title={`Платёж`}
          />
          <Button
            isVisibleTitle={true}
            onClick={emptyFunc}
            prefix={`decrease`}
            title={`Срок`}
          />
        </div>
      </div>
      <Button
        className={`form-deduction__button-submit`}
        isVisibleTitle={true}
        onClick={emptyFunc}
        prefix={`add`}
        title={`Добавить`}
        type={`submit`}
      />
    </form>
  );
};

export default FormDeduction;
