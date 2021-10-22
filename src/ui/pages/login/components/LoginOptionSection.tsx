import {Button, Checkbox, FormControlLabel, Stack, Typography} from "@mui/material";

const HIGHLIGHT_COLOR = "#0094FF"

export function LoginOptionSection() {
    return <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
    >
        <FormControlLabel
            control={
                <Checkbox defaultChecked/>
            }
            label={
                <Typography variant="caption">
                    Remember me
                </Typography>
            }
        />
        <Button
            sx={{
                textTransform: "none",
                width: "fit-content"
            }}
            size={"small"}
        >
            <Typography
                variant="caption"
                color={HIGHLIGHT_COLOR}
            >
                Forgot Password?
            </Typography>
        </Button>

    </Stack>;
}