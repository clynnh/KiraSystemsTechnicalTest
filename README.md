# Kira Systems Technical Test


## Problem: Double Booked

When maintaining a calendar of events, it is important to know if an event overlaps with another event.

Given a sequence of events, each having a start and end time, write a program that will return the sequence of all pairs of overlapping events.


## Solution Discussion

### Technology

Node.js

### Setup
To run this project, install Node.js and run

$ node index.js

### Execution Details

The data folder contains some JSON data that represents an array of 5 events with a description, start and end times and each file will be read when the program runs.

The output for each file is separated by the following pattern ------ filename ------

This was done to quickly test and demo the program.

### Implementation Details

I have not done any functional programming professionally so I tried to incorporate key concepts for functional programming in JavaScript.

(Line 4): Started with a basic function to return date time in milliseconds

(Line 8 - 11): Return a newly assigned object to ensure parameter isn't mutated

(Line 15 - 23): Simple function to check if two event objects overlap

(Line 27 - 43): Recursively loop through event list so we compare all objects against each other. Then return an array that includes all combinations of events, distinguished by a boolean

(Line 46 and 51): Read folder and file system so we can process data through node.js file access.

(Line 61): Use higher order function "map" and pass in function to convert dates in String to integers for comparison.

(Line 60 - 64): Use array of events with dates in milliseconds and recursively compare events to each other to get a new array of all combinations of sequences with a distinguishing boolean if a pair overlap

(Line 64 - 65): Filter out data so only sequences that overlap are shown (This is the correct time to return the function to return a sequence of all pairs, but I thought it would be easier to review/test by writing the matching sequences in the log)

(Line 66 -67): Use "map" to print out list of overlapping sequences



