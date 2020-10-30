#!/usr/bin/node
// CREA UN DIRECTORIO CON LAS TECNOLOGIAS DE BACK
function match_techs_back(texto) {
  const java = new RegExp("([Jj]ava)");
  const cSharp = new RegExp("[Cc]#");
  const swift = new RegExp("[Ss]wift");
  const cPlus = new RegExp("[Cc]+");
  const golang = new RegExp("[Gg]o[Ll]ang");
  const php = new RegExp("[Pp][Hh][Pp]");
  const kotlin = new RegExp("[Kk][Oo][Tt][Ll][Ii][Nn]");
  const matlab = new RegExp("[Mm][Aa][Tt][Ll][Aa][Bb]");
  const python = new RegExp("[Pp]y(thon)?");

  const btl = [];
  let check = false;

  // Checks Java
  check = java.test(texto);
  if (check === true) {
    btl.push("Java");
  }
  // Checks C#
  check = cSharp.test(texto);
  if (check === true) {
    btl.push("C#");
  }
  // Checks Swift
  check = swift.test(texto);
  if (check === true) {
    btl.push("Swift");
  }
  // Checks GoLang
  check = golang.test(texto);
  if (check === true) {
    btl.push("GoLang");
  }
  // Checks PHP
  check = php.test(texto);
  if (check === true) {
    btl.push("PHP");
  }
  // Checks kotlin
  check = kotlin.test(texto);
  if (check === true) {
    btl.push("Kotlin");
  }
  // Checks Matlab
  check = matlab.test(texto);
  if (check === true) {
    btl.push("Matlab");
  }
  // Checks Python
  check = python.test(texto);
  if (check === true) {
    btl.push("Python");
  }
  //console.log(btl);
  return btl;
}

// RETORNA BOOL SOBRE LA EXISTENCIA DE TECNOLOGIAS BACK
function check_techs_back(texto) {
  const java = new RegExp("([Jj]ava)");
  const cSharp = new RegExp("[Cc]#");
  const swift = new RegExp("[Ss]wift");
  const cPlus = new RegExp("[Cc]+");
  const golang = new RegExp("[Gg]o[Ll]ang");
  const php = new RegExp("[Pp][Hh][Pp]");
  const kotlin = new RegExp("[Kk][Oo][Tt][Ll][Ii][Nn]");
  const matlab = new RegExp("[Mm][Aa][Tt][Ll][Aa][Bb]");
  const python = new RegExp("[Pp]y(thon)?");

  let check = false;
  let backTech = false;

  // Checks Java
  check = java.test(texto);
  if (check === true) {
    backTech = true;
  }
  // Checks C#
  check = cSharp.test(texto);
  if (check === true) {
    backTech = true;
  }
  // Checks Swift
  check = swift.test(texto);
  if (check === true) {
    backTech = true;
  }
  // Checks C++
  check = cPlus.test(texto);
  if (check === true) {
    backTech = true;
  }
  // Checks GoLang
  check = golang.test(texto);
  if (check === true) {
    backTech = true;
  }
  // Checks PHP
  check = php.test(texto);
  if (check === true) {
    backTech = true;
  }
  // Checks kotlin
  check = kotlin.test(texto);
  if (check === true) {
    backTech = true;
  }
  // Checks Matlab
  check = matlab.test(texto);
  if (check === true) {
    backTech = true;
  }
  // Checks Python
  check = python.test(texto);
  if (check === true) {
    backTech = true;
  }
  //console.log(btl);
  return backTech;
}

// CREA UN DIRECTORIO CON LAS TECNOLOGIAS DE FRONT
function match_techs_front(texto) {
  const javascript = new RegExp("[Jj]ava[Ss]cript");
  const angular = new RegExp("[Aa]ngular(.js)?");
  const react = new RegExp("[Rr]eact(.js)?");
  const vue = new RegExp("[Vv]ue(.js|[Jj]s)?");
  const aspnet = new RegExp("[Aa][Ss][Pp].[Nn][Ee][Tt]");
  const jquery = new RegExp("[Jj][Qq]uery");

  const btl = [];
  let check = false;

  // Checks JavaScript
  check = javascript.test(texto);
  if (check === true) {
    btl.push("JavaScript");
  }
  // Checks Angular
  check = angular.test(texto);
  if (check === true) {
    btl.push("AngularJS");
  }
  // Checks React
  check = react.test(texto);
  if (check === true) {
    btl.push("ReactJS");
  }
  // Checks Vue
  check = vue.test(texto);
  if (check === true) {
    btl.push("VueJS");
  }
  // Checks ASP.NET
  check = aspnet.test(texto);
  if (check === true) {
    btl.push("ASP.NET");
  }
  // Checks JQuery
  check = jquery.test(texto);
  if (check === true) {
    btl.push("JQuery");
  }
  return btl;
}

