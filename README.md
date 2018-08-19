<pre>
#     #                                                           
#  #  # ###### #       ####   ####  #    # ######    #####  ####  
#  #  # #      #      #    # #    # ##  ## #           #   #    # 
#  #  # #####  #      #      #    # # ## # #####       #   #    # 
#  #  # #      #      #      #    # #    # #           #   #    # 
#  #  # #      #      #    # #    # #    # #           #   #    # 
 ## ##  ###### ######  ####   ####  #    # ######      #    ####   
                                                                                                                     
           #####                   #     #                                ### 
          #     #   ##   #    #    #  #  #  ####  #####  #      #####     ### 
          #        #  #  ##  ##    #  #  # #    # #    # #      #    #    ### 
           #####  #    # # ## #    #  #  # #    # #    # #      #    #     #  
                # ###### #    #    #  #  # #    # #####  #      #    #        
          #     # #    # #    #    #  #  # #    # #   #  #      #    #    ### 
           #####  #    # #    #     ## ##   ####  #    # ###### #####     ###
                                                                                                                                                                                                                                            
copy right by Myguddy from http://patorjk.com/software/taag/#p=display&f=Old%20Banner&t=Welcome%20to
</pre>

# Webpack-React
> This project designed for SPA using nodejs backend application.
> Setup for developing and build for production


## Source code structure
```
/project root
├---/asset : static resource for frontend to edit/develop
├---/client : react component
├---/server : nodejs backend application
├---/webpack
|   └---webpack.common.config.js : common webpack configuration
|   └---webpack.dev.config.js : webpack configuration for developer server
|   └---webpack.prd.config.js : webpack configuration for build & deploy
├---.babelrc : for ES6 loader
├---.gitignore
├---package.json
```
### Prerequistie
* install node > 6.0
* install webpack : npm install -g webpack
* install webpack-dev-server : npm install -g webpack-dev-server
* install babel : npm install -g babel

## Operation

### Develope mode for Frontend

* "npm install or yarn install" for install node modules
* run "npm run client or yarn client" to develope based on reactjs
* ==> Edit react component in directory 'client', browser will be automatically updated

### Deveope mode for Server
* run "npm run server or yarn server" to nodejs app and develope
* nodemon will update when edit the component in directory 'server'

### Integrating Frontend and Backend
* run "npm run start or yarn start"


Enjoy ~~
