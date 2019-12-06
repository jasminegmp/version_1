import React from 'react';
import "./styles.scss";
import "../../section.scss";
import axios from 'axios';

const DescriptionItems = ({ data }) => {
  return (
      data.description && data.description.map((info, index)=>{return <li key ={index} >{info}</li>})
  )
}

const YearEvents = ({ year, data }) => {
  return (

    <ul>
      {data && Object.keys(data).map((item, index) => {
        if(item === 'description'){
          return (
              <DescriptionItems data = {data}/>
          )
        }
        else{
          return <li key ={index}>{data[item]}</li>
        }
        
      })}
    </ul>
  )
}

class Timeline extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
        data: null
    };
  }

  async componentDidMount() {

    const path = 'timelinedata.json';
    const response = await axios.get(path);
    this.setState({data: response.data})
  }


  render() {
    const {data} = this.state;
    return (
        <div class = "section-container" id = "timeline">
            <div class = "section-info timeline-info">
                <h1 class = "section-headline">Timeline</h1>
                
                  {
                    data && Object.keys(data).map((year,index) => {
                      return [
                        <span>{year}</span>,
                        <YearEvents key={index} year={year} data={data[year]} />
                      ]
                      })


                  }

            </div>
        </div>
    )
  }
}

export default Timeline;