// RETORNA BOOL SOBRE LA EXISTENCIA DE TECNOLOGIAS FRONT
function check_techs_front(texto) {
  const javascript = new RegExp("[Jj]ava[Ss]cript");
  const angular = new RegExp("[Aa]ngular(.js)?");
  const react = new RegExp("[Rr]eact(.js)?");
  const vue = new RegExp("[Vv]ue(.js|[Jj]s)?");
  const aspnet = new RegExp("[Aa][Ss][Pp].[Nn][Ee][Tt]");
  const jquery = new RegExp("[Jj][Qq]uery");

  let check = false;
  let frontTech = false;

  // Checks JavaScript
  check = javascript.test(texto);
  if (check === true) {
    frontTech = true;
  }
  // Checks Angular
  check = angular.test(texto);
  if (check === true) {
    frontTech = true;
  }
  // Checks React
  check = react.test(texto);
  if (check === true) {
    frontTech = true;
  }
  // Checks Vue
  check = vue.test(texto);
  if (check === true) {
    frontTech = true;
  }
  // Checks ASP.NET
  check = aspnet.test(texto);
  if (check === true) {
    frontTech = true;
  }
  // Checks JQuery
  check = jquery.test(texto);
  if (check === true) {
    frontTech = true;
  }
  return frontTech;
}
// CREA UN DIRECTORIO CON LAS TECNOLOGIAS DE DEVOPS
function match_techs_devops(texto) {
  const ruby = new RegExp("[Rr]uby");
  const laravel = new RegExp("[Ll]aravel");
  const express = new RegExp("[Ee]xpress(.js|[Jj]s)?");
  const rails = new RegExp("([Rr][Uu][Bb][Yy]s[Oo][Nn]s)?[Rr][Aa][Ii][Ll][Ss]");
  const django = new RegExp("[Dd][Jj]ango");
  const flask = new RegExp("[Ff]lask");
  const mysql = new RegExp("[Mm][Yy][Ss][Qq][Ll]");
  const postgresql = new RegExp("[Pp]ostgre[Ss][Qq][Ll]");
  const sqlite = new RegExp("[Ss][Qq][Ll]ite");
  const mongo = new RegExp("[Mm]ongo[Dd][Bb]");
  const firebase = new RegExp("[Ff]irebase");
  const maria = new RegExp("[Mm]aria[Dd][Bb]");
  const aws = new RegExp("[Aa][Ww][Ss]");
  const gcp = new RegExp("[Gg][Cc][Pp]");
  const azure = new RegExp("[Aa]zure");
  const git = new RegExp("[Gg]it");
  const github = new RegExp("[Gg]ithub");
  const docker = new RegExp("[Dd]ocker");
  const jenkins = new RegExp("[Jj]enkins");
  const travis = new RegExp("[Tt]ravis[Cc][Ii]");
  const nginx = new RegExp("[Nn][Gg][Ii][Nn][Xx]");
  const apache = new RegExp("[Aa]pache");
  const puppet = new RegExp("[Pp]uppet");
  const linux = new RegExp("[Ll]inux");
  const bash = new RegExp("[Bb]ash");

  const btl = [];
  let check = false;

  // Checks Ruby
  check = ruby.test(texto);
  if (check === true) {
    btl.push("Ruby");
  }
  // Checks Laravel
  check = laravel.test(texto);
  if (check === true) {
    btl.push("Laravel");
  }
  // Checks Express
  check = express.test(texto);
  if (check === true) {
    btl.push("Express");
  }
  // Checks Ruby on Rails
  check = rails.test(texto);
  if (check === true) {
    btl.push("Ruby on Rails");
  }
  // Checks Django
  check = django.test(texto);
  if (check === true) {
    btl.push("Django");
  }
  // Checks Flask
  check = flask.test(texto);
  if (check === true) {
    btl.push("Flask");
  }
  // Checks MySQL
  check = mysql.test(texto);
  if (check === true) {
    btl.push("MySQL");
  }
  // Checks PostgreSQL
  check = postgresql.test(texto);
  if (check === true) {
    btl.push("PostgreSQL");
  }
  // Checks SQLite
  check = sqlite.test(texto);
  if (check === true) {
    btl.push("SQLite");
  }
  // Checks MongoDB
  check = mongo.test(texto);
  if (check === true) {
    btl.push("MongoDB");
  }
  // Checks Firebase
  check = firebase.test(texto);
  if (check === true) {
    btl.push("Firebase");
  }
  // Checks MariaDB
  check = maria.test(texto);
  if (check === true) {
    btl.push("MariaDB");
  }
  // Checks AWS
  check = aws.test(texto);
  if (check === true) {
    btl.push("AWS");
  }
  // Checks GCP
  check = gcp.test(texto);
  if (check === true) {
    btl.push("GCP");
  }
  // Checks Azure
  check = azure.test(texto);
  if (check === true) {
    btl.push("Azure");
  }
  // Checks Git
  check = git.test(texto);
  if (check === true) {
    btl.push("Git");
  }
  // Checks Github
  check = github.test(texto);
  if (check === true) {
    btl.push("Github");
  }
  // Checks Docker
  check = docker.test(texto);
  if (check === true) {
    btl.push("Docker");
  }
  // Checks Jenkins
  check = jenkins.test(texto);
  if (check === true) {
    btl.push("Jenkins");
  }
  // Checks TravisCI
  check = travis.test(texto);
  if (check === true) {
    btl.push("TravisCI");
  }
  // Checks NGINX
  check = nginx.test(texto);
  if (check === true) {
    btl.push("NGINX");
  }
  // Checks Apache
  check = apache.test(texto);
  if (check === true) {
    btl.push("Apache");
  }
  // Checks Puppet
  check = puppet.test(texto);
  if (check === true) {
    btl.push("Puppet");
  }
  // Checks Bash
  check = bash.test(texto);
  if (check === true) {
    btl.push("Bash");
  }
  // Checks Linux
  check = linux.test(texto);
  if (check === true) {
    btl.push("Linux");
  }
  return btl;
}

