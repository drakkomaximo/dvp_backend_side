# Dvp_backend_side
This is a backend side for dvp test fullstack.

Steps to use the application:

1) Install MySQL on your computer, you can use this link: https://dev.mysql.com/downloads/installer/
2) Download the repository to your local machine using the command:
```
git clone https://github.com/drakkomaximo/dvp_backend_side.git
```
3) Use the following command to rebuild the `node_modules` folder:
```
npm i
```
4) Start the application from scratch with:
```
npm run dev
```
5) You should create the .env file using the .env.template file as a template. Set the environment variable
```
PORT=4000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=@Dvp1234
DB_DATABSE=githubUsersdb
GITHUB_URL=https://api.github.com
GITHUB_PERSONAL_TOKEN=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
```
6) If the application is downloaded correctly, you should see this message:
![image](https://github.com/drakkomaximo/dvp_backend_side/assets/57687342/ce10033d-91ca-4676-bab7-3b871be411ad)

Once the database is started, you can test it locally only with the [Frontend side](https://github.com/drakkomaximo/dvp_frontend_side).

<hr>

## Note: 
GitHub API has rate limits on API calls. If the token in the environment variable doesn't work initially, you can use the auxiliary token provided in the .env.template file.

If, for any reason, the auxiliary token also doesn't work, you should create a new token with a GitHub account following these steps: https://docs.github.com/es/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens


