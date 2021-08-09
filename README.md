# Job Portal

# About the project

This project is a Single Page Application (SPA) that shows all the jobs matching against a worked.



## Tech Stack

- [React](https://reactjs.org)
- [Redux](https://redux.js.org/) - For state management


## Running the Project
```shell
$ git clone https://github.com/sumitd94/job-portal.git
$ cd job-portal
$ yarn
$ yarn start
```

Here, the project uses [yarn](https://yarnpkg.com/) as the package manager. If you are using [npm](https://www.npmjs.com/) as the package manager, then follow these steps to run the project locally

```shell
$ git clone https://github.com/sumitd94/job-portal.git
$ cd job-portal
$ npm i
$ npm start
```

When you run the command `yarn start` or `npm start`, this will start your local servers at `http://localhost:3000` where you can view the project

This is how the main screen looks like

![image](https://user-images.githubusercontent.com/29303618/120064534-4294cd00-c08a-11eb-87e2-ef577b9b84fd.png)


This screen lists the jobs which are matched against this worker. Clicking on each job image will redirect you to its job details page.

This is how each of the job details page looks like

![image](https://user-images.githubusercontent.com/29303618/120064614-bfc04200-c08a-11eb-913e-4570a3718e7c.png)

It shows the details like

- Hourly rate
- Job timings
- location
- reporting manager
- Requirements (if any)

We have two actions here, either to `Accept the job` or `Reject the job`. Clicking on each of the action will do the needful.

> This page is completely responsive 📱


## Testing

There are Unit tests in place for the components. To run the tests, run the below command

```shell
$ yarn test
```

running this command will run all the test suits for this application and the result will look something like this

![image](https://user-images.githubusercontent.com/29303618/120077124-755cb680-c0c6-11eb-9427-df3e61219051.png)

