//
// component.js
//
// Created by Erikas Janusauskas on 2025-03-12
// Copyright 2025, All rights reserved.
//

class Component {
    constructor(props = {}) {
        this.props = props
        this.state = {}
        this.element = null
    }
  
    // Define HTML template
    template() {
        return ``
    }
  
    // Add event listeners or logic
    setup() {}
  
    // Render component to the DOM
    render(parentSelector) {
        const parent = document.querySelector(parentSelector)
        parent.innerHTML = this.template();
        this.element = parent.lastElementChild;
        this.setup()
    }
  
    // Update state and re-render
    setState(newState) {
        this.state = { ...this.state, ...newState }
        this.render()
    }
}

export default Component