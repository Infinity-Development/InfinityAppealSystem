<h1 align='center'>
  <img src="https://cdn.infinitybots.xyz/images/png/Infinity5.png" height='100px' width='100px' />
  <br> 
  Infinity Bot List Ban Appeals System </h1>
<p align="center">
 Custom React Site made using Axios and the Discord API to provide a Real-Time Ban Monitoring and Appeals System. Inspired By: <a href="https://github.com/sylveon/discord-ban-appeals">sylveon</a>
</p>

<hr>

<h2>Features</h2>

- Custom Embeds and Webhooks sent to a Discord Channel of your Choice using Axios and Discord Webhooks
- Elegant, Minimalistic Style/UI with Responsive and Real Time Error Pages

<hr>

<h2>Self Hosting</h2>

- Have a server where you are an administrator.
- Have a custom bot inside this server. You can register/invte one [here](https://discord.com/login?redirect_to=%2Fdevelopers%2Fapplications)
- Create a #ban-appeals channel (name can be whatever you want) and create a new webhook integration for that channel.
- Fork this repo
- Register an account with [Netlify](https://www.netlify.com/)
- Add your forked repo as a build target
- Fill out the environment variables under Settings > Environment (see .env.example for all the required/optional variables)
```
REACT_APP_CLIENT_ID= // Discord Oauth Application Client ID
REACT_APP_CLIENT_SECRET= // Discord Oauth Application Secret
REACT_APP_WEBHOOK_URL= // The webhook you made for #ban-appeals
REACT_APP_DISCORD_BOT_TOKEN= // Used to check if users are banned and unban them if you click the embed link to do so
REACT_APP_GUILD_ID= // Brands the page with your server name and icon
REACT_APP_JWT_SECRET= // What the tokens for unbanning users are hashed with. Basically a really long password
REACT_APP_SKIP_BAN_CHECK= // Optional, skips the check that only allows submissions from users who are actually banned if set to true
```
- Watch the site build!
- Done!


<hr>

<h2>Available Scripts</h2>
<p>In the project directory, you can <bold>run:</bold></p>

1. `yarn start` 

<p>Which runs the app in the development mode. Open <a href="http://localhost:3000">localhost:3000</a> to view it in the browser.
<br />
The page will reload if you make edits. You will also see any lint errors in the console.</p>

2. `yarn build`

<p>Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed! See the section about <a href="https://facebook.github.io/create-react-app/docs/deployment">deployment</a>for more information.</p>

3. `yarn eject`

<p>Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.</p>
  
<hr>

<h2>Learn More</h2>
<p>You can learn more in the <code>Create React App</code> <a href="https://facebook.github.io/create-react-app/docs/getting-started">Docs</a>.
To learn React, check out the <a href="https://reactjs.org/">React Docs</a>.</p>

<hr>

<h2>Code Splitting</h2>
<p>Information about Code Splitting can be found <a href="https://facebook.github.io/create-react-app/docs/code-splitting">here</a></p>

<hr>
