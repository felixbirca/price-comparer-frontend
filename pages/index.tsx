import type {NextPage} from "next";
import {useQuery} from "react-query";
import useAxios from "../useAxios";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import {useAuth0} from "@auth0/auth0-react";
import {Box, Button, ButtonGroup} from "@mui/material";
import { useRouter } from "next/router";

interface Service {
    id: number;
    userId: string;
    name: string;
    address: string;
    offerTypes: string[];
}

interface OfferType {
    id: number;
    userId: string;
    name: string;
    services: Service[];
}

const Home: NextPage = () => {
    const {isAuthenticated} = useAuth0();

    const axios = useAxios();
    const getOfferTypes = () => {
        return axios.get("offer-types").then(response => response.data);
    };
    const {data, isLoading, isSuccess} = useQuery<unknown, unknown, OfferType[]>("info", getOfferTypes);

    const router = useRouter();
    return (
    <>
            {!isAuthenticated ? (
                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <LoginButton/>
                </Box>
            ) : (
                <>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <LogoutButton/>

                    </Box>
                    <Box>
                        <ButtonGroup variant="text" aria-label="text button group">
                            <Button>Services</Button>
                            <Button onClick={() => router.push("/offer-types")}>Service Types</Button>
                            <Button>Three</Button>
                        </ButtonGroup>
                    </Box>
                </>
            )}
        </>
    );
};

export default Home;
