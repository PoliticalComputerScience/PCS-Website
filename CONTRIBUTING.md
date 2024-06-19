# Contributing

## Before You Start Coding

- Set up `git`, `node.js` and this project as described in [the README](./README.md)
- Create a new branch with the name `<your-name>/<feature>` with `git checkout -b <your-name>/<feature>`
- Style note: Branch names should be short. For instance something like `vivianwilde/contributing-guide` would be a good branch name
- Make your changes to the code, browse stackoverflow in despair, etc. etc. (basically, the usual development steps)
- Test your code, both by inspecting the running site and with automated tests (TODO: Our testing framework and guidelines)

## Once Your Code is Ready

- Once you're confident your code is working correctly:
- Run `npm run format` to format the code
- **Add** the files you want to commit using `git add`, using [these instructions](https://github.com/git-guides/git-add)
- Run `git commit -m <message>` where message is a short (< 1 sentence) summary of your changes
- Run `git push` to push the changes
- If `git push` fails, try `git push origin/<your-branch-name>`. If that also fails, you have bigger problems.

## Create a Pull Request (PR)

- Open the repo page [](github.com/PoliticalComputerScience/PCS-Website) in the browser
- Follow [these instructions](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#creating-the-pull-request) to create a pull request
- Note that the _base_ branch should be set to _main_, and the _comparing_ branch should be the one you made your changes in
- Give the Pull Request a descriptive title, and fill out the fields in the body (some may not apply, but try to fill out all that are relevant)
- Click the friendly green **create pull request** button

### PR Feedback Cycle

- When we review your PR, we might ask questions or give you feedback in the comments. You should get email notifications about those.
- If we ask you to edit your PR, you can do that by going back to your branch (by running `git checkout -b <branch-name>` in the terminal from within the cloned repository), making the edits, and then going through the steps in [Once Your Code Is Ready](#once-your-code-is-ready) to push them.
- Once you've made the edits, just reply to our comments on the PR, and we'll take a look again.
- Eventually this cycle ends and we'll merge your changes and they'll show up on the website proper, at which point you can and should celebrate with reckless abandon.
