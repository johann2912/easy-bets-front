import * as SC from './field.style';

export const FormField = ({ desc, type, register, regName }) => {
  return (
    <SC.FieldContainter>
      <SC.Description>{desc}</SC.Description>
      <SC.InputContainer>
        <SC.Input
          type={type}
          {...register(regName)}
          spellCheck="false"
          required
        />
      </SC.InputContainer>
    </SC.FieldContainter>
  );
};
