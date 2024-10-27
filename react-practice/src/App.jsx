
import GroupList from './components/GroupList'
import Table from './components/Table'
import Table2 from './components/Table2'
import List2 from './components/List2'






function App() {
  
  const people = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      city: "New York",
      contact: "123-456-7890"
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      city: "Los Angeles",
      contact: "987-654-3210"
    },
    {
      name: "Sam Wilson",
      email: "samwilson@example.com",
      city: "Chicago",
      contact: "555-666-7777"
    },
    {
      name: "Lisa Brown",
      email: "lisabrown@example.com",
      city: "Houston",
      contact: "444-333-2222"
    }
  ];

  let  newPeople = [];


  people.map((item, index) => {


    newPeople.push(item)
    
     
  })

  


  return <div><GroupList/>

    <Table />
    
    <Table2 data={newPeople} />
    <List2 />
    
  
  </div>
}

export default App;


