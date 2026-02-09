import ProfileCard from "./Components/ProfileCard";

export  interface UserProfile{
  name:string;
  age:number;
  bloodGroup:string;
  designation:string;
  image:string;
}

const App = () => {
  const users = [
    {
      name: "Jane Doe",
      age: 28,
      bloodGroup: "O+",
      designation: "Software Engineer",
      image: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "John Smith",
      age: 32,
      bloodGroup: "A-",
      designation: "Product Designer",
      image: "https://images.unsplash.com/..."
    },
    {
      name: "John Smith",
      age: 32,
      bloodGroup: "A-",
      designation: "Product Designer",
      image: "https://images.unsplash.com/..."
    },
    {
      name: "John Smith",
      age: 32,
      bloodGroup: "A-",
      designation: "Product Designer",
      image: "https://images.unsplash.com/..."
    },
    {
      name: "John Smith",
      age: 32,
      bloodGroup: "A-",
      designation: "Product Designer",
      image: "https://images.unsplash.com/..."
    },
    {
      name: "John Smith",
      age: 32,
      bloodGroup: "A-",
      designation: "Product Designer",
      image: "https://images.unsplash.com/..."
    },
    {
      name: "John Smith",
      age: 32,
      bloodGroup: "A-",
      designation: "Product Designer",
      image: "https://images.unsplash.com/..."
    }
  ];
  return (
    <div className="h-screen p-10">
      {/* - overflow-x-auto: enables horizontal scrolling 
          - flex-nowrap: prevents cards from wrapping to the next line
          - scroll-smooth: makes programmatic scrolling smooth
          - scrollbar-hide: (optional) hides the scrollbar for a cleaner look
      */}
      <div className="flex flex-row  overflow-x-auto flex-nowrap scroll-smooth snap-x gap-8">
        {users.map((item,index) =>(
          <div key={index} className="shrink-0 w-80 snap-center">
            <ProfileCard user={item}/>
          </div>
        
      ))}
      </div>
      
    </div>
  )
}

export default App