import React from "react";
import List from "./Lists";
import CreateList from "./CreateList";
import UpdateList from "./UpdateList";
import DeleteList  from "./DeleteList";
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());


const mongoose = require('mongoose');


mongoose.connect('mongoDb', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected successfully to MongoDB");
});


const bookSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
});


const Book = mongoose.model('Book', bookSchema);


app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/posts', async (req, res) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).send(error);
    }
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
        singledata: {
        title: "",
        author: ""
      }
    };
  }
  getList = (event , id) => {
      this.setState(
          {
              singledata:{
                  title:"Loading...",
                  author:"Loading..."
              }
          },
          () =>{
    fetch("http://localhost:5000/posts/" + id)
        .then(res => res.json())
        .then(result =>{
            this.setState({
                singledata:{
                    title:result.title,
                    author:result.author ? result.author :""
                }

            });

          });

        });


  }
  getLists = () => {
      fetch("http://localhost:5000/posts")
          .then(res=>res.json())
          .then(result =>
          this.setState({
              loading:false,
              alldata:result
          }))
          .catch(console.log);
  }
  handleChange = (event) => {
      let title = this.state.singledata.title;
      let author = this.state.singledata.author;
      if(event.target.name ==="title") title = event.target.value;
      else author = event.target.value;

      this.setState(
          {
              singledata:{
                  title:title,
                  author:author
              }
          }
      );
  }
  createList = () => {
      fetch("http://localhost:5000/posts",{
          method:"POST",
          headers:{
              "Content-Type" : "application/json"
          },
          body:JSON.stringify(this.state.singledata)
      }).then(
          this.setState({
              singledata: {
                  title:"",
                  author:""
            }
        })
      );
  }
  updateList= (event, id) =>{
      fetch("http://localhost:5000/posts/"+ id,
          {
              method:"PUT",
              headers: {
                  "Content-Type": "application/json"
              },
              body:JSON.stringify(this.state.singledata)
              })
              .then(res => res.json())
              .then(result => {
                  this.setState({
                      singledata:{
                          title:"",
                          author:""
                      }
                  });
                  this.getLists();
          });


  }
  deleteList =(event, id) => {
      fetch("http://localhost:5000/posts/" +id, {
          method:"DELETE"
      })
          .then(res=>res.json())
          .then(result =>{
              this.setState({
                  singledata:{
                      title:"",
                      author:""
                  }
              });
              this.getLists();
          });

  }
  render() {
    const listTable = this.state.loading ?(
        <span> Loading Data.....Please be patience</span>
    ):(
        <List
            alldata = {this.state.alldata}
            singledata = {this.state.singledata}
            getList = {this.getList}
            updateList={this.updateList}
            deleteList = {this.deleteList}
            handleChange = {this.handleChange}
        />
    );
    return (
        <div className = "container">
          <span className= "title-bar">
            <button
              type = "button"
              className="btn btn-primary"
              onClick = {this.getLists}
              >
              Get Lists
            </button>
              <CreateList
                  singledata = {this.state.singledata}
                  handleChange = {this.handleChange}
                  createList={this.createList}
              />
          </span>
          {listTable}
        </div>
    )
  }
}

export default App;
