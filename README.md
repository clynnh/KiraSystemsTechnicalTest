# Kira Systems Technical Test


## Problem: Double Booked

When maintaining a calendar of events, it is important to know if an event overlaps with another event.

Given a sequence of events, each having a start and end time, write a program that will return the sequence of all pairs of overlapping events.


## Solution Discussion

### Technology

Node.js

### Setup
To run this project, install Node.js and run

node index.js

### Execution Details

The data folder contains files with JSON data that represents a sequence of 5 events with a description, start and end times and each file will be read when the program runs.

The output for each file is separated by the following pattern ------ filename ------

This was done to quickly test and demo the program.

### Implementation Details

I have not done any functional programming professionally so I tried to incorporate key concepts for functional programming in JavaScript.

(Line 4): Started with a basic function to return the date and time in milliseconds from String

(Line 8 - 11): Return a newly assigned object to ensure the parameter isn't mutated

(Line 15 - 23): Return a boolean if two event objects overlap

(Line 27 - 43): Recursively loop through sequence of events so we compare all objects against each other and return an array that includes all combinations of events where each combination is distinguished by a boolean on if it is overlapping.

(Line 46 and 51): Read folder and file system so we can process data through Node.js file access.

(Line 61): Use higher order function "map" and pass in function to convert dates in String to integers for comparison.

(Line 60 - 64): Use sequence of events with dates in milliseconds and recursively compare events to each other to get a new array of all combinations of events with a distinguishing boolean if a pair overlaps

(Line 64 - 65): Filter out data so only events that overlap are shown (This is the correct place to return the function to return a sequence of all overlapping events, but I thought it would be easier to review/test by writing the overlapping events in the log)

(Line 66 -67): Use "map" to print out overlapping events



