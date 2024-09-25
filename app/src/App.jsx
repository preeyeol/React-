import Welcome from "./Welcome"
import About from "./About"
import StudentList from "./StudentLists"
import Profile from "./ProfileCard"
import ProductCard from "./ProductCard"
import MovieList from "./Movie"
import BlogFeed from "./BlogFeed"
import RecipeBook from "./RecipeBook"

const name="Privik"
const student=["Alice","Bob","Charlie"];

const profile={
  name:"Privik",
  age:1.8,
  bio:"Privik is a good Boy."
}

const movieList=[{title: "Inception", year: 2010}, {title: "The Matrix", year: 1999}];

const posts=[{
      title: "Learning React",
      author: "Jane Doe",
      content: "React is a powerful tool...",
      date: "Sept 1, 2024",
    },
    {
      title: "JavaScript Tricks",
      author: "John Smith",
      content: "Let me share some cool JS tricks...",
      date: "Sept 2, 2024",
    },
    {
      title: "CSS Basics",
      author: "Emily Davis",
      content: "CSS can be fun and easy!",
      date: "Sept 3, 2024",
    }
  ]

  const product={
    ProductName:"Laptop",
    price:"$999",
    description:"A high-performance laptop"

  }
  const recipes=[
    {
      title: "Pancakes",
      ingredients: ["Flour", "Milk", "Eggs", "Sugar"],
      instructions: "Mix all ingredients and fry.",
    },
    {
      title: "Spaghetti",
      ingredients: ["Pasta", "Tomato Sauce", "Olive Oil"],
      instructions: "Boil the pasta and add the sauce.",
    },
    {
      title: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      instructions: "Chop vegetables and toss together.",
    },
  ]
const App=()=>{
  return(
<div >
   <Welcome names={name}/>
  <div className="all">
    <p style={{textAlign:"center"}}>This is my homePage. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Facere quo sunt officiis modi neque atque optio veritatis minima et qui, porro rerum, dolore explicabo doloribus facilis nemo nesciunt corporis consectetur.</p>
    </div>
    <div>
      <Profile profiles={profile}/>
    </div>
<div >
 <div className="about">
  <About names={name}/>
  </div>
  <div className="list">
  <StudentList students={student}/>
  </div>
  <div className="product">
  <ProductCard products={product}/>
  </div>
  <MovieList movie={movieList}/>
</div>
{/* 
<div>
  <BlogPost posts={posts}/>
</div> */}
  <div className="product">
      <h1>Blog Feed</h1>
      <BlogFeed posts={posts} />
    </div>

    <div className="product">
      <h1>Recipe </h1>
      <RecipeBook recipes={recipes}/>
    </div>
</div>
  ) 
}

export default App