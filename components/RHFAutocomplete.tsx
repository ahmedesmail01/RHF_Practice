"use client";
import { Autocomplete, Box, Checkbox, TextField } from "@mui/material";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { Option } from "@/types/options";
import { CheckBoxOutlineBlankOutlined } from "@mui/icons-material";
import CheckBox from "@mui/icons-material/CheckBox";
//interfaces
interface IProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  options?: Option[];
}
export default function RHFAutocomplete<T extends FieldValues>({
  name,
  label,
  options,
}: IProps<T>) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <Autocomplete
          options={options || []}
          value={value.map((id: string) =>
            options?.find((item) => item.id === id)
          )}
          getOptionLabel={(option) =>
            options?.find((item) => item.id === option.id)?.label ?? ""
          }
          isOptionEqualToValue={(option, newValue) => option.id === newValue.id}
          onChange={(_, newValue) => onChange(newValue.map((item) => item.id))}
          multiple
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              fullWidth
              inputRef={ref}
              error={!!error}
              helperText={error?.message}
            />
          )}
          renderOption={(props, option, { selected }) => (
            <Box component="li" {...props}>
              <Checkbox
                icon={<CheckBoxOutlineBlankOutlined />}
                checkedIcon={<CheckBox />}
                checked={selected}
              />
              {option.label}
            </Box>
          )}
        />
      )}
    />
  );
}
