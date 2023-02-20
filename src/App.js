import React, { useRef, useState } from "react";
import Routing from "./Routing";
import './styles/style.css'
import Navbar from "./components/Navbar/Navbar"
import Counter from "./components/Counter"

import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo/EditTodo";
import TodoList from "./components/TodoList/TodoList";
import "./styles/App.css"
import { Javascript } from "@mui/icons-material";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";

function App() {

  const [ posts, setPosts ] = useState([
    {id: 1, title: 'аа', body: 'тт'},
    {id: 2, title: 'гг 2', body: 'рр'},
    {id: 3, title: 'вв 3', body: 'лл'},
  ])

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  function getSortedPost(){
    console.log('РАБОТАЛА ФУНКЦИЯ СОРТЕД ПОСТС');
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }

  const sortedPosts = getSortedPost()

  const createPost =(newPost) => {
    setPosts([...posts, newPost])
  }

  // Получаем post из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  let [ todos, setTodos ] = useState([]);
  function addTask(newObj){
    let newTodos = [...todos];
    newTodos.push(newObj);
    setTodos(newTodos)
    console.log(todos);
  };

  function changeStatus(id){
    const newTodos = todos.map(item => {
      if(item.id === id){
        item.status = !item.status;
      };
      return item;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
    {/* <Navbar />
    <Routing />
    <Counter /> */}
    <PostForm create={createPost}/>
    <hr style={{margin: '15px 0'}}/>
    <div>
      <MyInput
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Поиск..."
      />
      <MySelect 
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сартировка" 
        option={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'}
        ]}/>
    </div>
    {posts.length 
    ? 
    <PostList remove={removePost} posts={sortedPosts} title="Посты про JS"/>
    : 
    <h1 style={{textAlign: 'center'}}>
      Посты не найдены!
      </h1>
      }
    </div>
  );
}

export default App;
