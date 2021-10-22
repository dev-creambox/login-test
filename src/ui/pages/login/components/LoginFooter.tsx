import {Button, Stack, Typography} from "@mui/material";

export function LoginFooter() {
    return <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
    >
        <Typography variant="caption">
            Don't have an account yet?
        </Typography>
        <Button size={"small"}>
            <Typography
                variant="caption"
                sx={{
                    textTransform: "none"
                }}
            >
                Join Iris
            </Typography>
        </Button>
    </Stack>;
}