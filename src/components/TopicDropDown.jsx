import { useState, useEffect } from "react"
import { getTopics } from "../../api"
import { useNavigate } from 'react-router-dom';







function TopicDropDown({onChange}){

const [topicData, setTopicData]=useState([])
const navigate=useNavigate()


useEffect(() => {
   
    getTopics().then((data)=>{

        setTopicData(data)

    })
    
      
    
  }, []);
  

  const handleSelectChange = (event) => {
    const selectedTopic=event.target.value;
    onChange(selectedTopic);
    navigate(`?topic=${selectedTopic}`)

};


  return(
<select name='topics' id='topics' onChange={handleSelectChange}>
<option value='select topic'>
            Select topic
            </option>
{topicData.map((topic) => {
    
        return (
           <> 
           
           <option value={topic.slug}>
            {topic.slug}
          </option>
          
          </>
          
        );
      })}

</select>


  )
  


}





export default TopicDropDown