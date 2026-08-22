/*
    Strings
        -Strings are a sequence of characters used to represent text.
        -Strings in javascript are used for storing and manipulating text.
        -Strings can be created using single quotes, double quotes, or backticks.
        -Strings can be concatenated using the + operator or template literals.
        -Strings have many built-in methods for manipulating and transforming text.
            -.length - returns the length of the string
            -[] - used to access individual characters in a string
            -.toUpperCase() - converts the string to uppercase
            -.toLowerCase() - converts the string to lowercase
            -.indexOf() - returns the index of the first occurrence of a specified value in a string
            -.lastIndexOf() - returns the index of the last occurrence of a specified value in a string
*/

const str1 = "Dhiraj.";
const str2 = 'Dhiraj Dhumal.';
const age = 22;
const str3 = `I am a Java Developer. My age is ${age}.`;

console.log(str1,str2,str3);

const str = `I am a JavaScript Developer.`;

// String methods

// length of string - it returns the number of characters in a string, including spaces and special characters
console.log(str.length); // length of the string

// accessing individual characters in a string
console.log(str[0]); // first character of the string
console.log(str[1]); // second character of the string

// toUpperCase() and toLowerCase() -it converts the string to uppercase and lowercase respectively
console.log(str.toUpperCase()); // convert string to uppercase
console.log(str.toLowerCase()); // convert string to lowercase

// indexOf() and lastIndexOf() - it returns the index of the first occurrence of a specified value in a string. If the value is not found, it returns -1. it is case sensitive. lastIndexOf() returns the index of the last occurrence of a specified value in a string. if the value is not found, it returns -1. it is case sensitive.
console.log(str.indexOf("JavaScript")); // find the index of the first occurrence of "JavaScript"
console.log(str.lastIndexOf("JavaScript")); // find the index of the last occurrence of "JavaScript"
console.log(str.indexOf("Python")); // it returns -1 if the substring is not found
console.log(str.indexOf("javascript")); // it returns -1 if the substring is not found because of case sensitivity

// includes() method - it returns true if the string contains the specified substring, otherwise it returns false
console.log(str.includes("JavaScript")); // returns true if the string contains "JavaScript"
console.log(str.includes("Python")); // return false because the string does not contain "Python"

/* slice() method
    - it extracts a section of a string and returns it as a new string. 
    - it takes two parameters: the starting index and the ending index (optional). 
    - if we give last index, it will extract till the last index - 1.
    - if the ending index is not provided, it extracts till the end of the string. 
    - if the starting index is negative, it counts from the end of the string.
*/
const str4 = "I am a JavaScript Developer";
console.log(str4.slice(7, 18)); // it will extract "JavaScript"
console.log(str4.slice(7)); // it will return all after the 7th index
console.log(str4.slice(-9)); // it will return the last 9 characters of the string
console.log(str4.slice(-20, -10)); // it will return "JavaScript" because it counts from the end of the string

/*
    substring() method
        - it extracts a section of a string and returns it as a new string.
        - it takes two parameters: the starting index and the ending index (optional).
        - if the ending index is not provided, it extracts till the end of the string.
        - if the starting index is greater than the ending index, it swaps the two indexes.
        - if the starting index is negative, it is treated as 0.
*/
const str5 = "I am a JavaScript Developer";
console.log(str5.substring(7, 18)); // it will extract "JavaScript"
console.log(str5.substring(7));  // it will return all after the 7th index

/*
    concatenation of strings
        - it is the process of combining two or more strings into one string.
        - it can be done using the + operator or the concat() method.
*/
const str6 = "I am a JavaScript Developer";
const str7 = "I am a Java Developer";
const str8 = str6 + " " + str7; // using + operator
const str9 = str6.concat(" ", str7); // using concat() method
console.log(str8);
console.log(str9);

console.log(23+"Dhiraj"+32); // it will convert the number to string and concatenate it with the string
console.log("Dhiraj"+23+32); // it will convert the number to string and concatenate it with the string
console.log(23+32+"Dhiraj"); // it will add the two numbers and then concatenate it with the string

/*
    replace() method
        - it is used to replace a specified value with another value in a string.
        - it takes two parameters: the value to be replaced and the value to replace it with.
        - it returns a new string with the specified value replaced.
        - it is case sensitive.

    replaceAll() method
        - it is used to replace all occurrences of a specified value with another value in a string.
        - it takes two parameters: the value to be replaced and the value to replace it with.
        - it returns a new string with all occurrences of the specified value replaced.
        - it is case sensitive.
*/
const str10 = "I am a JavaScript Developer and I love JavaScript.";
console.log(str10.replace("JavaScript", "Java"));
console.log(str10.replaceAll("JavaScript", "Java"));

