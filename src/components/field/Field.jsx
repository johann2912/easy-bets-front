import * as SC from './field.style';

export const FormField = ({
  desc,
  type,
  register,
  regName,
  contName,
  Controller,
  control,
  options,
  disabled,
  notRequired,
}) => {
  return (
    <SC.FieldContainter>
      <SC.InputContainer>
        {!Controller ? (
          <SC.Input
            type={type}
            {...register(regName, { required: notRequired ? false : true })}
            spellCheck="false"
            placeholder={desc}
            autoComplete="off"
          />
        ) : (
          <Controller
            name={contName}
            control={control}
            rules={{ required: notRequired ? false : true }}
            render={({ field }) => (
              <SC.FormSelect
                {...field}
                bg
                options={options}
                disabled={disabled}
                placeholder={desc}
              />
            )}
          />
        )}
      </SC.InputContainer>
    </SC.FieldContainter>
  );
};
