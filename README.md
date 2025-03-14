# Exercise-2.Code-Versioning-System-Git-Github

# Exercise 2 Report

## Langkah-langkah Pengerjaan:
1. **Inisialisasi Repositori**:  
   - Direktori dibuat dan diinisialisasi dengan Git.  
   - File awal `index.js` ditambahkan.  

2. **Commit ke `main`**:  
   - Fungsi `greet` ditambahkan.  

3. **Branch `new-feature`**:  
   - Ditambahkan utility function `sum` di `utils.js`.  
   - Modifikasi `index.js` untuk menggunakan fungsi baru.  

4. **Pull Request & Merge**:  
   - PR dibuat dan di-merge ke `main` setelah review.  

## GitHub Repository:  
[Link ke Repositori](https://github.com/Louce/Exercise-2.Code-Versioning-System-Git-Github)



<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
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
    <a href="https://github.com/Louce/Exercise-2.Code-Versioning-System-Git-Github/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/Louce/Exercise-2.Code-Versioning-System-Git-Github/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
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


Use the `BLANK_README.md` to get started.

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



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors:

<a href="https://github.com/othneildrew/Best-README-Template/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=othneildrew/Best-README-Template" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the Unlicense License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
