import {Stack} from "@mui/material";
import {TextFieldSection} from "../components/TextFieldSection";
import {SubmitSection} from "../components/SubmitSection";
import {LoginOptionSection} from "../components/LoginOptionSection";

export function LoginForm() {
    return <Stack>
        <TextFieldSection/>
        <Stack height={"24px"}/>

        <SubmitSection/>

        <LoginOptionSection/>
    </Stack>;
}