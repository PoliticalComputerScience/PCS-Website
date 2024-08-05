# Contributing

## Before You Start Coding

- Set up `git`, `node.js` and this project as described in [the README](./README.md)
- Create a new branch with the name `<your-name>/<feature>` with `git checkout -b <your-name>/<feature>`
- Style note: Branch names should be short. For instance something like `vivianwilde/contributing-guide` would be a good branch name
- If there isn't an issue [here](https://github.com/PoliticalComputerScience/PCS-Website/issues?q=sort%3Aupdated-desc+is%3Aissue+is%3Aopen) corresponding to what you're working on, create one.
- Please make sure to check that what you're working on is not already "In Progress" or "Code Review" which you can find [here](https://github.com/orgs/PoliticalComputerScience/projects/1/views/2). **Please add yourself as an assignee to the issue you are working on and move it to the "In Progress" phase to avoid conflicts.**
- **Read our [coding best practices doc](https://github.com/PoliticalComputerScience/PCS-Website/blob/main/.github/BEST_PRACTICES/react-typescript-best-practices.md).** It will help a lot with figuring out the structure of our project and contributing expectations.

## Once Your Code is Ready
- Test your code, both by inspecting the running site and with automated tests (TODO: Our testing framework and guidelines)
- Once you're confident your code is working correctly:
- Run `npm run format` to format the code
- **Add** the files you want to commit using `git add`, using [these instructions](https://github.com/git-guides/git-add)
- Run `git commit -m <message>` where message is a short (< 1 sentence) summary of your changes
- Run `git push origin/<your-branch-name>` to push the changes

## Create a Pull Request (PR)
- Open the repo page [](github.com/PoliticalComputerScience/PCS-Website) in the browser
- Follow [these instructions](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#creating-the-pull-request) to create a pull request
- Note that the _base_ branch should be set to _main_, and the _comparing_ branch should be the one you made your changes in
- Give the Pull Request a descriptive title, and fill out the fields in the body (some may not apply, but try to fill out all that are relevant)
- Click the friendly green **create pull request** button
- In the _assignees_ tab in the sidebar, assign someone to review the PR so they get a ping - `@na933950` and/or `@VivianWilde` (i.e Noah and/or Vi) are probably the best people to ping

### PR Feedback Cycle

- When we review your PR, we might ask questions or give you feedback in the comments. You should get email notifications about those.
- If we ask you to edit your PR, you can do that by going back to your branch (by running `git checkout -b <branch-name>` in the terminal from within the cloned repository), making the edits, and then running `git commit --amend` to update your last commit with the new changes.
- Once you've made the edits, just reply to our comments on the PR, and we'll take a look again.
- Eventually this cycle ends and we'll merge your changes and they'll show up on the website proper, at which point you can and should celebrate with reckless abandon.
