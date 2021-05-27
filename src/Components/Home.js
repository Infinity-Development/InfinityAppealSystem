import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {oauth} from"../App"
import { mdiDiscord } from '@mdi/js';
import Icon from "@mdi/react";

const crypto = require('crypto');

class Home extends Component {


    render() {
        const url = oauth.generateAuthUrl({
            scope: ["identify", "guilds"],
            state: crypto.randomBytes(16).toString("hex"), // Be aware that randomBytes is sync if no callback is provided
        });
        return (
            <Grid container alignItems={"center"} justify="center" direction="column">
                <Grid item xs={12}>
                    <div className="cus_box">
                      <h1>Hello There, Welcome</h1>
                      <p>If you find yourself browsing or using this site, you should be dissapointed. Here at Infinity we strive in providing our users a safe, curtious, drama free community and only ask that you follow a few simple <a href=""> rules </a>.</p>
                    </div>
                    <div className="cus_box">
                      <h1>What can i do?</h1>
                      <p>If you find yourself here, you should be dissapointed. Here at Infinity we strive in providing our users a safe, curtious, drama free community and you obviously did something to violate our rules or generally piss us off.</p>
                    </div>
                    <div className="cus_box">
                      <h1>Useful Info</h1>
                      <p>
                          1. 
                      <br />
                          2.
                      <br />
                      </p>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Button startIcon={<Icon size={1} path={mdiDiscord}/>} href={url} size={"large"} className={"button"}>Login with Discord</Button>
                </Grid>
            </Grid>
        );
    }
}

export default Home;
