// User languages and interests
// Objectives:
// Familiarity with moving through JavaScript objects to find relevant data.
// Essential practice for when we need to sift through data we get from an API.
// Notice that in the code snippet below, we have an array of users. Each user is an object. Each user has the key languages, which is associated with an array of strings. Each user also has the key interests, which is associated with an object. There are varying keys within this interests object, and each of those keys is associated with an array of strings.

users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]
    
  function userLanguages(arr){
    for(i =0; i < arr.length; i++) {
      console.log(arr[i].fname + " " + arr[i].lname + " knows " + arr[i].languages.join(", ").replace(/, ([^,]*)$/, ' and $1') + ".");
      console.log(arr[i].fname + " is also interested in " + Object.keys(arr[i].interests).join(", ").replace(/, ([^,]*)$/, ' and $1') + ".");
    }
  }
  userLanguages(users);

  "Kermit the Frog knows Python, JavaScript, C#, HTML, CSS and SQL."
  "Kermit is also interested in music, dance and television."
  "Winnie the Pooh knows Python, Swift and Java."
  "Winnie is also interested in food, flowers and mysteries."
  "Arthur Dent knows JavaScript, HTML and Go."
  "Arthur is also interested in space and home."