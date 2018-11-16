var dao = (function dao(map) {
    var map = map;

    function getList(callback) {
        callback(arr);
    }

    function findNNStore() {
        return arr[0];
    }
    function clearMarkers() {
        console.log("clear")
        for(var store of arr){
            if(store.marker){
                store.marker.setMap(null);
            }
        }
        console.log(arr);
    }
    // function clone(origin) {
    //    var result=[];
    //    for(var obj of origin){
    //        result.push(obj);
    //    }
    //    return result;
    // }

    function showMarker() {

        for(store of arr) {
            if (!store.marker) {
                store.marker = new daum.maps.Marker({
                    position: new daum.maps.LatLng(store.lat, store.lng),
                    map: map
                });
            } else {
                store.marker.setMap(map);
            }

        }
    }
    return {
        getList: getList,
        showMarker: showMarker,
        findNNStore:findNNStore,
        clearMarkers:clearMarkers

    }

})(map);