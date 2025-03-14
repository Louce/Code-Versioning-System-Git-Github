
<a id="readme-top"></a>

-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Unlicense License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Louce/Exercise-2.Code-Versioning-System-Git-Github">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Exercise-2.Code-Versioning-System-Git-Github</h3>

  <p align="center">
    Exercise 2 Report
    <br />
    <a href="https://github.com/Louce/Exercise-2.Code-Versioning-System-Git-Github"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Louce/Exercise-2.Code-Versioning-System-Git-Github">View Demo</a>
    &middot;
    <a href="https://github.com/Louce/Exercise-2.Code-Versioning-System-Git-Github/issues/new?labels=bug&template=bug-report---.md">Report Issue</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Welcome to Exercise 2 , designed to guide you through the essential steps of working with Git repositories. This exercise aims to provide hands-on experience in initializing a repository, making changes, managing branches, and understanding the workflow used in the industry.

What You'll Learn
* Initialization of a Repository: Understand the initial setup process for a Git repository .
* Basic Workflow: Practice the basic workflow of making changes and committing them to the repository.
* Branch Management: Understand the purpose of branches and how to work with them while following the GitHub flow strategy.
* Pull Requests: Learn the workflow used in the industry for reviewing code and merging changes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

# Git & GitHub Workflow Guide

## 1. Create a Local Git Repository and Link to GitHub

### Create a New Directory:
```bash
mkdir exercise2-repo && cd exercise2-repo
```

### Initialize Git Repository:
```bash
git init
```

### Create `index.js` File:
```javascript
console.log("Hello, Git!");
```

### Stage and Commit Changes:
```bash
git add . && git commit -m "Initial commit"
```

### Link to GitHub Repository:
1. Create a new repository on GitHub (e.g., `exercise2-repo`).
2. Connect the local repository to GitHub:
   ```bash
   git remote add origin https://github.com/[username]/exercise2-repo.git
   git push -u origin main
   ```

---

## 2. Make Changes, Commit, and Push to `main` Branch

### Update `index.js`:
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("World"));
```

### Stage, Commit, and Push:
```bash
git add . && git commit -m "Add greet function"
git push origin main
```

---

## 3. Create a New Branch and Work on It

### Create and Switch to `new-feature` Branch:
```bash
git checkout -b new-feature
```

### Create `utils.js`:
```javascript
export const sum = (a, b) => a + b;
```

### Update `index.js` to Use `utils.js`:
```javascript
import { sum } from './utils.js';
console.log("Sum:", sum(2, 3));
```

### Stage, Commit, and Push the Branch:
```bash
git add . && git commit -m "Add utility functions"
git push -u origin new-feature
```

---

## 4. Switch Between Branches and Follow GitHub Flow

### Return to `main` Branch:
```bash
git checkout main
```

### Optional: Make Changes in `main` and Return to `new-feature`:
```bash
git checkout new-feature
```

---

## 5. Create a Pull Request (PR) and Merge

### Push Latest Changes to `new-feature`:
```bash
git push origin new-feature
```

### Create a PR on GitHub:
1. Go to the **Pull Requests** tab on GitHub.
2. Click **New Pull Request**.
3. Set `new-feature` as the **compare branch** and `main` as the **base branch**.
4. Add a description and click **Create Pull Request**.

### Merge the PR:
1. Review the changes (simulate a review if needed).
2. Click **Merge Pull Request** to merge `new-feature` into `main`.
3. Delete the merged branch on GitHub (optional).

---

### Notes:
- Replace `[username]` with your actual GitHub username.
- Use `git status` to check your current branch and changes.
- Always pull the latest changes from `main` before merging to avoid conflicts.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [x] Feature
    - [x] Function
    - [x] Utils.js

See the [open issues](https://github.com/Louce/Exercise-2.Code-Versioning-System-Git-Github/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- LICENSE -->
## License

Distributed under the Unlicense License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Dendi - Rivaldydendy459@.gmail.com

Project Link: [https://github.com/Louce/Exercise-2.Code-Versioning-System-Git-Github](https://github.com/Louce/Exercise-2.Code-Versioning-System-Git-Github)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Louce/Exercise-2.Code-Versioning-System-Git-Github.svg?style=for-the-badge
[contributors-url]: https://github.com/Louce/Exercise-2.Code-Versioning-System-Git-Github/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Louce/Exercise-2.Code-Versioning-System-Git-Github.svg?style=for-the-badge
[forks-url]: https://github.com/Louce/Exercise-2.Code-Versioning-System-Git-Github/forks
[stars-shield]: https://img.shields.io/github/stars/Louce/Exercise-2.Code-Versioning-System-Git-Github.svg?style=for-the-badge
[stars-url]: https://github.com/Louce/Exercise-2.Code-Versioning-System-Git-Github/stargazers
[issues-shield]: https://img.shields.io/github/issues/Louce/Exercise-2.Code-Versioning-System-Git-Github.svg?style=for-the-badge
[issues-url]:https://github.com/Louce/Exercise-2.Code-Versioning-System-Git-Github/issues
[license-shield]: https://img.shields.io/github/license/Louce/Exercise-2.Code-Versioning-System-Git-Github.svg?style=for-the-badge
[license-url]:https://github.com/Louce/Exercise-2.Code-Versioning-System-Git-Github/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/dendyrivaldi/
[product-screenshot]: images/screenshot.png

