import {Stack, TextField, Typography} from "@mui/material";


type TitleWithTextFieldProps = {
    title: string
}

export const TitleWithTextField = (
    {title}: TitleWithTextFieldProps
) => {
    return <Stack
        alignItems={"start"}
        width={"100%"}
    >
        <Typography
            variant="caption"
            fontWeight={"600"}
        >
            {title}
        </Typography>
        <Stack height={"4px"}/>

        <TextField
            variant="outlined"
            size={"small"}
            fullWidth
        />
    </Stack>;
}