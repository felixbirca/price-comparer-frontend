import {Box, Button, Container} from "@mui/material"
import {useState} from "react";
import AddOfferTypeDialog from "../components/AddOfferTypeDialog";
import useAxios from "../useAxios";

export default function OfferTypes() {
    const [isCreateNewOpen, setCreateNewOpen] = useState(false);




    return (
        <Container maxWidth="lg">
            <Box sx={{display: "flex", justifyContent: "space-end"}}>
                <Button onClick={() => setCreateNewOpen(true)}>Add type</Button>
            </Box>
            <Box>
                Other content
            </Box>
            <AddOfferTypeDialog open={isCreateNewOpen} onClose={() => setCreateNewOpen(false)} />
        </Container>
    )
}