const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let usersWithThreeLanguages = users.filter(user => user.languages.length >= 3);
console.log(usersWithThreeLanguages);

// Use .map to create an array of strings where each element is a user's email address

let usersEmail = users.map(user => user.email);
console.log(usersEmail);


// Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.


const averageYears = users.reduce((total, user) => {
    return total + user.yearsOfExperience / users.length;
}, 0)
console.log(averageYears);

// Use .reduce to get the longest email from the list of users.

function longestEmail() {
    let emailList = []
    const EmailReduce = users.reduce((total, user) =>{
        var total =total;
        var userEmail =user.email;
        var email_Length  = user.email.split('').length;
        emailList.push(email_Length + ' ' + userEmail);
    }, {});
    let sortedEmailList = emailList.sort();
    let longestEmail = emailList.pop();
    console.log(longestEmail);
    return longestEmail;
}
longestEmail()

// Use .reduce to get the list of user's names in a single string. Example:
// Your instructors are: ryan, luis, zach, fernando, justin.