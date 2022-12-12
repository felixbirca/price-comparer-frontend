import {
    Button, Dialog,
    DialogActions, DialogContent, DialogTitle, Stack
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import useAxios from "../useAxios";

export interface AddOfferTypeDialogProps {
    open: boolean;
    onClose: () => void;
}

interface CreateOfferTypeInputs {
    name: string
}

export default function AddOfferTypeDialog({open, onClose}: AddOfferTypeDialogProps) {
    const formContext = useForm<CreateOfferTypeInputs>();
    const axios = useAxios();
    const onSubmit: SubmitHandler<CreateOfferTypeInputs> = data => console.log(data);

    return (
        <Dialog onClose={() => onClose()} open={open} maxWidth={"sm"} fullWidth>
            <DialogTitle>Create a new offer type</DialogTitle>
            <DialogContent>
                <FormContainer formContext={formContext}>
                    <Stack spacing={2} mt={1}>
                        <TextFieldElement name={"name"} label={"Name"} fullWidth/>
                    </Stack>
                </FormContainer>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose()}>Cancel</Button>
                <Button onClick={formContext.handleSubmit(onSubmit)}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}