/*
    trim() method
        - it is used to remove whitespace from both ends of a string.
        - it does not change the original string, it returns a new string.
        - it does not remove whitespace from the middle of the string.
        - it is useful for cleaning up user input or data from external sources.
        - it is often used in form validation to ensure that user input does not contain unnecessary whitespace.
        - it is also used in data processing to clean up text data before analysis or storage.
        - it is a good practice to use trim() when working with strings to avoid unexpected behavior or errors.
        - it is a simple and effective way to improve the quality and reliability of your code.
        - it is a built-in method in JavaScript and is widely supported across all modern browsers.
        - it is a part of the ECMAScript standard and is included in the latest versions of JavaScript.
        - it is a useful tool for developers to ensure that their code is clean, efficient, and reliable.
        - it is a best practice to use trim() when working with strings to avoid unexpected behavior or errors.
*/
const username = "   Dhiraj Dhumal   ";
console.log(username); // it will print the string with whitespace
console.log(username.trim()); // it will remove the whitespace from both ends of the string

/*
    split() method
        - it is used to split a string into an array of substrings based on a specified separator.
        - it takes one parameter: the separator (optional).
        - if the separator is not provided, it returns an array with the original string as the only element.
        - it is useful for breaking down a string into smaller parts for further processing or analysis.
        - it is often used in data processing to extract specific information from a string or to convert a string into a more usable format.
        - it is a built-in method in JavaScript and is widely supported across all modern browsers.
        - it is a part of the ECMAScript standard and is included in the latest versions of JavaScript.
        - it is a useful tool for developers to manipulate and transform strings in their code.
        - it is a best practice to use split() when working with strings to avoid unexpected behavior or errors.
*/
const names = "Dhiraj,Dhumal,JavaScript,Developer";
console.log(names.split(",")); // it will split the string into an array of substrings based on the separator ","

const surnames = "Dhumal Shinde Jadhav Patil";
console.log(surnames.split(" ")); // it will split the string into an array of substrings based on the separator " "




/*
    date and time methods
        - it is used to get the current date and time in JavaScript.
        - it is a built-in object in JavaScript and is widely supported across all modern browsers.\\

        -days are started from 0 to 6 where 0 is Sunday and 6 is Saturday.
        -months are started from 0 to 11 where 0 is January and 11 is December.
*/
const now = new Date();
console.log(now);

console.log(now.toString()); // it will return the current date and time as a string
console.log(now.toDateString()); // it will return the current date as a string
console.log(now.toTimeString()); // it will return the current time as a string

console.log(now.toLocaleString()); // it will return the current date and time as a string in the local format
console.log(now.toISOString()); // it will return the current date and time as a string in the ISO format

console.log(now.getDay()); // it will return the current day of the week (0-6) where 0 is Sunday and 6 is Saturday
console.log(now.getDate()); // it will return the current day of the month (1-31)
console.log(now.getMonth()); // it will return the current month (0-11) where 0 is January and 11 is December
console.log(now.getFullYear()); // it will return the current year (4 digits)
console.log(now.getHours()); // it will return the current hour (0-23)
console.log(now.getMinutes()); // it will return the current minute (0-59)
console.log(now.getSeconds()); // it will return the current second (0-59)

//year, month, day, hour, minute, second, millisecond
const date = new Date(2024, 5, 15, 10, 30, 33, 458); // it will create a new date object with the specified year, month, and day
console.log(date); // it will return the specified date and time as a string
console.log(date.toString()); // it will return the specified date and time as a string

//univerdal Time Coordinated (UTC) - it is the primary time standard by which the world regulates clocks and time. It is the same worldwide and does not change with the seasons. It is used in aviation, computing, navigation, and many other fields where precise timekeeping is essential.
const nowUTC = Date.now(); // it will return the current date and time in UTC format
console.log(nowUTC); // it will return the current date and time in UTC format as a number of milliseconds since January 1, 1970, 00:00:00 UTC
const dateUtc = new Date(nowUTC);
console.log(dateUtc); // it will return the current date and time in UTC format

// Leetcode uses UTC format to store and display dates and times for coding challenges, submissions, and user activity. This ensures consistency across different time zones and allows users from around the world to participate in challenges without confusion about local time differences. By using UTC, Leetcode can provide a standardized reference point for all users, making it easier to track progress, deadlines, and performance metrics accurately.
/*
    for ex
        -i am in india and i am solved a coding challenge in 10 mins and 30 seconds on 15th june 2024 at 10:30:33 am IST.
        -my friend in new york solved the same coding challenge in 20 mins and 30 seconds on 15th june 2024 at 10:30:33 am EST.

        but in india date and time is 15th june 2024 at 10:30:33 am IST
        and in new york date and time is 14th june 2024 at 11:00:33 pm EST. 

        - so the leetcodes winner on the basis of time is my friend.
        - but i solved the coding challenge in 10 mins and 30 seconds and my friend solved it in 20 mins and 30 seconds.

        - so the real winner is me because i solved the coding challenge in less time than my friend.

        this is the reason why leetcode uses UTC format to store and display dates and times for coding challenges, submissions, and user activity. 
        This ensures consistency across different time zones and allows users from around the world to participate in challenges without confusion about local time differences. 
        By using UTC, Leetcode can provide a standardized reference point for all users, making it easier to track progress, deadlines, and performance metrics accurately.

        -- we only give utc date and time and browser automatically convert it into local date and time based on the time zone of the user. --
    
*/