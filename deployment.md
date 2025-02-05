# Deployment 

1. Run `npm run build` on main branch on local machine
2. `scp -rv dist pcs@ssh.ocf.berkeley.edu:/home/p/pc/pcs/distLander`
3. ssh into the server ask Stephen for keys
4. `cd public_html`
5. `rm -rf ./`
6. `cp -r ~/distLander/dist/*`
