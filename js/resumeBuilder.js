var bio = {
  "name" : "Brent Harman",
  "role" : "Front End Web Developer",
  "contact" : {
    "email" : "brent.a.harman@gmail.com",
    "mobile" : "574-527-4733",
    "github" : "baharman78",
    "location" : "Warsaw, IN"
  },
  "welcomeMessage" : "Welcome",
  "skills" : [
    "Python, Java, C, C++, VHDL, Visual Basic, and Assembly programming languages",
    "Autocad, Modelsim, PSpice, Microsoft Office, and Matlab software",
    "Microcontrollers, FPGA's, and PLD's",
    "PLC 5's SLC 500's, Micrologix, CompactLogix, and ControlLogix",
    "Rslogix 5000, Rslogix 500, Rslogix 5",
    "Devicenet, Controlnet, and Ethernet I/O",
    "FactoryTalk SE, FactoryTalk ME, Panelviews, and Thinmanager",
    "Powerflex 70 VFDs, Powerflex 525 VFD's, Allen Bradley 160 VFDs, and Armorstart VFDs"
  ],
  "biopic" : "images/fry-300.jpg",
  "display" : function(){
    var formattedname = {};
    var formattedrole = {};
    var formattedcontactinfo = {};
    var formattedcontactemail = {};
    var formattedcontactmobile = {};
    var formattedcontactgithub = {};
    var formattedcontactlocation = {};
    var formattedpicture = {};
    var formattedwelcome = {};
    var formattedskills = {};
    formattedrole = HTMLheaderRole.replace("%data%",this.role);
    $("#header").prepend(formattedrole);
    formattedname = HTMLheaderName.replace("%data%",this.name);
    $("#header").prepend(formattedname);
    formattedcontactemail = HTMLemail.replace("%data%",this.contact.email);
    formattedcontactmobile = HTMLmobile.replace("%data%",this.contact.mobile);
    formattedcontactgithub = HTMLgithub.replace("%data%",this.contact.github);
    formattedcontactlocation = HTMLlocation.replace("%data%",this.contact.location);
    formattedcontactinfo = formattedcontactemail + formattedcontactmobile + formattedcontactgithub + formattedcontactlocation;
    $("#topContacts").append(formattedcontactinfo);
    $("#footerContacts").append(formattedcontactinfo);
    formattedpicture = HTMLbioPic.replace("%data%",this.biopic);
    $("#header").append(formattedpicture);
    $("#header").append(HTMLskillsStart);
    for(var i = 0; i < this.skills.length; i++){
      formattedskills = HTMLskills.replace("%data%", this.skills[i]);
      $("#header").append(formattedskills);
    }
  }
};

bio.display();

var work = {
  "jobs" : [
    {
      "employer" : "Red Gold",
      "title" : "Controls Technician",
      "location" : "Geneva, IN",
      "dates" : "August 2014 - July 2015",
      "description" : [
        "Provided controls support in a manufacturing facility",
        "Maintained Allen Bradley PLC's, ACP thin clients, VFD Drives, Panelview, and other hardware for end user",
        "Implemented software and hardware changes depending on what operators, supervisors, and managers required",
        "Trained controls electricians after controls issues were solved",
        "Delegated small controls projects for electricians to do electrical work on",
        "Provided remote on-call support after business hours"
      ]
    }
  ],
  "display" : function(){
    var formattedemployer = {};
    var formattedtitle = {};
    var formattedEmployerTitle = {};
    var formattedworkdates = {};
    var formattedworklocation = {};
    var formattedworkdescription = {};
    for(var i = 0; i < this.jobs.length; i++){
      $("#workExperience").append(HTMLworkStart);
      formattedemployer = HTMLworkEmployer.replace("%data%",this.jobs[i].employer);
      formattedtitle = HTMLworkTitle.replace("%data%",this.jobs[i].title);
      formattedEmployerTitle = formattedemployer + formattedtitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      formattedworkdates = HTMLworkDates.replace("%data%", this.jobs[i].dates);
      formattedworklocation = HTMLworkLocation.replace("%data%", this.jobs[i].location);
      $(".work-entry:last").append(formattedworkdates + formattedworklocation);
      for(var j = 0; j < this.jobs[i].description.length; j++){
        formattedworkdescription = HTMLworkDescription.replace("%data%", this.jobs[i].description[j]);
        $(".work-entry:last").append(formattedworkdescription);
      }
    }
  }
};

work.display();

