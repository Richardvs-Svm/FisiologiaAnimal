# Animal Physiology Interactive Crossword

An interactive web crossword designed for students taking **Animal Physiology**. Its purpose is to help students remember and practise introductory concepts from **Topic 1: General Principles** (*Tema 1: Principios generales*).

The activity focuses primarily on **Bloom's Taxonomy Level 1: Remembering**. Students recall terms related to physiological regulation, homeostasis, feedback systems, acclimation, adaptation, stress, and other foundational ideas before moving on to more complex applications.

The crossword and its clues are presented in Spanish. The current version was prepared for **Fisiología de Animales 2027-1, Grupo 5417**.

## Who is it for?

This activity is intended for:

- Undergraduate Animal Physiology students.
- Teachers looking for a low-stakes review activity.
- Students who want to repeat the exercise independently.
- Anyone interested in adapting the project for another course, language, or subject.

No programming knowledge is required to complete the crossword. Students only need a modern web browser on a computer, tablet, or mobile phone.

## What can students do?

Students can:

- Select clues or individual cells and type their answers.
- Switch between horizontal and vertical words at intersections.
- Request a free conceptual hint without losing points.
- Reveal a limited number of letters when they need additional help.
- Check an individual word or the complete crossword.
- Follow their progress and current score.
- Close the page and continue later on the same browser and device.
- Restart the entire activity and try again with a score of 100.
- Print the crossword as a traditional paper activity.
- Produce a completion card that can be printed, saved as a PDF, or captured in a screenshot for submission through Google Classroom.

## Scoring and revealed letters

Every attempt begins with **100 points**.

- A conceptual hint does not reduce the score.
- Each revealed letter reduces the score by one point.
- Words longer than eight letters allow a maximum of three revealed letters.
- Words of eight letters or fewer allow a maximum of two revealed letters.
- Revealed letters are marked with a red dot.
- Restarting the activity clears the answers and restores the score to 100.

The lowest possible score is 50 if a student uses every available letter reveal.

This scoring system is intended to encourage recall rather than punish mistakes. Repeating the activity is part of the learning process.

## How the website works

The project is a small static website made with standard HTML, CSS, and JavaScript. It does not require a database, student account, installation process, or paid web service.

- `index.html` contains the page structure and visible interface.
- `styles.css` controls the appearance, responsive mobile layout, crossword grid, and printing formats.
- `script.js` contains the answers, clues, conceptual hints, crossword coordinates, scoring rules, checking system, and saved-progress logic.

The JavaScript creates the 23 × 23 crossword grid when the page opens. It connects each clue to its corresponding cells, checks intersections, handles keyboard and touch input, and calculates the score.

Progress is stored with the browser's `localStorage` feature. Information remains on the student's device and is not sent to the teacher or to an external server. The student's name is requested only for the printable completion card and is also stored locally.

Because this is a local, honour-based practice activity, it does not automatically send grades to Google Classroom and is not intended to provide tamper-resistant assessment records.

## Running the crossword locally

Download the project files and open `index.html` in a modern browser such as Chrome, Edge, Firefox, or Safari.

The activity does not need an internet connection after the files have been downloaded.

## Publishing with GitHub Pages

1. Create a new repository on GitHub.
2. Upload `index.html`, `styles.css`, and `script.js` to the top level of the repository. You may also upload this README.
3. Open the repository's **Settings** page and select **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/(root)` folder, then save.
6. After GitHub publishes the site, share the resulting web address with students or attach it to a Google Classroom assignment.

No build command or software package is required.

## Adapting the crossword

The puzzle content is defined near the beginning of `script.js` in the `entries` list. Each entry includes:

- A unique identifier.
- The clue number.
- Its horizontal or vertical direction.
- Its starting row and column.
- The answer without accents.
- The answer as it should be displayed.
- The main clue.
- An optional conceptual hint.

Teachers may edit these entries to revise terminology or clues. Creating an entirely different crossword also requires changing the word coordinates so that intersecting letters agree.

The scoring limits can be adjusted in the `revealLimitFor` function, and the initial score is controlled by the `MAX_SCORE` value.

## Original crossword and acknowledgements

The original printable crossword was generated with [EclipseCrossword](https://www.eclipsecrossword.com/). The grid, answers, and clues were subsequently adapted into this interactive web version.

EclipseCrossword is credited as the tool used to create the original puzzle. This project is not affiliated with or endorsed by EclipseCrossword.

## Licence

This project's original code and educational content are released under the **MIT Licence**.

Anyone may use, copy, modify, merge, publish, distribute, sublicense, or sell copies of this project, including for commercial purposes, provided that the copyright and licence notice are retained. The project is provided without warranty.

You are welcome to translate it, change the subject, replace the crossword, modify the visual design, or incorporate the code into another educational resource.

Third-party names and software, including EclipseCrossword, remain subject to their respective owners' terms and trademarks.
