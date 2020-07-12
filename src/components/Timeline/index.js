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
    <ul className = "list-container" >
      <h5>{year}</h5>
      {data && Object.keys(data).map((item, index) => {
        
        if(item === 'description'){
          return (
              <DescriptionItems data = {data}/>
          )
        }
        else if(item === 'location'){
          return (
             <h5>{data[item]}</h5>
          )
        }
        else{
          return <h4>{data[item]}</h4>
        }
        
      })}
    </ul>
  )
}

const DisplayDetail = ({year, data}) => {
  return <div className = "detail-container">
     <YearEvents key={year} year={year} data={data[year]} />
    </div>
}

class Timeline extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
        data: {
          "title": "Joined Zymo Research as a Software Developer ",
          "location": "Orange County, CA",
          "description": ["Leading and supporting the development of web applications, tools, and landing pages for the e-commerce website at Zymo Research", "Specifically develop with Python, Flask, Javascript, jQuery, Bootstrap, API, Shopify Themekit and Liquid, HTML/CSS"]
        },
        key: "2020"
    };
  }

  async componentDidMount() {

    const path = 'timelinedata.json';
    const response = await axios.get(path);
    this.setState({data: response.data})
  }


  handleClick = (event, year) => {
    event.preventDefault();
    this.setState({key:year});
  }
  


  render() {
    const {data, key} = this.state;
    return (
        <div className = "section-container" id = "timeline">
            <div className = "section-info timeline-info">
                <h1 className = "section-headline">Timeline</h1>
                <div className = "section-row timeline-row">
                  <div className = "section-column year-column">
                    {
                        data && Object.keys(data).map((year,index) => {
                          return (
                            <button key = {index} className="year-container" onClick={(event)=>this.handleClick(event, year)}>{year}</button>
                          )})
                      }
                    </div>
                    <div className = "section-column detail-column">

                      {key? <DisplayDetail year = {key} data = {data}/> : <div className = "default-detail-box">Click on a year</div>}
                    </div>
                  </div>
            </div>
        </div>
    )
  }
}

export default Timeline;
