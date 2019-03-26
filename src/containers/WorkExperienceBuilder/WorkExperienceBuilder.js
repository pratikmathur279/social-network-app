import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import WorkExperience from '../../components/WorkExperience/WorkExperience';

import Actions from '../../actions/Actions';

class WorkExperienceBuilder extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            experience: []
        };

        this.actions = new Actions();
      }

      componentWillMount(){
        let state = Object.assign({}, this.state);
        
        this.actions.getExperience(state.experience, (data)=> {
          state.experience = data;
          state.loading = false;
          this.setState(state);
        });   
    }

    render () {
        return (
            <Auxiliary>
                <WorkExperience experience={this.state.experience} loading={this.state.loading}/>
            </Auxiliary>
        );
    }
}

export default WorkExperienceBuilder;