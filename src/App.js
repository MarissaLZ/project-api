import "./style.css"
import React from 'react';
import AddPromptForm from './components/AddPromptForm';
import List from './components/List';
import Loading from './components/Loading';
import {fetchResponse} from "./api.js"

const App = () => {
  const [search, setSearch] = React.useState("")
  const [outputList, setOutputList] = React.useState(JSON.parse(localStorage.getItem("savedResponses")) || [])
  const [isLoading, setIsLoading] = React.useState(false)
 
  //fetches user search
  React.useEffect(()=> {
    if (search !== "") {
      setIsLoading(true)
      fetchResponse(search)
      .then((data) => {
        const aiResponse = data.choices[0].text
        setOutputList((outputList) => 
        [{ id: Date.now(), prompt: search, aiResponse: aiResponse }, ...outputList])
        setIsLoading(false)
      })
      .catch((error) => console.log("error", error))
    }
  },[search])

  //stores user responses
  React.useEffect(() => {
    localStorage.setItem('savedResponses', JSON.stringify(outputList));
  }, [outputList]);

  //updates search state
  const handleSearch = (newSearch) => {
    setSearch(newSearch)
  }
  
  return (
    <>
      <h1 className="title">Fun with AI</h1>
      <AddPromptForm handleSearch={handleSearch} isLoading={isLoading}/>
      {!isLoading && !!outputList.length && <h2 className="subtitle">Responses</h2>}     
      {isLoading ? <Loading /> : <List outputList={outputList}/>}
    </>
  )
}
export default App;

