import React from 'react';
import axios from 'axios';
import "./styles.scss";
import "../../section.scss";


const DescriptionItems = ({ data }) => {
  return (
      data.technologies && data.technologies.map((info, index)=>{return <div key ={index} >{info}</div>})
  )
}

const PortfolioDetail = ({title, data}) => {
  return <div className = "portfolio-item">
      {data && Object.keys(data).map((item, index) => {
        if(item === 'technologies'){
          return (
              <DescriptionItems data = {data}/>
          )
        }
        else if(item === 'description'){
          return (
             <div>{data[item]}</div>
          )
        }
        else{
          return <h3>{data[item]}</h3>
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
      <div className = "section-container portfolio-container" id = "portfolio">
        <div className = "section-info portfolio-info">
          <h1 className = "section-headline">Portfolio</h1>
          <div className = "section-row portfolio-row">
          {
            data && Object.keys(data).map((item, index)=>{
                return <PortfolioDetail key={item} item={item} data={data[item]}/>
            })
          }
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;
