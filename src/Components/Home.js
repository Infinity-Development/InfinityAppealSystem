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
                    <Button startIcon={<Icon size={1} path={mdiDiscord}/>} href={url} size={"large"} className={"button"}>Login with Discord</Button>
                </Grid>
                <Grid item xs={12}>
                    <div className="cus_box">
                      <h1>Hello There, Welcome</h1>
                      <p>
                          If you find yourself browsing or using this site, you should be dissapointed. 
                          Here at Infinity we strive in providing our users a safe, curtious, drama free community and only ask that you follow a few simple <a href="https://docs.botlist.site/server/rules/"> rules. 
                          You have clearly done something to violate them or piss us off </a>.
                      </p>
                    </div>
                    <div className="cus_box">
                      <h1>What can i do?</h1>
                      <p>
                          You may appeal your ban by logging in using the button below and filling out the form provided which will then be sent to our staff for review.
                          Our Staff may approve or deny your ban appeal based on your actions and reason for ban and how much it may or may not have an effect on our community.
                          We do not guarantee that your ban appeal will be approved and your ban be lifted if you feel you have been banned for an unjust cause please <a href="support@infinitybotlist.com">Contact Us</a>
                      </p>
                    </div>
                    <div className="cus_box">
                      <h1>Useful Info</h1>
                      <p>
                          1. Abuse of this system will result in a Permanent Ban
                      <br />
                          2. DO NOT Spam or Harass our Staff about your Appeal Request
                      <br />
                          3. Appeals will be handled in the order which they are recieved.
                      <br />
                      </p>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default Home;
