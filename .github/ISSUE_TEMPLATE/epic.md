# <Epic Title>

## Introduction

- A summary of what the features you’re building are for and why you’re building them
- What metrics you are trying to improve
- Links to specific documentation
- Early wireframes for frontend changes

## Product requirements

An explanation of intended user functionality and acceptance criteria.

This epic is considered done once these requirements are satisfied.

1. a
2. a
3. a

## Technical requirements

Engineering Requirements:

1. High-level implementation details
2. Such as, API endpoints for x y z
3. Or, SNS topic to do a b c

## Design requirements (optional)

Requirements for collaboration with our UX designer.

## User Stories

[ ] Another

---

# Programmatic Policy & Rule Updates

## Introduction

Today, teams use the `panther-cli` to locally test and create analysis packages to upload via the UI. To better accommodate developer workflows when developing Rules and Policies, teams need an automated way to push updates into Panther directly. This feature will add this functionality both into the Panther API and in the CLI.

## Product requirements

1. A user can type `panther-cli update` to upload the latest Rules and Policies
2. A user can decide which analysis type to upload with filters
3. A user can decide which base path to upload from

## Technical requirements

Engineering Requirements:

1. Add a new command to the `panther-cli` to access the Lambda endpoint directly
2. Set a bit on the backend indicating the policy was uploaded and not created in the UI

## Design requirements (optional)

1. Show an info banner in the rule/policy editor UI indicating it was either uploaded or created in the UI

## User Stories

[ ] TODO
