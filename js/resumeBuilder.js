var bio = {
  "name" : "Brent Harman",
  "role" : "Software Engineer",
  "contact" : {
    "email" : "brent.a.harman@gmail.com",
    "mobile" : "574-527-4733",
    "github" : "baharman78",
    "location" : "Warsaw, IN"
  },
  "welcomeMessage" : "Welcome",
  "skills" : [
    "C, Assembly, VHDL, Python, Java, CSS3, HTML5, and JavaScript",
    "jQuery, Bootstrap, and HTML Canvas",
    "NetBeans, Visual Studio, and Android Studio",
    "Git, and SVN",
    "Object Oriented Programming, Grunt, Node.js, FactoryTalk ME, and FactoryTalk SE"
  ],
  "biopic" : "images/BrentHarman-300.jpg",
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

var work = {
  "jobs" : [{
      "employer" : "Red Gold",
      "title" : "Controls Technician",
      "location" : "Geneva, IN",
      "dates" : "August 2014 - July 2015",
      "description" : [
        "Provided controls support in a manufacturing facility to minimize downtime",
        "Maintained Allen Bradley PLC's, ACP thin clients, VFD Drives, Panelviews, and other hardware for end user to prevent potential downtime",
        "Implemented software and hardware changes depending on what operators, supervisors, and managers required to improve upon processes, and eliminate legacy products"
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

var education = {
  "schools" : [{
      "name" : "Udacity",
      "location" : "Online",
      "degree" : "Nanodegree",
      "majors" : [
        "Front End Web Developer"
      ],
      "dates" : 2016,
      "url" : ""
    },
    {
      "name" : "Purdue University",
      "location" : "West Lafayette, Indiana",
      "degree" : "BA",
      "majors" : [
        "Computer Engineering"
      ],
      "dates" : 2013,
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ],
  "onlineCourses" : [{
      "title" : "",
      "school" : "",
      "date" : 0,
      "url" : ""
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
  }
};

var projects = {
  "projects" : [{
    "title" : "Arcade Game Clone",
    "dates" : "December 2015",
    "description" : [
      "Developed Arcade Game Clone utilizing given game engine",
      "Utilized HTML Canvas to draw individual game entities and the background images",
      "Implemented object oriented programming concepts in order to make code more readable and easier to expand upon"
    ],
    "images" : "images/Game-300.png"
    },{
      "title" : "Operator Station Upgrade",
      "dates" : "January 2015",
      "description" : [
        "Interfaced new Panelview Terminal using Factory Talk Studio ME to replace outdated Quickview Terminal to prevent potential downtime from not having any spare Quickview Terminals",
        "Completed through testing on Panelview program before production run while keeping old Quickview Terminal in case of unexpected schedule change",
        "Implemented any requested programming changes after Panelview was being utilized by production"
      ],
      "images" : "images/OperatorStation-300.jpg"
    },{
      "title" : "Computer Architecture",
      "dates" : "Spring 2013",
      "description" : [
          "Designed a multicore pipelined processor with a partner using VHDL",
          "Implemented optimization techniques for speeding up processor by using probability",
          "Completed smaller projects that built upon each other to create the final project"
      ],
      "images" : "images/Computer-300.png"
    },{
      "title" : "Microcontrollers",
      "dates" : "Spring 2012",
      "description" : [
        "Participated with peers in the design of a Bop-It type system using a microcontroller and electrical components",
        "Designed embedded circuits to interface with microcontroller and then soldiered the final product together",
        "Utilized interrupts and polling in order to receive data from all of the electrical components"
      ],
      "images" : "images/Circuit-300.jpg"
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

function inName(Name){
  var Name_temp = Name.split(" ");
  var temp = Name_temp[0].charAt(0).toUpperCase();
  Name_temp[0] = Name_temp[0].replace(Name_temp[0][0], temp);
  Name_temp[1] = Name_temp[1].toUpperCase();
  Name = Name_temp[0] + " " + Name_temp[1];
  return Name;
}


bio.display();
education.display();
projects.display();
work.display();
$("#mapDiv").append(googleMap);

/*
This is empty on purpose! Your code to build the resume will go here.
 */
