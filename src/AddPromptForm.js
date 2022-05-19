import React from 'react';

const AddPromptForm = ({handleSearch}) => {
   const [prompt, setPrompt] = React.useState("")

   const handleSubmit = (e) => {
       e.preventDefault()
       handleSearch(prompt)
       setPrompt("")
       //addPrompt({id: Date.now(), prompt: prompt})
   }
    return(
        <form onSubmit={handleSubmit}>     
            <label htmlFor="prompt">
                Enter a Prompt:
                <textarea id="prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    ) 
}

export default AddPromptForm;
