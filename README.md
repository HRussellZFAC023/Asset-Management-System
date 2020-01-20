# CS2815 Team Project
## Umbrella, meta visualisation for everyone
Team 26

Information Technology (IT) Assets Metadata RepositoryThe goal of the project is to develop a holistic Web based system that supports the metadata-based organization of the different source-code related assets of a software company.

Traditionally, software companies rely on source code version control systems (e.g. GitHub and SVN) to store and manage their source code artefacts. However, such systems typically work on a project or product level with a focus on source code versioning. Hence, they provide limited support in providing an “umbrella”, comprehensive view of the source code assets landscape of the whole company. Moreover, their search capabilities, documentation support and managementof assets associations is fairly limited.


Basic tech-stack:

React
Flask
Postgres
Docker

Build and spin up containers:

```shell
$ docker-compose up -d --build
```

Ensure http://localhost:5001/ping works.

Create and seed the database:

```shell
$ docker-compose exec users python manage.py recreate_db
$ docker-compose exec users python manage.py seed_db
```
Ensure http://localhost:5001/users works as well.

Run the tests, flake8 (lint), Black (code formatter), and isort(import sorter):

```shell
$ docker-compose exec users pytest "project/tests" -p no:warnings --cov="project"
$ docker-compose exec users flake8 project
$ docker-compose exec users black project --check
$ docker-compose exec users /bin/sh -c "isort project/*/*.py --check-only"
$ docker-compose exec users black project
$ docker-compose exec users /bin/sh -c "isort project/*/*.py"
```

api-documentation http://localhost:5001/doc
users database http://localhost:5001/users

Build frontend (will later be added to docker):
```shell
cd ./services/client
npm i
npm start
```

# Contribution guide 

1. Checkout
2. Create a branch
3. Add commits; commits must follow the following conventions
   1. Short, yet non-offensive. Offensive/ commits over 500 characters will not be merged
   2. Informitive, of what you have accomplished (NOT "feat - update index.js")
   3. Regular, try to keep each commit atomic to a single feature, bug or quality of life improvement
   4. First word should be a header
      1. feat - a new feature (specify what the feature was, small, each stage of tdd)
      2. bug - fix a bug (specify what the bug was)
      3. qol - quality of life, (update readme, fix typos etc)
   5. library code and build files should be added to git-ignore
4. Repeat until ready to merge
5. Run tests + linters, ensure everything is green
6. Ensure code is documented
7. Open a Pull Request
8. Discuss and review your code
9. Merge
10. Delete

```shell
git clone git@github.com:RHUL-CS-Projects/TeamProject2020_26.git or git pull
git checkout -b asigned_sprint_task_X
git add . 
git commit
// repeat, test
git pull (ensure your branch is up to date)
// resolve conflicts if any
git push
// on github create pull request, assign someone to review your code and give feedback
// branch is merged, you can now delete your branch
```

### As this project uses a docker workflow, devlopers are encouraged to use unix-like systems
