import * as React from 'react';

import Link from '@mui/material/Link';

import AppBarStyle from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';

export default function AppBar() {
    return (
        <AppBarStyle
            position="static"
            elevation={12}
            sx={{
                width: '80%',
                margin: 'auto',
                borderBottomLeftRadius: 100,
                borderBottomRightRadius: 100,
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                    ml: 10,
                    mr: 10,
                }}
            >
                <Link href="/" underline="none" color="white">
                    Bank
                </Link>

                <Link href="/calculator" underline="none" color="white">
                    Loan Calculator
                </Link>
            </Toolbar>
        </AppBarStyle>
    );
}
