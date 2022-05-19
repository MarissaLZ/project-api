import "./style.css"
import React from 'react';
import AddPromptForm from './AddPromptForm';
import List from './List';


const App = () => {
  const [search, setSearch] = React.useState("")
  //const [output, setOutput] = React.useState("")
  const [outputList, setOutputList] =React.useState([])
  
  //fetches search
  React.useEffect(()=> {
    if (search !== "") {
      const prompt = {
        "prompt": search,
        "temperature": 0.6,
        "max_tokens": 100,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0,
      }
      fetch('https://api.openai.com/v1/engines/text-curie-001/completions',{
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
           
        },
        body: JSON.stringify(prompt),
      })
        .then((response) =>response.json())
        .then((data) => {
          console.log(data.choices)
          const aiResponse = data.choices[0].text
          console.log(aiResponse)
          //setOutput(aiResponse)
          setOutputList((outputList) => 
          [ { id: Date.now(), prompt: search,aiResponse: aiResponse,}, ...outputList])
        })
        .catch((error) => console.log("error", error))
    }
  },[search])

  const handleSearch = (newSearch) => {
    setSearch(newSearch)
  }
 
  console.log("promptList",outputList)
  return (
    <>
      <h1>Fun with AI</h1>
      <AddPromptForm handleSearch={handleSearch}/>
      <h2>Responses</h2>
      <List outputList={outputList}/> 
    </>
  )
}
export default App;

