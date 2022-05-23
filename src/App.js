import "./style.css"
import React from 'react';
import AddPromptForm from './AddPromptForm';
import List from './List';
import Loading from './Loading';

const App = () => {
  const [search, setSearch] = React.useState("")
  const [outputList, setOutputList] = React.useState(JSON.parse(localStorage.getItem("savedResponses")) || [])
  const [isLoading, setIsLoading] = React.useState(false)
 
  //fetches user search
  React.useEffect(()=> {
    if (search !== "") {
      setIsLoading(true)

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
          const aiResponse = data.choices[0].text
          setOutputList((outputList) => 
          [ { id: Date.now(), prompt: search,aiResponse: aiResponse,} , ...outputList])
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

