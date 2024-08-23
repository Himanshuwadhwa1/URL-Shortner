import express  from "express";
import {urlModel} from "../model/shortUrl";

async function createUrl(req:express.Request, res:express.Response){
try {
    const {fullUrl} = req.body;
    const url= await urlModel.find({fullUrl});
    if(url.length>0){
        res.status(409).json({
            message : "url already exists",
            "fullUrl": url,
        });
    }else{
        const shortUrl =await urlModel.create({fullUrl});
        res.json(shortUrl);
    }

} catch (error) {
    console.log(error);
    res.status(500).json({message:"Something broke!"});
}    
}

async function getAllUrl(req:express.Request, res:express.Response){
    try {
        const url = await urlModel.find({}).sort({createdAt:-1});
        if(url.length>0){
            res.status(200).json(url);
        }else{
            res.status(404).json({message:"No url found"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something broker!"})
    }
}

async function getUrl(req:express.Request, res:express.Response){
    try {
        const id = req.params.id;
        const url = await urlModel.findOne({shortUrl:id});
        if(!url){
            res.status(404).json({message:"url not found"});
        }else{
            url.click++;
            url.save();
            res.redirect(`${url.fullUrl}`);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something broker!"})
    }
}

async function deleteUrl(req:express.Request, res:express.Response){
    try {
        const id = req.params.id;
        const url = await urlModel.findByIdAndDelete({_id:id});
        if(!url){
            res.status(404).json({message:"url not found"});
        }else{
            res.status(200).json({message:"url deleted"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something broker!"})
    }
}
export{
    createUrl,
    getAllUrl,
    getUrl,
    deleteUrl
}