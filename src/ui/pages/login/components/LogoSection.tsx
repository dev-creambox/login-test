import {Stack, Typography} from "@mui/material";

export function LogoSection() {
    return <Stack>
        <Typography
            variant="h5"
            fontWeight={"bold"}
        >
            IRIS
        </Typography>
        <Typography
            variant="caption"
            sx={{
                opacity: 0.8
            }}
        >
            We make innovation
        </Typography>
    </Stack>;
}