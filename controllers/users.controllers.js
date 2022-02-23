const express = require("express")
//const users = require("../models/user.model");
const dummy_data = require('../views/dummy_data/dummy.json')
 const https = require('https');
 

exports.getUser = (req,res)=>{
  https.get("https://api.pexels.com/v1/curated?page=2&per_page=80",{
    headers: {
      'Authorization': process.env.PEXELS_API_KEY
    } 
  }, resp => {
    
    let data = '';
    resp.on('data', chunk => {
      data += chunk;
    });
    resp.on('end', () => {
      data = JSON.parse(data);
      res.render(("index"),{dummy_data: data.photos,personalData: dummy_data})
      
    })
  }).on('error', err => {
    console.log(err.message);
  })
    
};

exports.saveImage=(req, res)=>{
  res.redirect('/upload');
}
exports.getImage=(req,res)=>{
  res.render("upload");
}

exports.imageDetails=(req,res)=>{
  res.render("details");

}
exports.developerProfile=(req,res)=>{
  res.render("developer_profile");
}





