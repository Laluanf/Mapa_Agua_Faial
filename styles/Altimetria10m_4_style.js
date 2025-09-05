var size = 0;
var placement = 'point';

var style_Altimetria10m_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "6.5px \'Open Sans\', sans-serif";
    var labelFill = "#f0ff00";
    var bufferColor = "#000000";
    var bufferWidth = 1.2000000000000002;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("ELEVATION") !== null && resolution > 0 && resolution < 2) {
        labelText = String(feature.get("ELEVATION"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(190,207,80,0.9019607843137255)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
