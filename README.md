# lotto-app

# DONE

## Project setup

Used *vue create app* to create app qith typescript, vuex, router and basic test setup.

## GraphQL request setup

Using graphql-request as lightweight option to do graphQL requests.

## Proxy

Using lcp proxy <https://github.com/garmeeh/local-cors-proxy>

run `lcp --proxyUrl https://nj.lotto.com/graphql` locally

then use `@/schemas/apiUrls.graphQlEp_with_proxy`

## Layout

Using grid Layout to place content pieces alternately on left and right side

## Testing

Unit testing is done Jest

# TODO

- create service to make api requests ✔️
- request data filtered for PowerBall ✔️
  - setup proxy if neccesary ✔️
  - maybe avoid multiple api calls
    - use localStorage or vuex store as cache (check Apollo)
- display powerball data in PowerBall component ✔️
- write unit tests for services ✔️
- make things pretty ✔️(close enough)
- manually check responsiveness on different devices ("cou can skip browsertests")✔️
  - use lambdatest or deploy

- lorem ipsum content for landingpage and poweball page✔️
- load chunks from ep ✔️

# 🚧 not yet happy with 🚧

- type security in components and api request
  - maybe need to use apollo
- element slider not as re-usable as initally planned
  - needs some refactoring
