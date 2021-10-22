import {Stack} from "@mui/material";
import {LoginForm} from "./templates/LoginForm";
import {LoginFooter} from "./components/LoginFooter";
import {LogoSection} from "./components/LogoSection";

const PRIMARY_COLOR = "#46518C"


const LoginPage = () => {
    return <>
        <Stack
            alignItems={"center"}
            width={"100%"}
            height={"100%"}
        >

            <Stack
                justifyContent="space-between"
                alignItems="center"
                color={PRIMARY_COLOR}
                maxWidth={"360px"}
                width={"100%"}
                height={"100%"}
                marginBottom={"16px"}
            >
                <Stack/>

                <Stack
                    width={"100%"}
                    paddingX={"16px"}>
                    <LogoSection/>
                    <Stack height={"48px"}/>
                    <LoginForm/>
                </Stack>

                <LoginFooter/>
            </Stack>

        </Stack>
    </>

}

export default LoginPage