// RETORNA BOOL SOBRE LA EXISTENCIA DE TECNOLOGIAS DEVOPS
function check_techs_devops(texto) {
  const ruby = new RegExp("[Rr]uby");
  const laravel = new RegExp("[Ll]aravel");
  const express = new RegExp("[Ee]xpress(.js|[Jj]s)?");
  const rails = new RegExp("([Rr][Uu][Bb][Yy]s[Oo][Nn]s)?[Rr][Aa][Ii][Ll][Ss]");
  const django = new RegExp("[Dd][Jj]ango");
  const flask = new RegExp("[Ff]lask");
  const mysql = new RegExp("[Mm][Yy][Ss][Qq][Ll]");
  const postgresql = new RegExp("[Pp]ostgre[Ss][Qq][Ll]");
  const sqlite = new RegExp("[Ss][Qq][Ll]ite");
  const mongo = new RegExp("[Mm]ongo[Dd][Bb]");
  const firebase = new RegExp("[Ff]irebase");
  const maria = new RegExp("[Mm]aria[Dd][Bb]");
  const aws = new RegExp("[Aa][Ww][Ss]");
  const gcp = new RegExp("[Gg][Cc][Pp]");
  const azure = new RegExp("[Aa]zure");
  const git = new RegExp("[Gg]it");
  const github = new RegExp("[Gg]ithub");
  const docker = new RegExp("[Dd]ocker");
  const jenkins = new RegExp("[Jj]enkins");
  const travis = new RegExp("[Tt]ravis[Cc][Ii]");
  const nginx = new RegExp("[Nn][Gg][Ii][Nn][Xx]");
  const apache = new RegExp("[Aa]pache");
  const puppet = new RegExp("[Pp]uppet");
  const linux = new RegExp("[Ll]inux");
  const bash = new RegExp("[Bb]ash");

  let check = false;
  let devTech = false;

  // Checks Ruby
  check = ruby.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks Laravel
  check = laravel.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks Express
  check = express.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks Ruby on Rails
  check = rails.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks Django
  check = django.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks Flask
  check = flask.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks MySQL
  check = mysql.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks PostgreSQL
  check = postgresql.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks SQLite
  check = sqlite.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks MongoDB
  check = mongo.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks Firebase
  check = firebase.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks MariaDB
  check = maria.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks AWS
  check = aws.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks GCP
  check = gcp.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks Azure
  check = azure.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks Git
  check = git.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks Github
  check = github.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks Docker
  check = docker.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks Jenkins
  check = jenkins.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks TravisCI
  check = travis.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks NGINX
  check = nginx.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks Apache
  check = apache.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks Puppet
  check = puppet.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks Bash
  check = bash.test(texto);
  if (check === true) {
    devTech = true;
  }
  // Checks Linux
  check = linux.test(texto);
  if (check === true) {
    devTech = true;
  }
  return devTech;
}
module.exports = {
  tBack: match_techs_back,
  Bchecker: check_techs_back,
  tFront: match_techs_front,
  Fchecker: check_techs_front,
  tDev: match_techs_devops,
  Dchecker: check_techs_devops,
};
