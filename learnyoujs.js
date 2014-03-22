#!/usr/bin/env node

const Workshopper = require('workshopper')
    , path        = require('path')

Workshopper({
    name              : 'learnyoujs'
  , title             : 'LEARN YOU THE JAVASCRIPTS'
  , subtitle          : 'Select an exercise and hit Enter to begin'
  , appDir            : __dirname
  , exerciseDir       : path.join(__dirname, 'problems')
  , helpFile          : path.join(__dirname, 'help.txt')
  , prerequisitesFile : path.join(__dirname, 'prerequisites.txt')
  , creditsFile       : path.join(__dirname, 'credits.txt')
  , menu              : { bg: 'cyan', fg: 'white' }
}).init()
