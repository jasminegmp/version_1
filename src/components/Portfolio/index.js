import React from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import "./styles.scss";
import "../../section.scss";
import "../HighlightLink/styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add( fas, fab);


const DescriptionItems = ({ data }) => {
  return (
      data.technologies && data.technologies.map((info, index)=>{
        return <div className = "technologies-item" key ={index}>{info}</div>
      })
  )
}

const ExternalLink = ({data, item}) => {
  return (
    <a className ="portfolio-link" href= {data[item]} target = "_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={['fas','external-link-alt']}>
          <div class = "highlight">dfdf</div>
      </FontAwesomeIcon>
    </a>
  )
}

const GithubLink = ({data, item}) => {
    return (
      <a className ="portfolio-link" href= {data[item]}  target = "_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={['fab','github']}>
            <div class = "highlight"></div>
        </FontAwesomeIcon>
      </a>
    )

}

const CodepenLink = ({data, item}) => {
    return (
      <a className ="portfolio-link" href= {data[item]}  target = "_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={['fab','codepen']}>
            <div class = "highlight"></div>
        </FontAwesomeIcon>
      </a>
    )

}

const PortfolioDetail = ({item, data}) => {
  return <div className = "portfolio-item">
      <h2>{item}</h2>
      {data && Object.keys(data).map((item, index) => {
        if(item === 'technologies'){
          return (
            <div key = {index} className = "section-row row-margin">
              <DescriptionItems data = {data}/>
            </div>
          )
        }
        else if(item === 'description'){
          return (
             <div key = {index} className = "row-margin">{data[item]}</div>
          )
        }
        else if (item === 'github'){
          if (data[item]){
            return (
              <GithubLink key = {index} data={data} item={item}/>
            )
          }
          
        }
        else if (item === 'codepen'){
          if (data[item]){
            return (
              <CodepenLink key = {index} data={data} item={item}/>
            )
          }
        }
        else{
          return (
            <ExternalLink key = {index} data={data} item={item}/>
          )
          
        }
        
      })}
  </div>
}


class Portfolio extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
      data: null,
      key: null
    };
  }


  async componentDidMount() {
    const path = 'portfoliodata.json';
    const response = await axios.get(path);
    this.setState({data: response.data})
  }


  render() {
    const { data } = this.state;

    return (
      <div>
        <div className = "section-container portfolio-container" id = "portfolio">
          <div className = "section-info portfolio-info">
            <h1 className = "section-headline">Portfolio</h1>
            
            <div className = "section-row portfolio-row">
              
            {
              data && Object.keys(data).map((item, index)=>{
                  return <PortfolioDetail key={index} item={item} data={data[item]}/>
              })
            }
            </div>
            <div className = "section-row">
              <Link className = 'highlight-link' to='/archive'>View More in Archive</Link>
            </div>
          </div>
        </div>
        
        
        


      </div>
    )
  }
}

export default  withRouter(Portfolio);
