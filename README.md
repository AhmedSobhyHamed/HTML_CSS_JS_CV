# HTML_CSS_JS_CV

Using HTML, CSS and JS to create a CV page.
![](repo-image/name.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [License](#license)
- [Contact](#contact)

  <!-- intro -->

## Introduction

This project is front-end project using HTML, CSS and JavaScript to create a responsive web pages.

  <!-- technologies was used with links if available -->

## Features

- Using pre-made CSS libraries.
  <br>
  Example:

  ```css
  @import url("./normalize.css");
  @import url("./generalroles.css");
  @import url("./lib/container.css");
  @import url("./lib/flexCard.css");
  @import url("./lib/titleLayers.css");
  @import url("./lib/grid.css");
  @import url("./lib/navList.css");
  ```

- Create responsive web pages.
  <br>
  Example:

  ```css
  @media (min-width: 578px) {
    .ASH-container {
      width: 560px;
    }
  }
  ```

- Create navbar responsive menu.
  <br>
  Example:

  ```html
  <nav>
    <div class="ASH-container ASH-flx-card ASH-flx-changeable">
      <div class="logo"></div>
      <div class="sections ASH-nav-list ASH-nav-list-body">
        <button class="ASH-nav-list ASH-nav-icon">
          <span></span>
        </button>
        <ul class="ASH-nav-list ASH-nav-ul-row">
          <li><a href="#About">About</a></li>
        </ul>
      </div>
    </div>
  </nav>
  ```

- Create accordion with CSS.
  <br>
  Example:

  ```html
  <div class="">
    <div class="ASH-flx-card ASH-flx-changeable skilltab gray">
      <p><span class="bold">Languages:</span></p>
      <button class="btn-plus">
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="smoth">
      <ul class="contact-list skilllist">
        <li>
          <span>Arabic</span>
        </li>
      </ul>
    </div>
  </div>
  ```

- Using the flexbox system.
  <br>
  Example:

  ```css
  .ASH-nav-list.ASH-nav-icon {
    width: var(--ASH-nav-list-icon-width);
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    align-content: space-evenly;
    ...;
  }
  ```

- Using the grid system.
  <br>
  Example:

  ```css
  .ASH-grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, var(--ASH-grid-min-card-width));
    justify-content: space-evenly;
    row-gap: var(--ASH-grid-gap-size);
  }
  ```

  <!-- usage or how to interact with this technologies like api end points and what they do -->

## Usage

**You can interact with the project via this link**
[web page on github](https://ahmedsobhyhamed.github.io/ HTML_CSS_JS_CV/).
<br>
**[see an example for user interaction.[video]](http://youtube.com)**
<br>
**[demonstration video for developer communit](https://www.youtube.com/watch?v=QrMDQQKTNyU)**

## Technologies Used

- HTML 5.
- Pure CSS.
- Use font awesome CSS library.
- vanilla JavaScript.

  <!-- about the project and a digram of how it work -->

## Project Structure

- JS files:
  - js/script.js
- CSS general rules:
  - projectPage_folder/css/normalize.css
- CSS custom style:
  - css/generalroles.css
  - css/style.css
  - css/lib/\*.css
- HTML files:
  - index.html

    <!-- licance -->

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details

  <!-- contacts -->

## Contact

Created by [Ahmed Sobhy]:

- email: [ahmed.s.abdulaal@gmail.com](mailto:ahmed.s.abdulaal@gmail.com)
- linkedin: [Ahmed Sobhy](https://www.linkedin.com/in/ahmed-sobhy-b824b7201/)
  <br>
  feel free to contact me!
