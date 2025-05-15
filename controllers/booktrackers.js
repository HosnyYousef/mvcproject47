const Booktracker = require('../models/Booktracker')

module.exports = {
    getBooktrackers: async (req,res)=>{
        try{
            const booktrackerItems = await Booktracker.find()
            const scoreItems = await Booktracker.find().default
            const itemsLeft = await Booktracker.countDocuments({completed: false})
            console.log(Booktracker.find().name)
            res.render('booktrackers.ejs', {
                booktrackers: booktrackerItems, 
                scores: scoreItems, 
                left: itemsLeft})
        }catch(err){
            console.log(err)
        }
    },
    createBooktracker: async (req, res)=>{
        try{
            await Booktracker.create({
                booktracker: req.body.booktrackerItem, 
                score: req.body.scoreItem, 
                completed: false})
            console.log('Booktracker has been added!')
            res.redirect('/booktrackers')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Booktracker.findOneAndUpdate({_id:req.body.booktrackerIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Booktracker.findOneAndUpdate({_id:req.body.booktrackerIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteBooktracker: async (req, res)=>{
        console.log(req.body.booktrackerIdFromJSFile)
        try{
            await Booktracker.findOneAndDelete({_id:req.body.booktrackerIdFromJSFile})
            console.log('Deleted Booktracker')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    