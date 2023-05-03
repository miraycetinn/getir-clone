import React from 'react';
import {AppBar, createTheme, ThemeProvider, Toolbar, Typography, Button , Icon, Stack} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#5d3ebc',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "white",
                },
                startIcon: {
                    color: "white",
                },
            },
        },
        MuiIcon: {
            styleOverrides: {
                root: {
                    color: "white",
                },
            },
        },
    },
});

function TopBar() {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" sx={{ height: 45 }}>
                <Toolbar sx={{ height: 10 }}>
                    <Stack direction="row" spacing={2}>
                        <Button>
                            <svg data-testid="icon" color="#FFFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="style__Icon-sc-__sc-hqksj3-1 bslsXn" width={"18"}>
                                <path d="M16 0C7.127 0 0 7.127 0 16s7.127 16 16 16c8.873 0 16-7.127 16-16S24.873 0 16 0zm12.945 14.545h-5.818c-.291-4.073-1.6-7.855-3.927-11.2 5.236 1.309 9.164 5.818 9.745 11.2zm-8.727 0h-8.436c.291-3.927 1.745-7.709 4.218-10.764 2.473 3.055 3.927 6.836 4.218 10.764zm-7.563-11.2a23.387 23.387 0 0 0-3.782 11.2H3.055c.582-5.382 4.509-9.891 9.6-11.2zm-9.6 14.11h5.818c.291 4.073 1.6 7.855 3.927 11.2-5.236-1.309-9.164-5.818-9.745-11.2zM16 28.218c-2.473-3.2-3.927-6.836-4.218-10.764h8.582c-.436 3.927-1.891 7.709-4.364 10.764zm3.345.437c2.182-3.345 3.636-7.127 3.927-11.2h5.818c-.727 5.382-4.655 9.891-9.745 11.2z" className="style__Path-sc-__sc-hqksj3-2"/>
                            </svg>
                            Language
                        </Button>
                        <Button>
                            <svg data-testid="icon" color="#FFFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="style__Icon-sc-__sc-hqksj3-1 bslsXn" width={"18"}>
                                <path d="M16 0C7.127 0 0 7.127 0 16s7.127 16 16 16c8.873 0 16-7.127 16-16S24.873 0 16 0zm12.945 14.545h-5.818c-.291-4.073-1.6-7.855-3.927-11.2 5.236 1.309 9.164 5.818 9.745 11.2zm-8.727 0h-8.436c.291-3.927 1.745-7.709 4.218-10.764 2.473 3.055 3.927 6.836 4.218 10.764zm-7.563-11.2a23.387 23.387 0 0 0-3.782 11.2H3.055c.582-5.382 4.509-9.891 9.6-11.2zm-9.6 14.11h5.818c.291 4.073 1.6 7.855 3.927 11.2-5.236-1.309-9.164-5.818-9.745-11.2zM16 28.218c-2.473-3.2-3.927-6.836-4.218-10.764h8.582c-.436 3.927-1.891 7.709-4.364 10.764zm3.345.437c2.182-3.345 3.636-7.127 3.927-11.2h5.818c-.727 5.382-4.655 9.891-9.745 11.2z" className="style__Path-sc-__sc-hqksj3-2"/>
                            </svg>
                            Log In
                        </Button>
                        <Button>
                            <svg data-testid="icon" color="#FFFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="style__Icon-sc-__sc-hqksj3-1 bslsXn" width={"18"}>
                                <path d="M16 0C7.127 0 0 7.127 0 16s7.127 16 16 16c8.873 0 16-7.127 16-16S24.873 0 16 0zm12.945 14.545h-5.818c-.291-4.073-1.6-7.855-3.927-11.2 5.236 1.309 9.164 5.818 9.745 11.2zm-8.727 0h-8.436c.291-3.927 1.745-7.709 4.218-10.764 2.473 3.055 3.927 6.836 4.218 10.764zm-7.563-11.2a23.387 23.387 0 0 0-3.782 11.2H3.055c.582-5.382 4.509-9.891 9.6-11.2zm-9.6 14.11h5.818c.291 4.073 1.6 7.855 3.927 11.2-5.236-1.309-9.164-5.818-9.745-11.2zM16 28.218c-2.473-3.2-3.927-6.836-4.218-10.764h8.582c-.436 3.927-1.891 7.709-4.364 10.764zm3.345.437c2.182-3.345 3.636-7.127 3.927-11.2h5.818c-.727 5.382-4.655 9.891-9.745 11.2z" className="style__Path-sc-__sc-hqksj3-2"/>
                            </svg>
                            Sign Up
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default TopBar;





