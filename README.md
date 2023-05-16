# Simple Maze Generator
This is a maze generator project implemented in JavaScript using the p5.js framework. The generator utilizes the Depth-First Search (DFS) algorithm to create a maze.

## Description
The Maze Generator project aims to generate a random 
maze by employing the DFS algorithm. T
he maze is represented as a grid of cells, where each cell is path with 4 walls
The generator starts at a given cell and explores the neighboring cells incrementaly using stack, 
marking visited cells along the way. By backtracking whenever a dead-end is reached, the algorithm creates a maze with a single possible path between any two cells.

The p5.js framework is used for visualization purposes, providing an interactive environment to showcase the maze generation process. 
It allows rendering the maze grid on a canvas.

Usage
To use the maze generator, follow these steps:

Clone the repository:
bash
Copy code
git clone https://github.com/your-username/maze-generator.git
Open the index.html file in a web browser.

The maze generator will start running, and you will see the maze being generated on the canvas.

## Dependencies
The project relies on the following dependencies:

p5.js - a JavaScript library for creative coding and visualization.
All necessary dependencies are included in the repository, so no additional installation steps are required.

## Credits
This project was inspired by the concept of maze generation using the DFS algorithm. 
The implementation and visualization were developed by OldSinner.
