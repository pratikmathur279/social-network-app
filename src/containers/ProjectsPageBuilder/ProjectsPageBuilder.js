import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import ProjectInformation from '../../components/Projects/ProjectInformation/ProjectInformation';
import Projects from '../../components/Projects/Projects';
import classes from './ProjectsPageBuilder.css';

import Modal from '../../components/UI/Modal/Modal';

import Actions from '../../actions/Actions';

class ProjectsPageBuilder extends Component {
    constructor() {
        super();
        this.state = {
          isFlipped: false,
          showProject: false,
          loading: true,
          selected: {},
          original: [],
          split: [],
          currentImageIndex: 0,
          projects: [],
            description: {
                description1: "Click on the images to view details"
            }
        };
        this.createRows = this.createRows.bind(this);
        this.openModalHandler = this.openModalHandler.bind(this);
        this.closeModalHandler = this.closeModalHandler.bind(this);
        // this.nextSlide = this.nextSlide.bind(this);
        this.actions = new Actions();
        // this.previousSlide = this.previousSlide.bind(this);
      }
      
      componentWillMount(){
        let state = Object.assign({}, this.state);  
        this.actions.getProjects(state.projects, (data)=> {
            state.projects = data;
            let projects = state.projects;
            for(var i in projects){
                state.original.push(projects[i])
            }
            let split = this.createRows(state.projects);
              state.split = split;
              state.loading = false;
              this.setState(state);
          });
      }

        openModalHandler(id){
            console.log(id);
            let state = Object.assign({}, this.state);
            var projects = state.original;

            for(var i in projects){
                if(id == projects[i].index){
                    state.selected = projects[i];
                }
            }
            state.showProject = true;
            this.setState(state);
            console.log(state);
        }

        closeModalHandler = () => {
         this.setState({showProject: false});
      }

      createRows(original){
        var arr = [];
        while(original.length > 0){
            var split = original.splice(0,3);
            arr.push(split);
        }
        return arr;
      }
    
    render () {
        return (
            <Auxiliary>
                <h1 className={classes.ProjectsHeader}>Projects</h1>
                <Modal show={this.state.showProject} modalClosed={this.closeModalHandler}>
                    <ProjectInformation showProject={this.state.showProject} card={this.state.selected} />
                </Modal>

                <Projects 
                    loading={this.state.loading}
                    split={this.state.split} 
                    openModalHandler={this.openModalHandler} 
                />
            </Auxiliary>
        );
    }
}

export default ProjectsPageBuilder;