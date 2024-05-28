# my-digital-watch

# Digital Watch

ALLHAMD-U-LILLAH! I am very excited to share my latest project, **'Digital Watch'**, which I developed using HTML, CSS, TypeScript, and Node.js. This project is a functional and aesthetically pleasing digital watch that displays the current time, day, and date, dynamically updating every second.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- Displays the current time in hours, minutes, and seconds
- Shows AM/PM indicator
- Displays the current day of the week
- Shows the current date in month, day, and year format
- Automatically updates every second

## Installation

To install and run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/my-digital-watch.git
    cd my-digital-watch
    ```

2. **Install the dependencies**:
    ```bash
    npm install
    ```

3. **Build the project**:
    ```bash
    npm run build
    ```

4. **Start the server**:
    ```bash
    npm run serve
    ```

5. **Open the project in your browser**:
    Navigate to `http://localhost:8080` (or the port specified by your server) to view the digital watch.

## Usage

To use the Digital Watch in your project, you can follow these steps:

1. **Include the CSS**:
    Link the `styles.css` file in your HTML:
    ```html
    <link rel="stylesheet" href="path_to_styles.css">
    ```

2. **Include the JavaScript**:
    Link the compiled JavaScript file in your HTML:
    ```html
    <script src="path_to_main.js"></script>
    ```

3. **HTML Structure**:
    Ensure your HTML has the correct structure:
    ```html
    <div class="digitalClock">
        <div class="time">
            <div class="leftSide">
                <span id="hours">00</span>
            </div>
            <div class="rightSide">
                <div class="rightTop">
                    <span id="dots">:</span>
                    <span id="minutes">00</span>
                </div>
                <div class="rightBottom">
                    <span id="seconds">00</span>
                    <span id="ampm">PM</span>
                </div>
            </div>
        </div>
        <div class="dateInfo">
            <span id="dd">Sunday</span>
            <span id="ddmmyy">January 1, 2020</span>
        </div>
    </div>
    ```

4. **Initialize the Clock**:
    Ensure you initialize the clock function in your script:
    ```typescript
    import { clock } from 'path_to_your_ts_file';

    document.addEventListener("DOMContentLoaded", () => {
        clock();
        setInterval(clock, 1000);
    });
    ```

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch**: `git checkout -b feature/YourFeature`.
3. **Commit your changes**: `git commit -m 'Add some feature'`.
4. **Push to the branch**: `git push origin feature/YourFeature`.
5. **Open a pull request**.

## Acknowledgements

- Thanks to all contributors and users for their valuable feedback and support.
- Inspired by various digital clock designs and open-source projects.

