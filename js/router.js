//
// router.js
//
// Created by Erikas Janusauskas on 2025-03-12
// Copyright 2025, All rights reserved.
//

class Router {
    constructor(routes) {
        this.routes = routes;
        this.currentComponent = null;
        this.paramRegex = /:(\w+)/g;

        // Listen for hash changes instead of popstate
        window.addEventListener("hashchange", () => this.handleRoute());
        this.handleRoute();
    }

    matchRoute(path) {
        for (const route in this.routes) {
            const routeParts = route.split("/");
            const pathParts = path.split("/");
    
            if (routeParts.length !== pathParts.length) continue;
    
            let params = {};
            let isMatch = routeParts.every((part, i) => {
                if (part.startsWith(":")) {
                    params[part.slice(1)] = decodeURIComponent(pathParts[i]);
                    return true;
                }
                return part === pathParts[i];
            });
    
            if (isMatch) return { component: this.routes[route], params };
        }
    
        return { component: this.routes["/404"], params: {} };
    }    

    handleRoute() {
        // Get path from hash (e.g., "#/song/Colors" → "/song/Colors")
        const path = window.location.hash.slice(1) || '/';
        const { component: ComponentClass, params } = this.matchRoute(path);

        if (this.currentComponent) {
            this.currentComponent.element.remove();
        }

        this.currentComponent = new ComponentClass({ params });
        this.currentComponent.render("#app");
    }

    navigate(path) {
        // Update the hash instead of using pushState
        window.location.hash = path;
    }
}

export default Router
