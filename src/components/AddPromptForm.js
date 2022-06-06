import React from 'react';

const AddPromptForm = ({handleSearch, isLoading}) => {
   const [prompt, setPrompt] = React.useState("")

   const handleSubmit = (e) => {
       e.preventDefault()
       handleSearch(prompt)
       setPrompt("")
   }
    return(
        <form className='form' onSubmit={handleSubmit}>     
            <label className="label" htmlFor="prompt">
                Enter a Prompt:
                <textarea className='textarea' id="prompt" name="prompt" placeholder='Enter prompt' value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
            </label>
            <button className='btn' type="submit" disabled={isLoading}>Submit</button>
        </form>
    ) 
}
export default AddPromptForm;
