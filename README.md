# MongoDB Case-Insensitive Search Optimization

This repository demonstrates an inefficient approach to performing a case-insensitive search in MongoDB using regular expressions and provides an optimized solution using native MongoDB query operators.

## Problem

The original code uses a regular expression for case-insensitive search, which can be less efficient than using MongoDB's built-in operators for larger datasets.  Regular expressions can lead to increased query execution time and decreased performance.

## Solution

The optimized solution uses the `$regex` operator with the `$options` parameter to perform case-insensitive searches in a more efficient manner.  This approach leverages MongoDB's internal indexing capabilities and generally performs better than regular expressions, especially for large datasets.

## Usage

1. Clone this repository
2. Run `npm install`
3. Execute the files to see the improvement in performance and efficiency.