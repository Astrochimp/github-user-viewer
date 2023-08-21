# Front End Interview Project

Hello! If you're reading this, that means you've passed our initial phone screen. Congrats! We're excited to get to know
you more and see if you'd be a good fit for Real.

We would like you to implement the following project to help us assess your real-world programming knowledge.

## The Project

We're going to create an application that uses the public Github API to render Github users and display information
about their account.

The application will consist of two pages:

1. A Home Page, where I can see a list of users.
2. A User detail page, where I can view specific information for a user.

The home page will query the [users](https://api.github.com/users) endpoint and render each user. We should:

- show their avatar
- show their username

When I click on a user, I will be taken to a dedicated user detail page. On that page, I should see:

- their repos, which is the main content of the page.
- their organizations
- their first 5 followers, and include a count of total followers.

Github provides a rate limit for API users without authentication to a max of 60 requests per hour. You may want to mock
the response or use a personal access token to fetch the API.

We have provided you with a **create-react-app** template project, however, please feel free to use whatever
technologies / frameworks / libraries that you are most comfortable with. We just ask that **this be implemented in
React**, and not in another framework, like Vue/Angular/Ember/etc.

**Note:** Please add tests! The project will be considered incomplete if you do not have any tests written.

## What are we looking for?

Some questions to think about:

- How can you make your code reusable?
- How can we adhere to proper separation of concerns?
- Are we using modern development practices?
- Is my page mobile responsive?

We would also like to consider the following:

- How can I make it easy for any engineer to create a detail page?
- How can I handle error cases, like 404s, automatically?
- All in all: **how can I construct the beginnings of a _system_ that will make other engineers' lives easier?**

## Your Submission

After you have implemented the two pages, please write an overview of what you have implemented, what were any tradeoffs
you made, and how you would extend this if you had more time. Please include this in the OVERVIEW.md file.

## Conclusion

Please feel free to reach out to the recruiter if you have any questions or if anything is unclear. We're excited to see
what you come up with! Good luck!

## License

At CodeScreen, we strongly value the integrity and privacy of our assessments. As a result, this repository is under exclusive copyright, which means you **do not** have permission to share your solution to this test publicly (i.e., inside a public GitHub/GitLab repo, on Reddit, etc.). <br>

## Submitting your solution

Please push your changes to the `main branch` of this repository. You can push one or more commits. <br>
