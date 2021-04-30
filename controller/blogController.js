const Blog = require('../models/blog');


const Create = (req, res)=> {
    
    console.log(req.body);
    Blog.create(req.body).then((blog)=>{
       res.send(blog); 
    });
 
  };




// create the blog
const createBlog = (req, res) => {
    const blog = new Blog(req.body);
    console.log(blog);

    blog.save()
        .then(result => {
            res.send(result);
    })
    .catch(err => {
        console.log(err);
    });
}


// get all blogs
const getAllblogs = (req, res) => {
    Blog.find()
        .then(result =>{
        res.send(result)
        })
        .catch(err =>{
            console.log(err)
        });
}

// update the blog
const updateBlog = (req, res) => {
    Blog.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Blog.findOne({_id: req.params.id})
        .then(blog => {
           res.send(blog);
        })
        .catch(err =>{
            console.log(err);
        });
    })
    .catch(err =>{
        console.log(err);
    });
}

// delete the blog
const deleteBlog = (req, res) => {
    Blog.findByIdAndDelete({_id: req.params.id})
    .then(blog =>{
    res.send(blog);
    })
    .catch(err => {
    console.log(err);
    });

}


module.exports = {
    createBlog,
    getAllblogs,
    updateBlog,
    deleteBlog,
    Create
    
}