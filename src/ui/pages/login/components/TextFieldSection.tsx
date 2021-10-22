import {Stack} from "@mui/material";
import {TitleWithTextField} from "./TitleWithTextField";

export function TextFieldSection() {
    return <Stack>
        <TitleWithTextField title={"Email"}/>
        <Stack height={"12px"}/>
        <TitleWithTextField title={"Password"}/>
    </Stack>;
}