import { useState } from "react"
import { getTopics } from "../../api"
import axios from "axios"

function TopicDropDown(){

const [topicData, setTopicData]=useState([])

useEffect(() => {
    axios
      .get(`https://nc-marketplace-sem-1.onrender.com/api/topics`)
      .then((response) => {
        const topicData = response.data.topics;
        console.log(topicData)
        
        setTopicData(topicData);
      });
  }, []);

  const handleSelectChange = (event) => {
    onChange(event.target.value);
  };

  return(
<>
    <label for="Topics">Choose a topic:</label>

<select name="topics" id="topics" onChange={handleSelectChange}>
{topicData.map((topic) => {
        return (
          <option value={topic.slug}>
            {topic.slug}
          </option>
          
        );
      })}

</select>
</>
  )


}



export default TopicDropDown