var education = {
  "schools" : [
    {
      "name" : "Purdue University",
      "location" : "West Lafayette, Indiana",
      "degree" : "BA",
      "majors" : [
        "Computer Engineering"
      ],
      "dates" : 2013,
      "url" : "none"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front End Web Developer",
      "school" : "Nanodegree",
      "date" : 2016,
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ],
  "display" : function() {
    var formattedschoolname = "";
    var formattedschooldegree = "";
    var formattedtitle = "";
    var formattedlocation = "";
    var formatteddegree = "";
    var formattedmajors = "";
    var formatteddates = "";
    var formattedurl = "";
    var formattedtitleschool = "";
    for(var i = 0; i < this.schools.length; i++){
      $("#education").append(HTMLschoolStart);
      formattedschoolname = HTMLschoolName.replace("%data%", this.schools[i].name);
      formatteddegree = HTMLschoolDegree.replace("%data%", this.schools[i].degree);
      formattedschooldegree = formattedschoolname + formatteddegree;
      $(".education-entry:last").append(formattedschooldegree);
      formattedlocation = HTMLschoolLocation.replace("%data%", this.schools[i].location);
      $(".education-entry:last").append(formattedlocation);
      formatteddates = HTMLschoolDates.replace("%data%", this.schools[i].dates);
      $(".education-entry:last").append(formatteddates);
      for(var j = 0; j < this.schools[i].majors.length; j++){
        formattedmajors = HTMLschoolMajor.replace("%data%", this.schools[i].majors[j]);
        $(".education-entry:last").append(formattedmajors);
      }
    }
    for(i = 0; i < this.onlineCourses.length; i++){
      $("#onlineclasses").append(HTMLonlineStart);
      formattedtitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title);
      formattedschoolname = HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school);
      formattedtitleschool = formattedtitle + formattedschoolname;
      $(".onlineclasses-entry:last").append(formattedtitleschool);
      formatteddates = HTMLonlineDates.replace("%data%", this.onlineCourses[i].date);
      $(".onlineclasses-entry:last").append(formatteddates);
      formattedurl = HTMLonlineURL.replace("%data%", this.onlineCourses[i].url);
      $(".onlineclasses-entry:last").append(formattedurl);
    }
  }
};

education.display();

var projects = {
  "projects" : [
    {
      "title" : "Data Structures",
      "dates" : "Fall 2010",
      "description" : [
        "Implemented a zipping and unzipping program that utilized various data structures with a partner using C",
        "Created a recursive function to unzip data in order to preserve the pattern utilizing a binary search tree",
        "Learned that data structures provide different run times depending on which ones are used"
      ],
      "images" : "images/DataStructures-300.jpg"
    },
    {
      "title" : "Senior Design",
      "dates" : "Fall 2013",
      "description" : [
        "Designed automation subsystem for a 3 axis pick and place system that utilizes stepper motors and an electro-magnet to pick up randomly placed objects on a grid layout and return them to a home location on the grid",
        "Presented design review with team and individually in order to show the progress periodically throughout project",
        "Incorporated modularization in project to allow for easy integration of future subsystems"
      ],
      "images" : "images/Circuit-300.jpg"
    },
    {
      "title" : "Vertically Integrated Projects",
      "dates" : "Spring 2013",
      "description" : [
        "Collaborated with grad students on software for a football telemetry helmet circuit prototype involving a microcontroller in order to collect data on collisions during football games",
        "Programmed microcontroller to work with gyroscopes and accelerometer to collect and store data",
        "Started interfacing individual sensors with microcontroller, and then considered how to incorporate additional sensors afterward"
      ],
      "images" : "images/VIP-300.png"
    },
    {
      "title" : "Microcontrollers",
      "dates" : "Spring 2012",
      "description" : [
        "Participated with peers in the design of a Bop-It type system using a microcontroller and electrical components",
        "Designed embedded circuits to interface with microcontroller and then soldiered the final product together",
        "Utilized interrupts and polling in order to receive data from all of the electrical components"
      ],
      "images" : "images/Game-300.png"
    },
    {
      "title" : "Computer Architecture",
      "dates" : "Spring 2013",
      "description" : [
          "Designed a multicore pipelined processor with a partner using VHDL",
          "Implemented optimization techniques for speeding up processor by using probability",
          "Completed smaller projects that built upon each other to create the final project"
      ],
      "images" : "images/Computer-300.png"
    }
  ],
  "display" : function() {
    var formattedtitle = {};
    var formatteddates = {};
    var formatteddescriptions = [];
    var formattedpic = {};
    for(var i = 0; i < this.projects.length; i++){
      $("#projects").append(HTMLprojectStart);
      formattedtitle = HTMLprojectTitle.replace("%data%", this.projects[i].title);
      $(".project-entry:last").append(formattedtitle);
      formatteddates = HTMLprojectDates.replace("%data%", this.projects[i].dates);
      $(".project-entry:last").append(formatteddates);
      for(var f = 0; f < this.projects[i].description.length; f++){
        formatteddescriptions = HTMLprojectDescription.replace("%data%", this.projects[i].description[f]);
        $(".project-entry:last").append(formatteddescriptions);
      }
      formattedpic = HTMLprojectImage.replace("%data%", this.projects[i].images);
      $(".project-entry:last").append(formattedpic);
    }
  }
};

projects.display();

function inName(Name){
  var Name_temp = Name.split(" ");
  var temp = Name_temp[0].charAt(0).toUpperCase();
//  console.log(temp);
  Name_temp[0] = Name_temp[0].replace(Name_temp[0][0], temp);
  Name_temp[1] = Name_temp[1].toUpperCase();
  Name = Name_temp[0] + " " + Name_temp[1];
  return Name;
}

$("#mapDiv").append(googleMap);

//$(main).append(internationalizeButton);

/*
This is empty on purpose! Your code to build the resume will go here.
 */
