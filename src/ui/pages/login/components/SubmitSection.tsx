import {Button, Stack, Typography} from "@mui/material";

export function SubmitSection() {
    return <Stack>
        <Button
            variant="contained"
            size={"large"}
            sx={{
                textTransform: "none",
            }}

        >
            <Typography variant="caption">
                Sign in
            </Typography>
        </Button>
    </Stack>;
}