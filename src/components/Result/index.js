import React from 'react'
import { connect } from 'react-redux'
import Styles from './styles'

class Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let phase_name = [
      { text: 'Identify', color: '#4db53c' },
      { text: 'Protect', color: '#dd9d22' },
      { text: 'Detect', color: '#2225dd' },
      { text: 'Response', color: '#307bbb' },
      { text: 'Recovery', color: '#307bbb' },
    ]
    let result = Object.values(this.props.result)
    return (
      <Styles>
        <div className="result-container">
          <div className="title">CSRI Dashboard</div>
          <div className="body">
            <div className="percent-container">
              <div className="percent-title">
                Maturity results of your assessment
              </div>
              <div className="percent-body">
                {result.map &&
                  result.map((ele, index) => {
                    return (
                      <div key={index} className="percent-box">
                        <div className="phase-name">
                          {phase_name[index].text}
                        </div>
                        <div
                          className="percent-circle"
                          style={{ borderColor: phase_name[index].color }}
                        >
                          {ele.percent}
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
            <div className="thank-you-box">
              <div className="thank-you-title">Thank You!</div>
              <div className="thank-you-subtitle">
                Based on your result, we have our <span>Recommentdations</span>{' '}
                to improve your maturity level.
              </div>
            </div>
            <div className="overall-result">
              <div className="overall-result-title">
                Overall Maturity Results
              </div>
              <div className="overall-result-table">
                <div className="row">
                  <div className="column">Phase</div>
                  <div className="column">Score</div>
                  <div className="column">Maturity Level</div>
                </div>
                {result.map &&
                  result.map((ele, index) => {
                    return (
                      <div className="row" key={index}>
                        <div className="column">
                          {phase_name[index].text.toUpperCase()}
                        </div>
                        <div className="column">{ele.overall.score}</div>
                        <div className="column">
                          {ele.overall.maturity_level}
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
            <div className="detailed-result">
              <div className="detailed-result-title">
                Detailed Results of each phase
              </div>
              {result.map &&
                result.map((ele, index) => {
                  return (
                    <div className="category">
                      <div className="category-name" key={index}>
                        {phase_name[index].text}
                      </div>
                      <div className="category-table">
                        <div className="row">
                          <div className="column">Category</div>
                          <div className="column">Score</div>
                          <div className="column">Maturity Level</div>
                        </div>
                        {ele.subcategories &&
                          ele.subcategories.map &&
                          ele.subcategories.map((sub, subi) => {
                            return (
                              <div className="row" index={subi}>
                                <div className="column">{sub.name}</div>
                                <div className="column">{sub.score}</div>
                                <div className="column">
                                  {sub.maturity_level}
                                </div>
                              </div>
                            )
                          })}
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </Styles>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.result,
  }
}

export default connect(mapStateToProps, null)(Result)
