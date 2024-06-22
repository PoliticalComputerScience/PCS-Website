# Political Computer Science @ Berkeley Website

Our website is open source! There is a lot of info you need to know to contribute, including best practices when coding, the process of code reviews, and (especially if you're new to web dev or `git`) set up. **Please** read through this whole `README` if you would like to contribute to our package!
If you want to write code for our package, after you've gone through these steps make sure to look through our [contributing guidelines](./CONTRIBUTING.md) to understand what the procedure for that looks like.

## Setup

1. **Make sure you have [`git`](https://www.git-scm.com/downloads) installed.** Then open a terminal in `git bash` (this should be an app on your computer).
2. **Make sure you have [`node.js`](https://nodejs.org/en/download/package-manager) installed.** You should install the long term support (LTS) version that is recommended. Please make sure your `node` version is at least `20.11.1` and your `npm` version is at least `10.7.0`. You can check this by running the following command in `git bash`:

```
node -v && npm -v
```

3. **Create a [GitHub](https://github.com) account** and follow [these steps](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git) for configuring `git` to your GitHub. Please make sure you've done these steps correctly. You can verify `git` is connected to the right account by running the following command in `git bash`. This should print out the name you set and the email address associated with your GitHub account.

```
git config --get user.email && git config --get user.name
```

5. **Clone the repository** to a directory on your computer as described [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

6. **Install dependencies.** Navigate to the newly-cloned package via terminal by running `cd PCS-Website` (or a different package name/path if you named it differently or switched directories). Once in `PCS-Website`, run the following command
   `npm install && npm run dev`
7. **Make sure the site runs correctly.** A link should appear in your terminal that looks like this `Local:   http://localhost:5173/`. Open that link in your browser (keep in mind your link may not have `5173`) at the end. You should see the current draft of the PCS website running!
