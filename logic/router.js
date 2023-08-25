function shiftRoute(queryRoute) {
    var routes = document.querySelectorAll(".routes");
    routes.forEach(function(route) {
        var isSelectedRoute = route.classList.contains(queryRoute.substring(1)+'-route');
        isSelectedRoute? route.classList.remove("route-blocker") : route.classList.add("route-blocker");
    });
}