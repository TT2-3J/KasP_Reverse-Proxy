# KasP_Reverse-Proxy

## Set Up Reverse Proxy

1. clone this project into your computer 
`git clone https://github.com/TT2-3J/KasP_Reverse-Proxy.git`

2. In your frontend project, edit the `.env` file and change the variable to reference your backend from `http://localhost:8080` to `http://localhost:3000.`

3. Run your backend and frontend:
   - To run your backend, navigate to the backend project directory and use the appropriate command 
   - To run your frontend, navigate to the frontend project directory and use the appropriate command (e.g., npm run dev).

4. Run the `KasP_reserve-proxy` project that you cloned earlier. You might need to navigate to its directory and run any setup or start commands specific to that project. using `node index.js`

Finally, open a web browser and navigate to `http://localhost:3000` to check if everything is working as expected.




> Please note: this setup acts as a reverse proxy on your VM. Ensure that your development project configurations are set up correctly for this to work seamlessly.
