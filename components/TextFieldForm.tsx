import {TextField} from "@mui/material";
import {Controller} from "react-hook-form/dist/controller";

interface TextFieldFormProps {
    control: any;
    name: string;
    label: string;
}

export default function TextFieldForm({control, name, label}: TextFieldFormProps) {
    return (
        <Controller
            control={control}
            name={name}
            render={({
                         field: {onChange, value, name, ref, onBlur},
                         fieldState: {invalid, isTouched, isDirty, error}, formState
                     }) => (
                <TextField
                    name={name}
                    label={label}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                />
            )}
        />
    )
}