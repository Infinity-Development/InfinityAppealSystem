import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";

class Success extends Component {
    render() {
        return (
            <Grid item>
               <div className="cus_box">
                  <h1>Success, Ban Appeal Submitted!</h1>
                  <p>
                     Please allow some time for our staff to review your appeal request. Abusing this system or spamming their DMs will result in a perma-ban.
                  </p>
               </div>
            </Grid>
        );
    }
}

export default Success;
