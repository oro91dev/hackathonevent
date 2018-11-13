import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/myButton';


export default class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:30
    }

    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage()
        }, 30)
    }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">

            <Fade
                onReveal={()=> this.percentage()}
                >

                <div className="discount_percentage">
                    <span>{this.state.discountStart}%</span>
                    <span>SALG</span>
                </div>
                </Fade>

                <Slide right>
                    <div className="discount_description">
                        <h3>Kjøp biletter før den 20 Mars</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    
                        <MyButton
                            text="Kjøp Billet"
                            bck="#ffa800"
                            color="#ffffff"
                            link="https://nla.no"
                            />

                    </div>
                </Slide>
        </div>
      </div>
    )
  }
}
